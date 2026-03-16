import Image from "next/image";

const testimonial = {
  quote:
    "Thank you for creating a space where stories like mine — quiet, messy, and deeply personal, can take up space. This talk was more than just a speech; it was a release. A moment I've carried in my chest for so long finally let loose into the world.",
  speaker: "Zymba Ding, TEDxAteneodeManilaU 2025",
  imageSrc: "/about/speaker-testimonial/zymba-ding.png",
  imageAlt:
    "Zymba Ding standing on the TEDxAteneodeManilaU stage under a red lighting wash.",
};

export default function SpeakerTestimonialSection() {
  return (
    <section
      id="speaker-testimonial"
      aria-labelledby="speaker-testimonial-heading"
      className="bg-black px-4 py-16 text-white sm:px-6 lg:px-0 lg:py-[72px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 id="speaker-testimonial-heading" className="sr-only">
          Speaker Testimonial
        </h2>

        <div className="relative flex flex-col gap-8 lg:min-h-[513px] lg:block">
          <div className="relative z-20 flex w-full flex-col lg:min-h-[513px] lg:max-w-[751px] lg:justify-start lg:pl-[72px] lg:pr-[60px]">
            <span
              aria-hidden="true"
              className="font-league-gothic relative left-1 top-1 block w-fit text-[6.5rem] leading-[0.78] tracking-[-0.05em] text-[#d82d33] sm:left-2 sm:top-2 sm:text-[8.5rem] lg:absolute lg:left-[54px] lg:top-0 lg:text-[250px] lg:leading-[128px] lg:tracking-[-10px]"
            >
              “
            </span>

            <blockquote className="mt-0 max-w-[40rem] sm:max-w-[42rem] lg:mt-[157px] lg:ml-[12px] lg:max-w-[506px]">
              <p className="text-[1.15rem] font-bold leading-[1.08] text-white sm:text-[1.5rem] lg:text-[24px] lg:leading-[1]">
                {testimonial.quote}
              </p>
              <footer className="mt-6 text-[1.05rem] italic leading-none text-[#d82d33] sm:text-[1.2rem] lg:mt-8 lg:text-[18px]">
                {testimonial.speaker}
              </footer>
            </blockquote>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-7 hidden h-[485px] w-[852px] lg:block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,1) 0.13398%, rgba(0,0,0,1) 72.325%, rgba(255,0,0,0.82) 81.5%, rgba(239,20,26,1) 85.461%, rgba(239,20,26,1) 100%)",
            }}
          />

          <div className="relative z-10 mt-2 overflow-hidden rounded-[18px] lg:absolute lg:right-0 lg:top-7 lg:mt-0 lg:h-[485px] lg:w-[690px] lg:rounded-none">
            <div className="relative aspect-[11/10] w-full bg-[#ef141a] sm:aspect-[689/485] lg:h-full">
              <Image
                fill
                priority={false}
                alt={testimonial.imageAlt}
                className="object-cover object-[52%_86%] sm:object-[48%_90%] lg:origin-left lg:scale-[1.016] lg:object-[0%_97%]"
                sizes="(min-width: 1024px) 689px, 100vw"
                src={testimonial.imageSrc}
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 hidden w-[2px] bg-[#ef141a] lg:block"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-[20%] bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0)_100%)] lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
