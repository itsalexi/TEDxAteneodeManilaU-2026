import Reveal from "@/app/components/Reveal";
import NextImage from "next/image";

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="w-full bg-black px-6 py-14 md:px-[120px] md:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-center">
        <Reveal
          variant="fade-up"
          className="flex w-full flex-col items-center gap-4 text-center"
        >
          <h2
            className="font-display leading-none tracking-[-0.04em] text-white"
            style={{
              fontSize: "clamp(2.7rem, 7vw, 118px)",
              textShadow: "0 4px 25px rgba(0,0,0,.35)",
            }}
          >
            SPONSORS & PARTNERS
          </h2>
          <p className="max-w-[460px] text-[16px] text-tedx-muted-text">
            Learn more about our media partners and sponsors.
          </p>
        </Reveal>

        <Reveal
          variant="fade-up"
          delay={0.12}
          className="mt-8 w-full rounded-[36px] border-2 border-tedx-red md:mt-10"
        >
          <div className="flex min-h-[420px] w-full flex-col items-center justify-center gap-12 px-6 py-14 md:min-h-[760px] md:gap-16 md:px-12">
            <div className="flex w-full items-center justify-center">
              <div className="relative h-[88px] w-[320px] md:h-[128px] md:w-[760px]">
                <NextImage
                  src="/Megawide.png"
                  alt="Megawide Foundation"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="relative h-[210px] w-[170px] md:h-[360px] md:w-[280px]">
                <NextImage
                  src="/Absidy.png"
                  alt="Absidy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
