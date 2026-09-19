import { useEffect, useState } from "react";
import "./App.css";

const departments = [
  ["✚", "Cardiology", "Compassionate heart care, from prevention to recovery."],
  [
    "✚",
    "Orthopaedics",
    "Helping you move freely with expert bone and joint care.",
  ],
  [
    "✚",
    "Neurology",
    "Specialist support for the health of your brain and nerves.",
  ],
  ["✚", "Pediatrics", "Gentle, growing-up care for your little ones."],
  ["✚", "Gynecology", "Thoughtful care for every stage of women’s health."],
  ["✚", "General medicine", "Trusted everyday care for the whole family."],
];

const facilities = [
  [
    "⌬",
    "Advanced diagnostics",
    "Clear answers with modern imaging and lab technology.",
  ],
  [
    "⌬",
    "Intensive care unit",
    "Round-the-clock monitoring when care needs to be closer.",
  ],
  ["⌬", "Pharmacy", "Convenient, expert medication support under one roof."],
  ["⌬", "Private rooms", "Quiet, comfortable spaces designed for healing."],
  [
    "⌬",
    "Operation theatre",
    "Safe, precise surgical care from an experienced team.",
  ],
  [
    "⌬",
    "24/7 ambulance",
    "Rapid response and dependable transport when it matters.",
  ],
];

