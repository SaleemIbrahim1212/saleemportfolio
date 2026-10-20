import NavigationBar from './NavigationBar';
export default function Header() {
  return <header id="Home" className="site-header">
    <NavigationBar />
    <div className="hero">
      <div>
        <p className="eyebrow">Machine learning researcher & developer</p>
        <h1>Saleem<br /><span>Ibrahim.</span></h1>
        <p className="hero-lead">Learning to ask<br className="hidden md:block" /> better questions.</p>
        <p className="hero-description">I study how intelligent systems gather information, reason through uncertainty, and learn from multimodal data.</p>
        <div className="hero-actions"><a className="button-primary" href="#Experience_Section">Explore my research <span aria-hidden="true">&#8599;</span></a><a className="text-link" href="/Saleem-Ibrahim-Resume.pdf" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">&#8599;</span></a></div>
      </div>
      <aside className="research-note" aria-label="Current research focus">
        <div className="note-top"><span className="status-dot" /> Currently researching <span className="note-number">01 /</span></div>
        <h2>Reasoning through<br />conversation.</h2>
        <p>Multi-turn diagnostic systems that ask targeted questions and refine competing hypotheses.</p>
        <div className="research-flow" aria-label="Hypothesize, ask, update, repeat"><span>Hypothesize</span><span aria-hidden="true">&#8594;</span><span>Ask</span><span aria-hidden="true">&#8594;</span><span>Update</span></div>
        <div className="note-topics"><span>Bayesian experimental design</span><span>Reinforcement learning</span><span>Information gain</span></div>
        <div className="note-footer"><strong>WatchOut / Adonite</strong><span>Research Intern · May 2026 - Present</span></div>
      </aside>
    </div>
    <div className="affiliation-strip"><span>M.Sc. Computer Science <span className="muted">/ Machine Learning</span></span><span>Université de Montréal</span><span className="muted">Montréal, QC</span></div>
  </header>;
}
