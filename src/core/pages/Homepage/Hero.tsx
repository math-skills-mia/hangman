import PlusGrid from "./PlusGrid";

function Hero() {
  return (
    <section className="hero" aria-labelledby="homepage-title">
      <div className="hero__main surface-card">
        <div className="hero__content">
          <p className="section-label">Personal Website</p>

          <h1 className="hero__title" id="homepage-title">
            Title TBD
          </h1>

          <p className="hero__name">Mia Striebeck</p>

          <div className="hero__meta" aria-label="Website sections">
            <span>Tools</span>
            <span aria-hidden="true">/</span>
            <span>Games</span>
            <span aria-hidden="true">/</span>
            <span>Utilities</span>
          </div>
        </div>
      </div>

      <aside className="hero__pattern-card surface-card" aria-hidden="true">
        <PlusGrid columns={9} rows={13} />
      </aside>
    </section>
  );
}

export default Hero;
