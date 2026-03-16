"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

const GALLERY_WIDTH = 1440;
const GALLERY_HEIGHT = 667;
const MIN_DRAG_PROGRESS = 0;
const MAX_DRAG_PROGRESS = 1;
const KEYBOARD_DRAG_STEP = 0.08;

type Frame = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type ImageLayer = {
  left: string;
  top: string;
  width: string;
  height: string;
};

type GalleryTile = {
  id: string;
  src: string;
  frame: Frame;
  image: ImageLayer;
};

type DragState = {
  pointerId: number | null;
  startX: number;
  startProgress: number;
};

const topRowTiles: GalleryTile[] = [
  {
    id: "top-right",
    src: "/about/past-moments/top-right.jpg",
    frame: { left: 1041, top: 0, width: 389, height: 313 },
    image: {
      left: "-20.27%",
      top: "-3.9%",
      width: "130.19%",
      height: "107.83%",
    },
  },
  {
    id: "top-left",
    src: "/about/past-moments/top-left.jpg",
    frame: { left: 0, top: 2, width: 587, height: 310 },
    image: {
      left: "-0.01%",
      top: "-13.16%",
      width: "98.41%",
      height: "124.25%",
    },
  },
  {
    id: "top-center",
    src: "/about/past-moments/top-center.jpg",
    frame: { left: 576, top: 2, width: 465, height: 310 },
    image: {
      left: "-0.01%",
      top: "0%",
      width: "100.02%",
      height: "100%",
    },
  },
  {
    id: "top-offscreen-2",
    src: "/about/past-moments/top-offscreen-2.jpg",
    frame: { left: 1894, top: 2, width: 586, height: 310 },
    image: {
      left: "0%",
      top: "-13.12%",
      width: "100%",
      height: "126.23%",
    },
  },
  {
    id: "top-offscreen-1",
    src: "/about/past-moments/top-offscreen-1.jpg",
    frame: { left: 1430, top: 0, width: 464, height: 309 },
    image: {
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
    },
  },
];

const bottomRowTiles: GalleryTile[] = [
  {
    id: "bottom-offscreen-2",
    src: "/about/past-moments/bottom-offscreen-2.jpg",
    frame: { left: -812, top: 367, width: 465, height: 310 },
    image: {
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100.01%",
    },
  },
  {
    id: "bottom-offscreen-1",
    src: "/about/past-moments/bottom-offscreen-1.jpg",
    frame: { left: -1313, top: 367, width: 501, height: 310 },
    image: {
      left: "-2.22%",
      top: "-58.43%",
      width: "102.24%",
      height: "248.06%",
    },
  },
  {
    id: "bottom-peek-left",
    src: "/about/past-moments/bottom-peek-left.jpg",
    frame: { left: -348, top: 367, width: 465, height: 310 },
    image: {
      left: "-1.76%",
      top: "-1.68%",
      width: "103.56%",
      height: "103.36%",
    },
  },
  {
    id: "bottom-left",
    src: "/about/past-moments/bottom-left.jpg",
    frame: { left: 117, top: 367, width: 362, height: 309 },
    image: {
      left: "-24.43%",
      top: "-0.01%",
      width: "128.24%",
      height: "100.01%",
    },
  },
  {
    id: "bottom-center",
    src: "/about/past-moments/bottom-center.jpg",
    frame: { left: 479, top: 367, width: 481, height: 309 },
    image: {
      left: "0%",
      top: "-0.02%",
      width: "100%",
      height: "103.77%",
    },
  },
  {
    id: "bottom-right",
    src: "/about/past-moments/bottom-right.jpg",
    frame: { left: 960, top: 367, width: 464, height: 309 },
    image: {
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
    },
  },
];

const dragStickerFrame: Frame = {
  left: 1046,
  top: 309,
  width: 100,
  height: 100,
};

function clampProgress(nextProgress: number) {
  return Math.max(MIN_DRAG_PROGRESS, Math.min(MAX_DRAG_PROGRESS, nextProgress));
}

function toPercent(value: number, base: number) {
  return `${(value / base) * 100}%`;
}

function frameStyle(frame: Frame) {
  return {
    left: toPercent(frame.left, GALLERY_WIDTH),
    top: toPercent(frame.top, GALLERY_HEIGHT),
    width: toPercent(frame.width, GALLERY_WIDTH),
    height: toPercent(frame.height, GALLERY_HEIGHT),
  };
}

function GalleryRow({ tiles }: { tiles: GalleryTile[] }) {
  return (
    <>
      {tiles.map((tile) => (
        <div
          key={tile.id}
          aria-hidden="true"
          className="absolute overflow-hidden"
          style={frameStyle(tile.frame)}
        >
          <div
            className="absolute bg-cover bg-no-repeat"
            style={{
              ...tile.image,
              backgroundImage: `url("${tile.src}")`,
              backgroundPosition: "center",
            }}
          />
        </div>
      ))}
    </>
  );
}

