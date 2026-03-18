import profileImg from "@/assets/ahmed-profile.jpeg";
import "../styles/portfolio.css";

const Index = () => {
  return (
    <>
      {/* Background effects */}
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="bg-glow-2" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-logo">
            <span className="accent">~/</span>ahmed<span className="accent">.</span>dev
          </div>
          <ul className="navbar-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certs">Training</a></li>
            <li><a href="#contact" className="nav-cta">GET /contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-status">
            <span className="pulse-dot" />
            Open to Opportunities
          </div>
          <h1>
            Backend &<br />
            <span className="gradient-text">Database Engineer</span>
          </h1>
          <p className="hero-desc">
            Building high-availability database architectures, enterprise integrations,
            and scalable backend systems. Specializing in SQL Server, .NET, and distributed data pipelines.
          </p>
          <div className="hero-actions">
            <a href="mailto:ahmedsameh2071996@gmail.com" className="btn-primary">
              ✉ Send Request
            </a>
            <a href="https://www.linkedin.com/in/ahmed-sameh-algazar" target="_blank" rel="noopener noreferrer" className="btn-outline">
              ↗ LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src={profileImg} alt="Ahmed Sameh Mohamed" className="hero-image" />
            <div className="hero-image-bg" />
            <div className="hero-image-dots" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title">Core Capabilities</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Databases & Storage</h3>
            <p>Architecting schemas, stored procedures, migrations, and maintenance plans for enterprise-scale systems.</p>
            <div className="skill-tags">
              <span className="skill-tag">MS SQL Server</span>
              <span className="skill-tag">Oracle DB</span>
              <span className="skill-tag">Data Migration</span>
              <span className="skill-tag">Stored Procs</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>Backend & APIs</h3>
            <p>Building and integrating RESTful APIs, HL7 data flows, SAP connectors, and cross-system pipelines.</p>
            <div className="skill-tags">
              <span className="skill-tag">C# / .NET</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">HL7</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🖥️</div>
            <h3>Infrastructure & DevOps</h3>
            <p>Deploying on IIS, managing Windows & Linux servers, and provisioning VMs on VMware ESXi.</p>
            <div className="skill-tags">
              <span className="skill-tag">IIS</span>
              <span className="skill-tag">Windows Server</span>
              <span className="skill-tag">Linux CLI</span>
              <span className="skill-tag">VMware ESXi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="section-label">Career Log</div>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot active" />
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Backend Engineer & Systems Integrator</div>
                <div className="timeline-company">Millensys</div>
              </div>
              <div className="timeline-period">DEC 2022 — PRESENT</div>
            </div>
            <ul className="timeline-logs">
              <li>Architected complex SQL Server stored procedures, functions, and data migration pipelines for enterprise healthcare systems.</li>
              <li>Designed and maintained database schemas supporting HIS-RIS-PACS integration across multi-facility deployments.</li>
              <li>Built and tested RESTful API integrations for HL7, E-Claims, SMS gateways, SAP, and cross-system data flows.</li>
              <li>Automated report generation pipelines using FRX with dynamic SQL queries.</li>
              <li>Deployed and managed web applications on IIS servers with Windows Server infrastructure.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Field Service Engineer</div>
                <div className="timeline-company">DEKA Egypt</div>
              </div>
              <div className="timeline-period">APR 2022 — DEC 2022</div>
            </div>
            <ul className="timeline-logs">
              <li>Managed installation and maintenance lifecycle for precision medical hardware systems.</li>
              <li>Developed diagnostic procedures and troubleshooting protocols for embedded systems.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Clinical Engineer & DB Administrator</div>
                <div className="timeline-company">Civilian Workers Military Hospital</div>
              </div>
              <div className="timeline-period">APR 2021 — APR 2022</div>
            </div>
            <ul className="timeline-logs">
              <li>Designed and maintained pharmacy database management system for inventory and dispensation tracking.</li>
              <li>Managed ICU and Radiology equipment data systems with uptime requirements.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" id="certs">
        <div className="section-label">Credentials</div>
        <h2 className="section-title">Certifications & Training</h2>
        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-badge">🎓</div>
            <div>
              <h4>DEPI Full Stack .NET Web Development</h4>
              <span>DEPI</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🎓</div>
            <div>
              <h4>Andalusia Academy .NET Full Stack</h4>
              <span>Andalusia</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🗄️</div>
            <div>
              <h4>SQL Server — Implementing & Developing</h4>
              <span>Mahara Tech / ITI</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🐍</div>
            <div>
              <h4>Python for Data Science, AI & Development</h4>
              <span>Coursera — Certified</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🤖</div>
            <div>
              <h4>Machine Learning & Data Science Track</h4>
              <span>NTI</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">👁️</div>
            <div>
              <h4>Deep Learning for Computer Vision</h4>
              <span>NTI</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">📊</div>
            <div>
              <h4>Data Analysis — Beginner & Professional</h4>
              <span>FWD / Udacity</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-badge">🌐</div>
            <div>
              <h4>Networking Fundamentals</h4>
              <span>Mahara Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Socials */}
      <section className="section" id="contact">
        <div className="section-label">Connect</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>Let's Build Something</h2>
        <div className="socials">
          <a href="mailto:ahmedsameh2071996@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/ahmed-sameh-algazar" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a href="tel:+201113975784" className="social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +20 111 397 5784
          </a>
          <a href="https://wa.me/201552999902" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ahmed Sameh Mohamed — Built with precision.</p>
      </footer>
    </>
  );
};

export default Index;
