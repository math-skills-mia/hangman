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
        </div>
      </div>

      <aside className="hero__pattern-card surface-card" aria-hidden="true">
        <div className="hero__pattern-desktop">
          <PlusGrid columns={9} rows={13} />
        </div>

        <div className="hero__pattern-mobile">
          <PlusGrid columns={11} rows={5} />
        </div>
      </aside>
    </section>
  );
}

export default Hero;