function getRightOverflow(tiles: GalleryTile[]) {
  return Math.max(...tiles.map((tile) => tile.frame.left + tile.frame.width)) - GALLERY_WIDTH;
}

function getLeftOverflow(tiles: GalleryTile[]) {
  return Math.abs(Math.min(...tiles.map((tile) => tile.frame.left)));
}

function GalleryStage({ className }: { className: string }) {
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<DragState>({
    pointerId: null,
    startX: 0,
    startProgress: 0,
  });

  const topRowTravel = getRightOverflow(topRowTiles);
  const bottomRowTravel = getLeftOverflow(bottomRowTiles);

  function handleDragStart(event: PointerEvent<HTMLButtonElement>) {
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startProgress: dragProgress,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  }

  function handleDragMove(event: PointerEvent<HTMLButtonElement>) {
    const dragState = dragStateRef.current;

    if (dragState.pointerId !== event.pointerId) {
      return;
    }

    const stageWidth = stageRef.current?.getBoundingClientRect().width ?? GALLERY_WIDTH;
    const nextProgress = clampProgress(
      dragState.startProgress - (event.clientX - dragState.startX) / stageWidth
    );

    setDragProgress(nextProgress);
  }

  function handleDragEnd(event: PointerEvent<HTMLButtonElement>) {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleLostPointerCapture() {
    dragStateRef.current.pointerId = null;
    setIsDragging(false);
  }

  function handleDragKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setDragProgress((currentProgress) =>
        clampProgress(currentProgress + KEYBOARD_DRAG_STEP)
      );
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setDragProgress((currentProgress) =>
        clampProgress(currentProgress - KEYBOARD_DRAG_STEP)
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setDragProgress(MIN_DRAG_PROGRESS);
    }

    if (event.key === "End") {
      event.preventDefault();
      setDragProgress(MAX_DRAG_PROGRESS);
    }
  }

  const topRowTransform = `translate3d(-${(topRowTravel / GALLERY_WIDTH) * 100 * dragProgress}%, 0, 0)`;
  const bottomRowTransform = `translate3d(${(bottomRowTravel / GALLERY_WIDTH) * 100 * dragProgress}%, 0, 0)`;
  const motionClassName = isDragging
    ? "will-change-transform"
    : "transition-transform duration-300 ease-out will-change-transform";

  return (
    <div
      ref={stageRef}
      className={`relative overflow-hidden bg-black select-none ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${motionClassName}`}
        style={{ transform: topRowTransform }}
      >
        <GalleryRow tiles={topRowTiles} />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${motionClassName}`}
        style={{ transform: bottomRowTransform }}
      >
        <GalleryRow tiles={bottomRowTiles} />
      </div>

      <button
        type="button"
        aria-label="Drag to explore more past moments"
        className={`absolute flex touch-none items-center justify-center rounded-full bg-[#d82d33] text-white outline-none ${isDragging ? "cursor-grabbing" : "cursor-grab"} focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
        style={frameStyle(dragStickerFrame)}
        onKeyDown={handleDragKeyDown}
        onLostPointerCapture={handleLostPointerCapture}
        onPointerCancel={handleDragEnd}
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
      >
        <span className="rotate-[10deg] text-[clamp(0.72rem,1.4vw,1.125rem)] font-bold leading-none">
          DRAG
        </span>
      </button>
    </div>
  );
}

export default function PastMomentsSection() {
  return (
    <section
      id="past-moments"
      aria-labelledby="past-moments-heading"
      className="bg-black px-4 py-16 text-white sm:px-6 lg:px-0 lg:py-0"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <h2
          id="past-moments-heading"
          className="font-league-gothic text-center text-[4rem] leading-[0.8] tracking-[-0.04em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.35)] sm:text-[5.5rem] lg:text-[128px] lg:leading-[0.734375]"
        >
          <span>PAST </span>
          <span className="text-[#d82d33]">MOMENTS</span>
        </h2>

        <p className="mt-7 max-w-[752px] px-3 text-center text-sm leading-[1.25] text-white sm:px-6 sm:text-base lg:mt-[51px] lg:px-0 lg:text-[18px] lg:leading-[21px]">
          From electrifying speaker performances to moving stories, take a look
          at some of last year&apos;s moments that have molded
          TEDxAteneodeManilaU and invigorated the Loyola Campus.
        </p>

        <div className="mt-12 hidden w-full lg:block lg:mt-[51px]">
          <GalleryStage className="aspect-[1440/667] w-full max-w-[1440px]" />
        </div>

        <div className="mt-10 w-full overflow-hidden lg:hidden">
          <div className="relative left-1/2 h-[394px] w-[850px] -translate-x-1/2 sm:h-[487px] sm:w-[1050px]">
            <GalleryStage className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
