type LeaderCard = {
  name: string;
  role: string;
  description: string;
};

const leaders: LeaderCard[] = [
  {
    name: "Liza Aquino",
    role: "PROJECT SUPERVISOR",
    description: "A 3rd year BS Management student, driven to cultivate individual talents and yield success.",
  },
  {
    name: "Andy Balatbat",
    role: "PROJECT SUPERVISOR",
    description: "A 4th year BS Management student who aspires to contribute to the community through fruitful projects.",
  },
  {
    name: "Bri Sy",
    role: "Project Head for Advertising and Communications",
    description: "A third year BS CTM student with a passion for bridging stories and strategy.",
  },
  {
    name: "Vonn Puga",
    role: "PROJECT SUPERVISOR",
    description: "A 3rd year Management student, the mind behind this year’s branding, talks, and themes—leading to inspire through stories that spark change, one future leader at a time.",
  },
  {
    name: "Joseph Antes",
    role: "Project Head for Programs",
    description: "A 2nd year BS Psychology student who aims to spread meaningful stories and spark new ideas.",
  },
  {
    name: "Rynne Barrios",
    role: "Project Head for Logistics",
    description: "A third year BS Management student, with a desire to embrace challenges and pressure.",
  },
];

export default function LeadersSection() {
  return (
    <section
      id="leaders"
      aria-labelledby="leaders-heading"
      className="w-full bg-tedx-black px-4 py-16 text-tedx-white sm:px-6 lg:px-0 lg:py-[88px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-[780px] text-center">
          <h2
            id="leaders-heading"
            className="font-league-gothic tedx-section-heading-shadow text-[4.1rem] leading-[0.82] tracking-[-0.03em] text-tedx-white sm:text-[5.5rem] lg:text-[122px] lg:leading-none"
          >
            THE LEADERS
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[18px] leading-[1.25] text-tedx-muted-text">
            Meet the student leaders steering TEDxAteneodeManilaU 2026, each bringing
            their expertise in strategy, collaboration, and execution to shape
            a meaningful event experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:mt-[72px] lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {leaders.map((leader, index) => (
            <article
              key={`${leader.name}-${index}`}
              className="relative mx-auto flex w-full max-w-[238px] flex-col items-center overflow-hidden bg-gradient-to-b from-tedx-accent-strong via-tedx-red to-tedx-accent-shadow px-4 pb-[228px] pt-[36px] text-center"
            >
              <h3 className="text-[25px] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-tedx-white">
                {leader.name}
              </h3>
              <p className="mt-2 text-[18px] leading-[0.95] tracking-[-0.02em] text-tedx-white/85">
                {leader.role}
              </p>
              <p className="mt-6 max-w-[190px] text-[18px] leading-[1.18] text-tedx-white/85 pb-6">
                {leader.description}
              </p>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[220px]"
              >
                <span className="absolute left-1/2 top-[0px] h-[88px] w-[88px] -translate-x-1/2 rounded-full bg-tedx-black" />
                <span className="absolute bottom-0 left-1/2 h-[140px] w-[176px] -translate-x-1/2 rounded-t-[999px] bg-tedx-black" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
