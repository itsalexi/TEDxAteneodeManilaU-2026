const imgCrowd = "https://www.figma.com/api/mcp/asset/cb2766da-d0bc-478d-b27a-926d671c1b20";
const imgArrow = "https://www.figma.com/api/mcp/asset/c916cda7-6337-4960-ad0f-5c9da999f5e8";

export default function WhatIsTedxSection() {
  return (
    <section id="what-is-tedx" className="relative w-full bg-black overflow-hidden md:min-h-[700px]">

      {/* Content — stacks on mobile, left column on desktop */}
      <div className="relative z-10 py-12 md:py-28 px-6 md:pl-20">
        <div className="w-full md:w-[38%] flex flex-col gap-8 md:gap-10">

          {/* Heading */}
          <div className="relative">
            <h2
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(4.5rem, 8vw, 10rem)" }}
            >
              WHAT IS
              <br />
              <span className="text-tedx-red">TEDx</span>?
            </h2>
          </div>

          {/* Body */}
          <div
            className="font-sans text-[15px] text-white space-y-5 w-full md:max-w-[300px]"
            style={{ lineHeight: "1.6" }}
          >
            <p>
              In the spirit of ideas worth spreading, TED has created a program called{" "}
              <strong className="text-tedx-red">TEDx</strong>.
            </p>
            <p>
              <strong className="text-tedx-red">TEDx is</strong> a program of local, self
              organized events that bring people together to share a TED-like experience. Our
              event is call TEDx (place), where x=independently organized TED event. At our TEDx
              (place) event, TEDTalks video and live speakers will combine to spark deep
              discussion and connection in a small group.
            </p>
            <p>
              The <strong className="text-tedx-red">TED</strong> Conference provides general
              guidance for the TEDx program, but individual TEDx events, including ours, are
              self-organized.
            </p>
          </div>
        </div>
      </div>

      {/* Illustration — flows below text on mobile, absolute on desktop */}
      <div className="relative md:absolute md:inset-y-0 md:left-[35%] md:right-0 h-[440px] md:h-full pointer-events-none">
        {/* Red walking person — left edge of the ground shape */}
        <div
          className="absolute z-10"
          style={{
            left: "-2%",
            top: "8%",
            width: 40,
            height: 72,
            backgroundColor: "#d82d33",
            WebkitMaskImage: `url('https://www.figma.com/api/mcp/asset/37ac8a7d-77c4-4b94-86fd-b0781ac0da5c')`,
            maskImage: `url('https://www.figma.com/api/mcp/asset/37ac8a7d-77c4-4b94-86fd-b0781ac0da5c')`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-89 -23 1012 816"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M-66 212.069C-78 275.569 -55 330.569 -42.5 356.069L258.5 792.569H922.5V208.069L434.5 25.5688C393 9.56876 275 -22.9313 150 25.5687C45.0952 66.2718 -57 61.9021 -89 50.5687C-62.5 77.5687 -54.0063 148.602 -66 212.069Z"
            fill="#2a2a2a"
          />
        </svg>

        <img
          src={imgCrowd}
          alt=""
          className="absolute object-cover"
          style={{ width: "72%", top: "5%", left: "25%" }}
        />

        <ChatBubble className="absolute" style={{ top: "28%", left: "36%" }} />
        <ChatBubble className="absolute" style={{ top: "18%", left: "62%" }} flipped />
        <ChatBubble className="absolute" style={{ top: "48%", left: "54%" }} />
        <ChatBubble className="absolute" style={{ top: "56%", left: "72%" }} flipped />
      </div>

      {/* "Wondering" — desktop only, would overlap content on mobile */}
      <div className="hidden md:flex absolute top-8 right-8 z-20 flex-col items-end gap-3 text-white">
        <p className="font-sans text-sm text-right leading-snug">
          Wondering what past
          <br />
          attendees have said?
        </p>
        <img
          src={imgArrow}
          alt="View past attendee testimonials"
          className="w-5 h-5"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}
      />
    </section>
  );
}

function ChatBubble({
  className,
  style,
  flipped,
}: {
  className?: string;
  style?: React.CSSProperties;
  flipped?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 34"
      className={className}
      style={{ width: 40, height: 34, ...style, transform: flipped ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="40" height="26" rx="6" fill="white" />
      <circle cx="10" cy="13" r="3" fill="#aaa" />
      <circle cx="20" cy="13" r="3" fill="#aaa" />
      <circle cx="30" cy="13" r="3" fill="#aaa" />
      <polygon points="8,26 14,26 8,34" fill="white" />
    </svg>
  );
}
