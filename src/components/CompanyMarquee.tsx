const companies = ["Hal9", "Princeton Blue", "Foodprint Group", "University of Alabama"];

export default function CompanyMarquee() {
  const track = [...companies, ...companies];

  return (
    <section className="border-y border-current/10 py-8">
      <p className="label mb-6 text-center text-sm text-current/45">
        Companies I&rsquo;ve worked with
      </p>
      <div className="marquee-track overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-serif text-3xl text-current/50 whitespace-nowrap sm:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
