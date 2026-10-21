import { useState } from "react"

export const photos = {
  hero: "https://images.unsplash.com/photo-1655947717064-d856af599bd1?auto=format&fit=crop&w=1400&q=90",

  tech: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?auto=format&fit=crop&w=900&q=85",

  mind: "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?auto=format&fit=crop&w=900&q=85",

  creative:
    "https://images.unsplash.com/photo-1673767296863-c00f139e4be8?auto=format&fit=crop&w=900&q=85",

  creator1:
    "https://images.unsplash.com/photo-1581368129682-e2d66324045b?auto=format&fit=crop&w=700&q=85",

  creator2:
    "https://images.unsplash.com/photo-1601814837969-bde7f6604dfd?auto=format&fit=crop&w=700&q=85",

  creator3:
    "https://images.unsplash.com/photo-1581547848331-0aba76655842?auto=format&fit=crop&w=700&q=85",

  creator4:
    "https://images.unsplash.com/photo-1539911759373-2025e46ed986?auto=format&fit=crop&w=700&q=85",

  studio:
    "https://images.unsplash.com/photo-1567598125860-7201ff8c9e6f?auto=format&fit=crop&w=1400&q=85",
}

export function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    play: <path d="m8 5 11 7-11 7Z" />,

    pause: (
      <>
        <path d="M9 5v14" />
        <path d="M15 5v14" />
      </>
    ),

    bookmark: <path d="M6 4h12v17l-6-4-6 4Z" />,

    headphones: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v6h4v-6H4Zm12 0v6h4v-6h-4Z" />
      </>
    ),

    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
        <path d="m5 16 .7 2.3L8 19l-2.3.7L5 22l-.7-2.3L2 19l2.3-.7L5 16Z" />
      </>
    ),

    mic: (
      <>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
      </>
    ),

    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),

    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),

    twitter: (
      <path d="M22 5.8c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 5.5 6a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.4 3 3.8-.5.2-1.1.2-1.7.1.5 1.5 1.9 2.6 3.6 2.7A7.7 7.7 0 0 1 5.2 19c-.3 0-.6 0-.9-.1a10.8 10.8 0 0 0 16.6-9.1v-.5A7.7 7.7 0 0 0 22 5.8Z" />
    ),

    youtube: (
      <>
        <path d="M22 12s0-3.5-.4-5.1a2.5 2.5 0 0 0-1.7-1.7C18.4 4.8 12 4.8 12 4.8s-6.4 0-7.9.4a2.5 2.5 0 0 0-1.7 1.7C2 8.4 2 12 2 12s0 3.6.4 5.1a2.5 2.5 0 0 0 1.7 1.7c1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.7c.4-1.5.4-5.1.4-5.1Z" />
        <path d="m10 9 5 3-5 3Z" />
      </>
    ),
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const categories = [
  ["Briefcase", "Business"],

  ["⌘", "Technology"],

  ["✦", "Health"],

  ["A+", "Education"],

  ["☼", "Lifestyle"],

  ["☺", "Comedy"],

  ["♫", "Music"],

  ["“ ”", "Interviews"],
]

export const podcasts = [
  {
    title: "Tech Talks",
    host: "with Marcus Chen",
    tag: "TECHNOLOGY",
    meta: "EP. 48 · 42 MIN",
    image: photos.tech,
    color: "orange",
  },

  {
    title: "Mind Matters",
    host: "with Nora Williams",
    tag: "WELLBEING",
    meta: "EP. 26 · 36 MIN",
    image: photos.mind,
    color: "blue",
  },

  {
    title: "Creative Flows",
    host: "with Amara Reed",
    tag: "CREATIVITY",
    meta: "EP. 71 · 51 MIN",
    image: photos.creative,
    color: "pink",
  },
]