const testimonials = [
  [
    "“The entire team made an unfamiliar experience feel calm and manageable. I always felt listened to.”",
    "Maya R.",
    "Cardiology patient",
  ],
  [
    "“From the first appointment to recovery, every detail was handled with real kindness and professionalism.”",
    "Daniel K.",
    "Orthopaedics patient",
  ],
  [
    "“VishwaCare is the first hospital where my whole family feels known. That makes a real difference.”",
    "Priya S.",
    "Family medicine patient",
  ],
];

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [activeFacility, setActiveFacility] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 2600);
    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const previousScrollY = { current: window.scrollY };

    const updateActiveDepartment = () => {
      if (window.innerWidth > 640) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY !== previousScrollY.current) {
        setScrollDirection(currentScrollY > previousScrollY.current ? "down" : "up");
        previousScrollY.current = currentScrollY;
      }

      const focusPoint = window.innerHeight * 0.48;
      const updateActiveCard = (selector, setActiveCard) => {
        const cards = [...document.querySelectorAll(selector)];
        let focusedCard = -1;
        cards.forEach((card, index) => {
          const { top, bottom } = card.getBoundingClientRect();
          if (top <= focusPoint && bottom > focusPoint) focusedCard = index;
        });

        if (focusedCard >= 0) setActiveCard(focusedCard);
      };

      updateActiveCard(".department-card", setActiveDepartment);
      updateActiveCard(".facility-card", setActiveFacility);
    };

    updateActiveDepartment();
    window.addEventListener("scroll", updateActiveDepartment, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveDepartment);

    return () => {
      window.removeEventListener("scroll", updateActiveDepartment);
      window.removeEventListener("resize", updateActiveDepartment);
    };
  }, []);

  return (
    <main className="site-shell">
      {showIntro && (
        <section className="intro-screen" aria-label="Welcome to VishwaCare">
          <div className="intro-content">
            <div className="intro-mark-wrap">
              <img className="intro-mark" src="/doctor.png" alt="" />
            </div>
            <p className="intro-name">VishwaCare</p>
            <p className="intro-caption">Healthcare, with humanity.</p>
          </div>
        </section>
      )}

      <header className="site-header">
        <a className="brand" href="#top" aria-label="VishwaCare home">
          <span className="brand-mark">
            <img src="/doctor.png" alt="" />
          </span>
          <span>
            VishwaCare
            <span className="brand-sub">Hospital &amp; Medical Centre</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#departments">Departments</a>
          <a href="#facilities">Facilities</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#appointment">
          Book appointment <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Care for every chapter
          </p>
          <h1>
            A healthier life begins with <em>the right care.</em>
          </h1>
          <p className="hero-summary">
            At VishwaCare, expert medicine meets genuine human attention. We are
            here to help you feel understood, supported, and well.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#appointment">
              Book an appointment <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-emergency" href="tel:+917507179098">
              <span className="phone-icon">✆</span> Call emergency
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <strong>24/7</strong> Emergency care
            </span>
            <span>
              <strong>50+</strong> Specialists
            </span>
            <span>
              <strong>20 yrs</strong> of trust
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
            alt="Doctor in a bright, modern hospital"
          />
          <div className="hero-visual-note">
            <span className="pulse-dot" /> Here when you need us
          </div>
          <div className="hero-visual-caption">
            <strong>
              Care that sees
              <br />
              the whole you.
            </strong>
            <span>CAREPOINT / 01</span>
          </div>
        </div>
      </section>

      <section className="about-section content-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85"
            alt="Sunlit corridor inside Carepoint Hospital"
          />
          <span className="image-stamp">
            Since
            <br />
            <strong>2006</strong>
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span /> About Carepoint
          </p>
          <h2>
            Medicine with a <em>human pulse.</em>
          </h2>
          <p>
            Carepoint is a modern hospital built around a simple belief: the
            best healthcare starts with listening. Our clinicians combine deep
            expertise with the time and attention every patient deserves.
          </p>
          <p>
            From preventive care to complex treatment, we bring the right
            people, technology, and support together under one roof.
          </p>
          <a className="text-link" href="#departments">
            Meet our departments <span aria-hidden="true">↗</span>
          </a>
          <div className="about-stats">
            <div>
              <strong>20+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>10k+</strong>
              <span>Patients cared for</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Patient rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-section content-section" id="departments">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> Our expertise
            </p>
            <h2 className="department-heading">
              Specialists for
              <br />
              <em>what matters.</em>
            </h2>
          </div>
          {/* <p>One connected team, across the care you need most.</p> */}
        </div>
        <div className="department-grid">
          {departments.map(([icon, name, description], index) => (
            <article
              className={`department-card ${
                index === activeDepartment
                  ? "is-active"
                  : index ===
                      activeDepartment + (scrollDirection === "up" ? -1 : 1)
                    ? "is-next"
                    : scrollDirection === "down"
                      ? index < activeDepartment
                        ? "is-passed"
                        : "is-hidden"
                      : index > activeDepartment
                      ? "is-passed"
                      : "is-hidden"
              }`}
              key={name}
            >
              <span className="card-icon">{icon}</span>
              <span className="card-index">
                0
                {departments.indexOf(
                  departments.find((department) => department[1] === name),
                ) + 1}
              </span>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href="#appointment" aria-label={`Learn more about ${name}`}>
                Learn more <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="appointment-section content-section" id="appointment">
        <div className="appointment-intro">
          <p className="eyebrow">
            <span /> Your next step
          </p>
          <h2>
            Let’s make time
            <br />
            <em>for your health.</em>
          </h2>
          <p>
            Tell us a little about what you need and our team will be in touch
            within one working day.
          </p>
          <div className="appointment-support">
            <span>⌁</span>
            <div>
              <strong>Prefer to talk?</strong>
              <a href="tel:+917020961222">+91 70209 61222</a>
            </div>
          </div>
        </div>
        <form
          className="appointment-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          {submitted ? (
            <div className="form-success">
              <span>✓</span>
              <h3>Thank you, we’ve got it.</h3>
              <p>
                Our care team will contact you within one working day to confirm
                your appointment.
              </p>
              <button
                className="button button-primary"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <span>01</span>
                <h3>Appointment request</h3>
              </div>
              <div className="form-grid">
                <label>
                  Patient name
                  <input required type="text" placeholder="Your full name" />
                </label>
                <label>
                  Phone number
                  <input required type="tel" placeholder="+1 (555) 000-0000" />
                </label>
                <label>
                  Email address
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Department
                  <select required defaultValue="">
                    <option value="" disabled>
                      Choose a department
                    </option>
                    {departments.map(([, name]) => (
                      <option key={name}>{name}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Preferred doctor
                  <select defaultValue="">
                    <option value="">No preference</option>
                    <option>Dr. Maya Patel</option>
                    <option>Dr. Noah Williams</option>
                    <option>Dr. Elena Rossi</option>
                  </select>
                </label>
                <label>
                  Preferred date
                  <input required type="date" />
                </label>
                <label className="full-field">
                  Message <span>(optional)</span>
                  <textarea
                    rows="3"
                    placeholder="Tell us anything helpful before your visit..."
                  />
                </label>
              </div>
              <button
                className="button button-primary form-submit"
                type="submit"
              >
                Book appointment <span aria-hidden="true">↗</span>
              </button>
              <small>
                We respect your privacy. Your information is only used to
                arrange your care.
              </small>
            </>
          )}
        </form>
      </section>

      <section className="emergency-section content-section" id="emergency">
        <div className="emergency-symbol">✚</div>
        <div>
          <p className="eyebrow">
            <span /> Here when it matters
          </p>
          <h2>
            <span className="emergency-heading-label">Emergency care,</span>
            <br />
            <em>day or night.</em>
          </h2>
          <p>
            Our emergency department is open 24 hours a day, 7 days a week, with
            experienced clinicians ready to help. Ambulance support is available
            whenever you need it.
          </p>
        </div>
        <div className="emergency-action">
          <span>24 / 7 availability</span>
          <a className="button button-light" href="tel:+917507179098">
            <span className="phone-icon">✆</span> Call +91 75071 79098
          </a>
          <small>
            For life-threatening emergencies, call your local emergency number.
          </small>
        </div>
      </section>

      <section className="facilities-section content-section" id="facilities">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> A better environment for healing
            </p>
            <h2>
              Everything you need,
              <br />
              <em>close at hand.</em>
            </h2>
          </div>
        </div>
        <div className="facility-grid">
          {facilities.map(([icon, name, description], index) => (
            <article
              className={`facility-card ${
                index === activeFacility
                  ? "is-active"
                  : index ===
                      activeFacility + (scrollDirection === "up" ? -1 : 1)
                    ? "is-next"
                    : scrollDirection === "down"
                      ? index < activeFacility
                        ? "is-passed"
                        : "is-hidden"
                      : index > activeFacility
                      ? "is-passed"
                      : "is-hidden"
              }`}
              key={name}
            >
              <span className="card-icon">{icon}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section content-section" id="approach">
        <div className="why-copy">
          <p className="eyebrow">
            <span /> Why Carepoint
          </p>
          <h2>
            Trust is part of
            <br />
            <em>the treatment.</em>
          </h2>
          <p>
            Good care is clinical, but it is also clear communication, clean
            spaces, and a team that remembers your name. We bring all of it
            together.
          </p>
          <a className="text-link" href="#contact">
            Visit us <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="why-list">
          <div>
            <span>01</span>
            <h3>Experienced doctors</h3>
            <p>
              Care from specialists who keep learning and never stop listening.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Modern equipment</h3>
            <p>
              Accurate answers and safer treatment with technology you can
              trust.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Patient-first approach</h3>
            <p>
              Your questions, comfort, and choices stay at the centre of every
              decision.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-section content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> Patient stories
            </p>
            <h2>
              Care that stays
              <br />
              <em>with you.</em>
            </h2>
          </div>
          <span className="rating">
            ★★★★★ <small>4.9 / 5 patient rating</small>
          </span>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([quote, name, department]) => (
            <figure key={name}>
              <div className="stars">★★★★★</div>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{department}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-section content-section" id="contact">
        <div>
          <p className="eyebrow">
            <span /> Find your way to us
          </p>
          <h2>
            Here for you,
            <br />
            <em>right around the corner.</em>
          </h2>
          <div className="contact-details">
            <p>
              <strong>VishwaCare Hospital &amp; Medical Centre</strong>
              <br />
              Koregaon Park
              <br />
              Pune, Maharashtra 411001
            </p>
            <p>
              <a href="tel:+917020961222">+91 70209 61222</a>
              <br />
              <a href="mailto:hello@carepoint.health">hello@carepoint.health</a>
              <br />
              Open 24 hours, every day
            </p>
          </div>
          <a
            className="button button-primary"
            href="https://www.google.com/maps/search/?api=1&query=Koregaon+Park+Pune+Maharashtra+411001"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="VishwaCare Hospital location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.88%2C18.52%2C73.91%2C18.55&layer=mapnik&marker=18.536%2C73.893"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">
                <img src="/doctor.png" alt="" />
              </span>
              <span>
                VishwaCare
                <span className="brand-sub">Hospital &amp; Medical Centre</span>
              </span>
            </a>
            <p>Modern medicine, with a human pulse.</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#about">About us</a>
              <a href="#departments">Departments</a>
              <a href="#facilities">Facilities</a>
            </div>
            <div>
              <strong>Patient care</strong>
              <a href="#appointment">Book appointment</a>
              <a href="#emergency">Emergency care</a>
              <a href="#contact">Contact &amp; location</a>
            </div>
            <div>
              <strong>Contact</strong>
              <a href="tel:+917020961222">+91 70209 61222</a>
              <a href="mailto:hello@carepoint.health">hello@carepoint.health</a>
              <span>Koregaon Park, Pune</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VishwaCare Health</span>
          <span className="demo-credit">Demo concept by <a href="https://pebblestudios.vercel.app" target="_blank" rel="noreferrer">Pebble Studios</a> · <a href="mailto:pebblestudios.dev@gmail.com">pebblestudios.dev@gmail.com</a></span>
          <span>
            <a href="#top">Privacy policy</a>
            <a href="#top">Terms &amp; conditions</a>
            <a href="#top">Instagram</a>
            <a href="#top">LinkedIn</a>
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;
