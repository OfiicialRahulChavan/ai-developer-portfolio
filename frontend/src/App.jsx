import { useEffect, useState } from 'react'

const demoProfile = {
  name: 'Alex Morgan',
  role: 'AI Application Developer',
  location: 'Bengaluru, India',
  availability: 'Open to exciting opportunities',
  tagline: 'I turn complex AI capabilities into useful, human-centered products.',
  intro: 'I design and ship AI applications that feel as reliable as the software people already trust. From retrieval systems to agentic workflows, I care equally about model quality, product clarity, and the people using it.',
  email: 'hello@alexmorgan.dev',
  resumeUrl: '#contact',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  stats: [
    { value: '4+', label: 'years building products' },
    { value: '12', label: 'AI solutions shipped' },
    { value: '99.9%', label: 'uptime target' },
  ],
  skills: [
    { group: 'AI engineering', items: ['LLM applications', 'RAG systems', 'Agent workflows', 'Prompt engineering', 'Evaluations'] },
    { group: 'Product & backend', items: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'REST APIs'] },
    { group: 'Frontend & cloud', items: ['React', 'JavaScript', 'Docker', 'AWS', 'CI/CD'] },
  ],
  experience: [
    { period: '2024 — Now', role: 'Senior AI Application Developer', company: 'Your Current Company', description: 'Leading the design and delivery of production AI experiences, from discovery through measurable adoption.', tags: ['LLM systems', 'FastAPI', 'React'] },
    { period: '2022 — 2024', role: 'AI / Full-stack Developer', company: 'Previous Company', description: 'Built intelligent workflows that reduced manual work and made internal knowledge easier to access.', tags: ['Python', 'RAG', 'AWS'] },
    { period: '2020 — 2022', role: 'Software Developer', company: 'Earlier Experience', description: 'Created dependable web products and APIs while growing a strong foundation in thoughtful engineering.', tags: ['JavaScript', 'Django', 'SQL'] },
  ],
  projects: [
    { number: '01', title: 'Knowledge Copilot', type: 'RAG assistant', description: 'A source-grounded assistant that helps teams find, compare, and act on company knowledge with confidence.', outcome: '42% faster answers', tags: ['Python', 'FastAPI', 'Vector search'], accent: 'violet' },
    { number: '02', title: 'Support Signal', type: 'AI operations', description: 'An AI triage workspace that turns incoming support conversations into prioritized, actionable themes.', outcome: '31% less manual triage', tags: ['React', 'LLMs', 'PostgreSQL'], accent: 'lime' },
    { number: '03', title: 'Career Canvas', type: 'Personalized learning', description: 'A guided career-planning product that transforms goals and experience into tailored learning paths.', outcome: 'Top 3 hackathon finalist', tags: ['Django', 'OpenAI API', 'Docker'], accent: 'orange' },
  ],
  hobbies: [
    { icon: '⌁', title: 'Making things', text: 'Prototyping tiny ideas, one weekend at a time.' },
    { icon: '◒', title: 'Long walks', text: 'The best way I know to untangle a hard problem.' },
    { icon: '♜', title: 'Strategy games', text: 'Always curious about systems, trade-offs, and play.' },
  ],
}

const navItems = ['About', 'Skills', 'Work', 'Experience', 'Contact']
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className={diagonal ? 'arrow diagonal' : 'arrow'}>→</span>
}

function App() {
  const [profile, setProfile] = useState(demoProfile)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch(`${apiUrl}/api/profile`)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(setProfile)
      .catch(() => {})
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <nav className="nav wrap">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">AM<span>.</span></button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}
        </div>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><i /><i /></button>
      </nav>

      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> {profile.availability}</p>
          <h1>Building the <em>useful</em><br />side of AI.</h1>
          <p className="hero-intro">{profile.tagline}</p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo('work')}>View selected work <Arrow /></button>
            <button className="text-button" onClick={() => scrollTo('contact')}>Let’s talk <Arrow diagonal /></button>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract AI network illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="core">AI</div>
          <span className="spark s1">✦</span><span className="spark s2">✦</span><span className="spark s3">+</span>
          <div className="art-card"><span>Currently crafting</span><strong>AI that earns trust.</strong></div>
        </div>
      </section>

      <section id="about" className="about wrap section-grid">
        <p className="section-label">01 / ABOUT</p>
        <div>
          <h2>Engineering with<br /><em>clarity and care.</em></h2>
          <p className="large-copy">{profile.intro}</p>
          <div className="about-meta">
            <span className="pin">✦</span><span>{profile.location}</span><span className="slash">/</span><span>{profile.role}</span>
          </div>
        </div>
      </section>

      <section className="metrics wrap">
        {profile.stats.map((stat) => <div className="metric" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </section>

      <section id="skills" className="wrap skills-section">
        <div className="section-heading"><p className="section-label">02 / TOOLKIT</p><h2>A practical stack<br />for <em>intelligent products.</em></h2></div>
        <div className="skill-groups">
          {profile.skills.map((skill) => <div className="skill-group" key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="wrap"><div className="section-heading work-heading"><p className="section-label">03 / SELECTED WORK</p><h2>Ideas made<br /><em>real.</em></h2><p>Projects that bring together robust engineering, thoughtful interaction, and practical outcomes.</p></div>
          <div className="project-grid">
            {profile.projects.map((project) => <article className={`project ${project.accent}`} key={project.title}>
              <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-visual"><div className="visual-window"><b /><b /><b /><div className="visual-lines"><i /><i /><i /><i /></div></div><div className="visual-orb" /></div>
              <div className="project-content"><p className="outcome">{project.outcome}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <button className="project-arrow" aria-label={`Learn more about ${project.title}`}><Arrow diagonal /></button>
            </article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="wrap experience-section">
        <div className="section-heading"><p className="section-label">04 / EXPERIENCE</p><h2>Work that moves<br /><em>the needle.</em></h2></div>
        <div className="timeline">
          {profile.experience.map((item) => <article className="role" key={`${item.period}-${item.role}`}><p className="role-period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.description}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
        </div>
      </section>

      <section className="hobbies wrap">
        <p className="section-label">05 / OFF THE CLOCK</p><div className="hobby-intro"><h2>A few things<br />that keep me <em>curious.</em></h2><p>Good work needs a little room to breathe.</p></div>
        <div className="hobby-grid">{profile.hobbies.map((hobby) => <article key={hobby.title}><span>{hobby.icon}</span><h3>{hobby.title}</h3><p>{hobby.text}</p></article>)}</div>
      </section>

      <section id="contact" className="contact"><div className="wrap contact-content"><p className="section-label">06 / CONTACT</p><h2>Let’s make<br />something <em>meaningful.</em></h2><p>Have a product idea, a hard AI problem, or an opportunity to discuss? I’d love to hear from you.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><button onClick={() => scrollTo('top')}>Back to top ↑</button></div></div></section>

      <footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed & built with intention.</span></footer>
    </main>
  )
}

export default App
