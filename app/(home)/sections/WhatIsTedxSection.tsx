const imgCrowd = "https://www.figma.com/api/mcp/asset/cb2766da-d0bc-478d-b27a-926d671c1b20";
const imgRedPersonMask = "https://www.figma.com/api/mcp/asset/37ac8a7d-77c4-4b94-86fd-b0781ac0da5c";
const imgArrow = "https://www.figma.com/api/mcp/asset/c916cda7-6337-4960-ad0f-5c9da999f5e8";

export default function WhatIsTedxSection() {
  return (
    <section id="what-is-tedx" className="relative w-full bg-black overflow-hidden min-h-[600px] md:min-h-[700px]">

      {/* Large dark circular ground — matches Figma's giant rounded rect positioned right-center */}
      <div
        className="absolute rounded-full bg-[#2a2a2a] pointer-events-none overflow-hidden"
        style={{
          width: "clamp(560px, 108vw, 1600px)",
          height: "clamp(560px, 108vw, 1600px)",
          right: "-28%",
          top: "50%",
          transform: "translateY(-48%)",
        }}
      >
        <img
          src={imgCrowd}
          alt=""
          className="absolute object-cover"
          style={{ width: "72%", top: "18%", left: "8%" }}
        />

        {/* Chat bubbles scattered on the crowd */}
        <ChatBubble className="absolute" style={{ top: "28%", left: "36%" }} />
        <ChatBubble className="absolute" style={{ top: "18%", left: "62%" }} flipped />
        <ChatBubble className="absolute" style={{ top: "48%", left: "54%" }} />
        <ChatBubble className="absolute" style={{ top: "56%", left: "72%" }} flipped />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row py-20 md:py-28 px-6 md:pl-20 md:pr-0">

        {/* Left column */}
        <div className="md:w-[38%] flex flex-col gap-10">

          {/* Heading + red person silhouette */}
          <div className="relative">
            {/* Red walking person — sits just right of the heading */}
            <div
              className="absolute hidden md:block"
              style={{
                right: "-14%",
                top: 0,
                width: 54,
                height: 96,
                backgroundColor: "#d82d33",
                WebkitMaskImage: `url('${imgRedPersonMask}')`,
                maskImage: `url('${imgRedPersonMask}')`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            <h2
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 5.5vw, 6.5rem)" }}
            >
              WHAT IS
              <br />
              <span className="text-tedx-red">TEDx</span>?
            </h2>
          </div>

          {/* Body */}
          <div className="font-sans text-[15px] text-white space-y-5" style={{ lineHeight: "1.6" }}>
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

      {/* Top-right: "Wondering what past attendees have said?" */}
      <div className="absolute top-8 right-8 z-20 flex flex-col items-end gap-3 text-white">
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