export const creators = [
  {
    name: "Elliot James",
    genre: "Culture & Ideas",
    followers: "42.8K",
    image: photos.creator1,
  },

  {
    name: "Maya Brooks",
    genre: "Mind & Body",
    followers: "38.2K",
    image: photos.creator2,
  },

  {
    name: "Noah Williams",
    genre: "Tech & Future",
    followers: "31.6K",
    image: photos.creator3,
  },

  {
    name: "Sofia Rivera",
    genre: "Life & Stories",
    followers: "27.9K",
    image: photos.creator4,
  },
]

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Whispr home">
      <span className="logo-mark">
        <i />
        <i />
        <i />
      </span>
      <span>whispr</span>
    </a>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState("Technology")

  const [playing, setPlaying] = useState(null)

  const [following, setFollowing] = useState(["Maya Brooks"])

  const [saved, setSaved] = useState([])

  const toggleFollow = (name) =>
    setFollowing((list) =>
      list.includes(name)
        ? list.filter((item) => item !== name)
        : [...list, name],
    )

  return (
    <main id="top">
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About us
            </a>
            <a href="#podcasts" onClick={() => setMenuOpen(false)}>
              Podcasts
            </a>
            <a href="#creators" onClick={() => setMenuOpen(false)}>
              Top creators
            </a>
            <a href="#join" onClick={() => setMenuOpen(false)}>
              Let&apos;s join us
            </a>
            <div className="mobile-actions">
              <button
                className="button button-ghost"
                onClick={() => (window.location.hash = "/signup")}
              >
                Sign up
              </button>
              <button
                className="button button-primary"
                onClick={() => (window.location.hash = "/login")}
              >
                Log in
              </button>
            </div>
          </nav>
          <div className="nav-actions">
            <button
              className="button button-ghost"
              onClick={() => (window.location.hash = "/signup")}
            >
              Sign up
            </button>
            <button
              className="button button-primary"
              onClick={() => (window.location.hash = "/login")}
            >
              Log in
            </button>
          </div>
          <button
            className={menuOpen ? "menu-toggle active" : "menu-toggle"}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow light">
            <span />
            The sound of now
          </p>
          <h1>
            LISTEN TO SOME
            <br />
            FUN TALKS!
          </h1>
          <p className="hero-side">
            EVERY VOICE
            <br />
            REALLY MATTERS!
          </p>
        </div>
        <div className="hero-visual">
          <div className="wave wave-one" />
          <div className="wave wave-two" />
          <div className="wave wave-three" />
          <div className="hero-photo">
            <img
              src={photos.hero}
              alt="Podcast host wearing headphones in a studio"
            />
          </div>
          <div className="listeners-card">
            <p>Our community</p>
            <div className="avatar-stack">
              {[photos.creator1, photos.creator2, photos.creator4].map(
                (photo, index) => (
                  <img
                    key={photo}
                    src={photo}
                    alt=""
                    style={{ zIndex: 4 - index }}
                  />
                ),
              )}
              <span>+10K</span>
            </div>
            <div className="listener-bottom">
              <div>
                <strong>100K+</strong>
                <span>Monthly listeners</span>
              </div>
              <a href="#podcasts" aria-label="Explore podcasts">
                <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="hero-badge">
            <Icon name="spark" size={19} />
            <span>
              Fresh voices
              <br />
              every week
            </span>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <i />
        </a>
      </section>

      <section className="platform-strip" aria-label="Available audio formats">
        <span>HEARD ON</span>
        <div>
          <Icon name="headphones" /> AUDIOCAST
        </div>
        <div>
          <span className="sound-bars">▂▅▇▃</span> SONORA
        </div>
        <div>
          <span className="circle-mark">◉</span> WAVEROOM
        </div>
        <div>
          <Icon name="mic" /> OPEN MIC
        </div>
        <small>Decorative platform references</small>
      </section>

      <section className="section podcasts-section" id="podcasts">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span />
              Curated for curious minds
            </p>
            <h2>
              DISCOVER AMAZING
              <br />
              PODCASTS
            </h2>
          </div>
          <div className="heading-aside">
            <p>
              Stories that move you. Ideas that stay with you. Find your next
              favorite listen, handpicked by our editorial team.
            </p>
            <a className="text-link" href="#categories">
              Explore podcasts <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
        <div className="podcast-grid">
          {podcasts.map((podcast, index) => (
            <article
              className={`podcast-card ${podcast.color}`}
              key={podcast.title}
            >
              <div className="cover-wrap">
                <img
                  src={podcast.image}
                  alt={`${podcast.title} podcast cover`}
                />
                <span className="cover-number">0{index + 1}</span>
                <button
                  className="save-button"
                  aria-label={`Save ${podcast.title}`}
                  onClick={() =>
                    setSaved((list) =>
                      list.includes(podcast.title)
                        ? list.filter((x) => x !== podcast.title)
                        : [...list, podcast.title],
                    )
                  }
                >
                  <Icon name="bookmark" size={18} />
                  {saved.includes(podcast.title) && (
                    <span className="saved-dot" />
                  )}
                </button>
                <button
                  className="play-button"
                  aria-label={`${
                    playing === podcast.title ? "Pause" : "Play"
                  } ${podcast.title}`}
                  onClick={() =>
                    setPlaying(playing === podcast.title ? null : podcast.title)
                  }
                >
                  <Icon
                    name={playing === podcast.title ? "pause" : "play"}
                    size={22}
                  />
                </button>
              </div>
              <div className="podcast-meta">
                <span>{podcast.tag}</span>
                <span>{podcast.meta}</span>
              </div>
              <h3>{podcast.title}</h3>
              <p>{podcast.host}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="categories" id="categories">
        <div className="section slim">
          <p className="eyebrow light">
            <span />
            Tune into your world
          </p>
          <div className="category-heading">
            <h2>FIND YOUR FREQUENCY</h2>
            <p>Pick a mood. We&apos;ll bring the voices.</p>
          </div>
          <div className="category-list">
            {categories.map(([symbol, label]) => (
              <button
                key={label}
                className={
                  selectedCategory === label ? "category active" : "category"
                }
                onClick={() => setSelectedCategory(label)}
              >
                <span>{symbol}</span>
                <b>{label}</b>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section creators-section" id="creators">
        <div className="section-heading align-end">
          <div>
            <p className="eyebrow">
              <span />
              People worth hearing
            </p>
            <h2>
              TOP CREATORS
              <br />
              YOU&apos;LL LOVE
            </h2>
          </div>
          <a
            className="round-link"
            href="#all-creators"
            aria-label="View all creators"
          >
            <Icon name="arrow" size={23} />
          </a>
        </div>
        <div className="creator-grid">
          {creators.map((creator, index) => (
            <article className="creator-card" key={creator.name}>
              <div className="creator-image">
                <img src={creator.image} alt={creator.name} />
                <span>0{index + 1}</span>
              </div>
              <div className="creator-info">
                <p>{creator.genre}</p>
                <h3>{creator.name}</h3>
                <div>
                  <span>
                    <b>{creator.followers}</b> followers
                  </span>
                  <button
                    className={
                      following.includes(creator.name)
                        ? "follow active"
                        : "follow"
                    }
                    onClick={() => toggleFollow(creator.name)}
                  >
                    {following.includes(creator.name) ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="about">
        <div className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                Your next listen is close
              </p>
              <h2>
                PRESS PLAY.
                <br />
                FEEL MORE.
              </h2>
            </div>
            <p className="how-intro">
              Whispr makes discovering unforgettable conversations beautifully
              simple.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Create an account",
                "Build your listening profile in less than a minute.",
              ],

              [
                "02",
                "Explore podcasts",
                "Follow your curiosity through voices and stories.",
              ],

              [
                "03",
                "Start listening",
                "Save, share, and take every episode with you.",
              ],
            ].map(([number, title, body]) => (
              <article className="step-card" key={number}>
                <span>{number}</span>
                <div className="step-icon">
                  <Icon
                    name={
                      number === "01"
                        ? "spark"
                        : number === "02"
                          ? "search"
                          : "headphones"
                    }
                    size={28}
                  />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="app-promo">
        <div className="section app-layout">
          <div className="app-copy">
            <p className="eyebrow light">
              <span />
              Wherever life takes you
            </p>
            <h2>
              LISTEN ANYTIME,
              <br />
              ANYWHERE.
            </h2>
            <p>
              Take the stories you love from the morning commute to the midnight
              wind-down. Your queue is always ready.
            </p>
            <div className="store-buttons">
              <button>
                <small>Planned for</small>
                <strong>App Store</strong>
              </button>
              <button>
                <small>Planned for</small>
                <strong>Google Play</strong>
              </button>
            </div>
            <span className="availability-note">
              Concept preview · mobile app not yet available
            </span>
          </div>
          <div className="phone-stage">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-top">
                  <Logo />
                  <span>••</span>
                </div>
                <p>NOW PLAYING</p>
                <img src={photos.creative} alt="" />
                <h3>Creative Flows</h3>
                <span>Amara Reed · Episode 71</span>
                <div className="phone-progress">
                  <i />
                </div>
                <div className="phone-controls">
                  <span>↶</span>
                  <button>
                    <Icon name="pause" size={25} />
                  </button>
                  <span>↷</span>
                </div>
              </div>
            </div>
            <div className="floating-track">
              <img src={photos.mind} alt="" />
              <div>
                <small>UP NEXT</small>
                <b>Small Habits</b>
              </div>
              <Icon name="play" size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span />
              From our community
            </p>
            <h2>
              WHAT LISTENERS
              <br />
              ARE SAYING
            </h2>
          </div>
          <span className="big-quote">“</span>
        </div>
        <div className="testimonial-grid">
          {[
            [
              "Whispr feels less like an app and more like a friend who always knows what I need to hear.",
              "Leah Kim",
              "Daily listener",
              photos.creator2,
            ],

            [
              "I have found thoughtful voices here that I never would have discovered in a standard chart.",
              "Daniel Ford",
              "Community member",
              photos.creator1,
            ],

            [
              "The whole experience is beautiful, calm, and full of surprise. My walks are never quiet now.",
              "Ari Monroe",
              "Podcast enthusiast",
              photos.creator4,
            ],
          ].map(([quote, name, role, image], index) => (
            <article
              className={index === 1 ? "testimonial featured" : "testimonial"}
              key={name}
            >
              <span className="quote-mark">“</span>
              <p>{quote}</p>
              <div>
                <img src={image} alt="" />
                <span>
                  <b>{name}</b>
                  <small>{role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="sample-note">Illustrative sample testimonials.</p>
      </section>

      <section className="final-cta" id="join">
        <div className="cta-waves">
          <i />
          <i />
          <i />
        </div>
        <img
          src={photos.studio}
          alt="Studio microphones ready for a conversation"
        />
        <div className="cta-content">
          <p className="eyebrow light">
            <span />
            Your voice belongs here
          </p>
          <h2>
            READY TO JOIN THE
            <br />
            CONVERSATION?
          </h2>
          <p>Discover the shows everyone will be talking about tomorrow.</p>
          <button className="button button-cream">
            Get started <Icon name="arrow" size={19} />
          </button>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              Stories that move you.
              <br />
              Voices that stay with you.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <b>Explore</b>
              <a href="#about">About</a>
              <a href="#podcasts">Podcasts</a>
              <a href="#creators">Creators</a>
            </div>
            <div>
              <b>Company</b>
              <a href="#journal">Journal</a>
              <a href="#contact">Contact</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
          <div className="newsletter">
            <b>Stay in the loop</b>
            <p>A little inspiration for your inbox.</p>
            <label>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button aria-label="Subscribe">
                <Icon name="arrow" size={19} />
              </button>
            </label>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Whispr Studio</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <div className="socials">
            <a href="#instagram" aria-label="Instagram">
              <Icon name="instagram" size={17} />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <Icon name="twitter" size={17} />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <Icon name="youtube" size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
