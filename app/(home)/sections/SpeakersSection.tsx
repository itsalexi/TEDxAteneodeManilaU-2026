"use client";
import { useState } from "react";

const imgSpotlight = "/speakers/spotlight.png";
const imgWall = "/speakers/hallway-wall.png";
const imgPerson = "/speakers/person-silhouette.png";
const imgDoorknob = "/speakers/doorknob.svg";

/* ── Door component ─────────────────────────────────────────────── */
function Door({
  number,
  isOpen,
  onClick,
}: {
  number: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="relative w-full overflow-clip cursor-pointer"
      style={{ aspectRatio: "250 / 470" }}
      onClick={onClick}
    >
      {/* Wrapper — slides left to reveal behind-door content */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-in-out"
        style={{ transform: isOpen ? "translateX(-121.2%)" : "translateX(0)" }}
      >
        {/* ── Behind the door ── */}
        <div
          className="absolute bg-[#d82d33]"
          style={{ inset: "0 -121.2% 0 121.2%" }}
        />
        <div
          className="absolute overflow-hidden"
          style={{
            left: "121.2%",
            right: "-121.2%",
            top: "30.64%",
            bottom: 0,
          }}
        >
          <img
            src={imgPerson}
            alt=""
            className="absolute max-w-none"
            style={{
              width: "108%",
              height: "106.87%",
              left: "-4%",
              top: "-0.06%",
            }}
          />
        </div>
        <p
          className="absolute font-display text-white text-center tracking-[-0.96px] whitespace-nowrap"
          style={{
            left: "calc(121.2% + 50%)",
            transform: "translateX(-50%)",
            top: "7.02%",
            fontSize: "clamp(14px, 1.67vw, 24px)",
          }}
        >
          {number}
        </p>

        {/* ── Front face of door ── */}
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute flex items-center justify-center overflow-hidden"
          style={{ inset: "10.85% 12.4%" }}
        >
          <p
            className="font-display text-tedx-red opacity-70 text-center leading-none tracking-[-0.04em]"
            style={{ fontSize: "clamp(150px, 34.7vw, 500px)" }}
          >
            X
          </p>
        </div>
        <div
          className="absolute"
          style={{
            top: "47.45%",
            bottom: "47.45%",
            right: "7.6%",
            left: "82.8%",
          }}
        >
          <img
            src={imgDoorknob}
            alt=""
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <p
          className="absolute font-display text-[#991a04] text-center tracking-[-0.96px] whitespace-nowrap left-1/2 -translate-x-1/2"
          style={{
            top: "7.02%",
            fontSize: "clamp(14px, 1.67vw, 24px)",
          }}
        >
          {number}
        </p>
      </div>
    </div>
  );
}

/* ── Wall crops per slot ────────────────────────────────────────── */
const slots = [
  {
    width: "30.64%",
    aspect: "424 / 559",
    crop: { width: "205.9%", height: "312.14%", left: "-36.99%", top: "-115.61%" },
    doorLeft: "38.68%",
    doorWidth: "58.96%",
    flip: false,
  },
  {
    width: "19.36%",
    aspect: "268 / 559",
    crop: { width: "325.76%", height: "312.14%", left: "-115.23%", top: "-115.61%" },
    doorLeft: "4.10%",
    doorWidth: "93.28%",
    flip: false,
  },
  {
    width: "19.36%",
    aspect: "268 / 559",
    crop: { width: "325.76%", height: "312.14%", left: "-115.23%", top: "-115.61%" },
    doorLeft: "4.48%",
    doorWidth: "93.28%",
    flip: false,
  },
  {
    width: "30.64%",
    aspect: "424 / 559",
    crop: { width: "205.9%", height: "312.14%", left: "-36.99%", top: "-115.61%" },
    doorLeft: "2.59%",
    doorWidth: "58.96%",
    flip: true,
  },
];

/* ── Section ────────────────────────────────────────────────────── */
export default function SpeakersSection() {
  const [openDoor, setOpenDoor] = useState<number | null>(null);

  const toggle = (id: number) => setOpenDoor(openDoor === id ? null : id);

  return (
    <section id="speakers" className="w-full bg-black relative overflow-hidden">
      {/* Spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[83.75%] opacity-80 pointer-events-none">
        <img src={imgSpotlight} alt="" className="w-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-7 pt-[13%] pb-[5%]">
        {/* Heading + subtitle */}
        <div className="flex flex-col items-center gap-6 text-center text-white max-w-[752px]">
          <h2
            className="font-display leading-none tracking-[-0.04em]"
            style={{
              fontSize: "clamp(3rem, 8.9vw, 128px)",
              textShadow: "0 4px 25px rgba(0,0,0,.35)",
            }}
          >
            MEET THE SPEAKERS
          </h2>
          <p className="font-sans text-lg">
            Open the doors to see their details!
          </p>
        </div>

        {/* ── Desktop hallway (md+) ──────────────────────────────── */}
        <div className="hidden md:flex w-full max-w-[1384px] mx-auto mt-[50px]">
          {slots.map((slot, i) => (
            <div
              key={i}
              className="relative shrink-0"
              style={{ width: slot.width, aspectRatio: slot.aspect }}
            >
              {/* Hallway wall image */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={slot.flip ? { transform: "scaleX(-1)" } : undefined}
              >
                <img
                  src={imgWall}
                  alt=""
                  className="absolute max-w-none"
                  style={slot.crop}
                />
              </div>
              {/* Door */}
              <div
                className="absolute"
                style={{
                  left: slot.doorLeft,
                  top: "1.61%",
                  width: slot.doorWidth,
                }}
              >
                <Door
                  number={i + 1}
                  isOpen={openDoor === i + 1}
                  onClick={() => toggle(i + 1)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile doors (< md) ────────────────────────────────── */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-10 w-full max-w-[320px]">
          {[1, 2, 3, 4].map((n) => (
            <Door
              key={n}
              number={n}
              isOpen={openDoor === n}
              onClick={() => toggle(n)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
