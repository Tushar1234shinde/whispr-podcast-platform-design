import { useMemo, useState } from "react"

import { creators, Icon, Logo, photos, podcasts } from "./App"

function go(path) {
  window.location.hash = path
}

function ProductHeader({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="product-header">
      <div className="product-nav">
        <Logo />
        <nav className={open ? "product-links open" : "product-links"}>
          <button
            className={active === "discover" ? "active" : ""}
            onClick={() => go("/discover")}
          >
            Discover
          </button>
          <button onClick={() => go("/podcast")}>My library</button>
          <button
            className={active === "creators" ? "active" : ""}
            onClick={() => go("/creator")}
          >
            Creators
          </button>
        </nav>
        <div className="product-actions">
          <button
            className="nav-search"
            aria-label="Search"
            onClick={() => go("/discover")}
          >
            <Icon name="search" size={19} />
          </button>
          <button className="user-chip" onClick={() => go("/dashboard")}>
            <img src={photos.creator4} alt="" />
            <span>Ari</span>
          </button>
          <button
            className="product-menu"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Field({ label, type = "text", placeholder, error, value, onChange }) {
  const [visible, setVisible] = useState(false)

  const password = type === "password"

  return (
    <label className={`field ${error ? "has-error" : ""}`}>
      <span>{label}</span>
      <div>
        <input
          type={password && visible ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
        {password && (
          <button type="button" onClick={() => setVisible(!visible)}>
            {visible ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <small>{error}</small>}
    </label>
  )
}

export function AuthPage({ mode }) {
  const signup = mode === "signup"

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  })

  const [errors, setErrors] = useState({})

  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => setValues({ ...values, [key]: value })

  const submit = (event) => {
    event.preventDefault()

    const next = {}

    if (signup && values.name.trim().length < 2)
      next.name = "Please enter your full name."

    if (!values.email.includes("@")) next.email = "Enter a valid email address."

    if (signup && values.username.length < 3)
      next.username = "Username must be at least 3 characters."

    if (values.password.length < 8) next.password = "Use at least 8 characters."

    if (signup && values.password !== values.confirm)
      next.confirm = "Passwords do not match."

    setErrors(next)

    if (!Object.keys(next).length) {
      setSubmitted(true)

      window.setTimeout(() => go("/dashboard"), 700)
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-art">
        <div className="auth-brand">
          <Logo />
          <button onClick={() => go("/")}>Back home</button>
        </div>
        <div className="auth-rings">
          <i />
          <i />
          <i />
        </div>
        <img
          src={signup ? photos.creative : photos.hero}
          alt="Podcast creator in a recording session"
        />
        <div className="auth-quote">
          <span>“</span>
          <p>
            Every voice has a story.
            <br />
            This is where yours begins.
          </p>
          <small>THE WHISPR COMMUNITY</small>
        </div>
      </section>
      <section className="auth-panel">
        <div className="auth-form-wrap">
          <p className="eyebrow">
            <span />
            Welcome to Whispr
          </p>
          <h1>{signup ? "JOIN THE CONVERSATION" : "WELCOME BACK"}</h1>
          <p className="auth-lead">
            {signup
              ? "Create your profile and start finding voices worth hearing."
              : "Your next favorite conversation is waiting."}
          </p>
          <div className="auth-switch">
            <button
              className={!signup ? "active" : ""}
              onClick={() => go("/login")}
            >
              Log in
            </button>
            <button
              className={signup ? "active" : ""}
              onClick={() => go("/signup")}
            >
              Sign up
            </button>
          </div>
          <form onSubmit={submit} noValidate>
            {signup && (
              <div className="field-row">
                <Field
                  label="Full name"
                  placeholder="Ari Monroe"
                  value={values.name}
                  onChange={(v) => update("name", v)}
                  error={errors.name}
                />
                <Field
                  label="Username"
                  placeholder="arimonroe"
                  value={values.username}
                  onChange={(v) => update("username", v)}
                  error={errors.username}
                />
              </div>
            )}
            <Field
              label="Email address"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
            />
            <Field
              label="Password"
              type="password"
              placeholder="At least 8 characters"
              value={values.password}
              onChange={(v) => update("password", v)}
              error={errors.password}
            />
            {signup && (
              <Field
                label="Confirm password"
                type="password"
                placeholder="Repeat your password"
                value={values.confirm}
                onChange={(v) => update("confirm", v)}
                error={errors.confirm}
              />
            )}
            {signup ? (
              <div className="password-hint">
                <i className={values.password.length >= 8 ? "done" : ""} />
                8+ characters{" "}
                <i className={/[0-9]/.test(values.password) ? "done" : ""} />
                One number
              </div>
            ) : (
              <button className="forgot" type="button">
                Forgot password?
              </button>
            )}
            <button
              className={submitted ? "auth-submit success" : "auth-submit"}
              type="submit"
            >
              {submitted
                ? "You’re in — opening Whispr…"
                : signup
                  ? "Create my account"
                  : "Log in to Whispr"}{" "}
              {!submitted && <Icon name="arrow" size={18} />}
            </button>
          </form>
          <p className="auth-terms">
            {signup
              ? "By joining, you agree to Whispr’s Terms and Privacy Policy."
              : "New to Whispr? "}
            <button onClick={() => go(signup ? "/login" : "/signup")}>
              {signup ? "Already have an account? Log in" : "Create an account"}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

const allShows = [
  ...podcasts,

  {
    title: "The Open Table",
    host: "with Sofia Rivera",
    tag: "INTERVIEWS",
    meta: "EP. 32 · 46 MIN",
    image: photos.creator4,
    color: "pink",
  },

  {
    title: "Brighter Days",
    host: "with Elliot James",
    tag: "CULTURE",
    meta: "EP. 19 · 29 MIN",
    image: photos.creator1,
    color: "orange",
  },

  {
    title: "Future / Human",
    host: "with Noah Williams",
    tag: "TECHNOLOGY",
    meta: "EP. 54 · 38 MIN",
    image: photos.creator3,
    color: "blue",
  },
]

function CompactPlayer({
  title = "Creative Flows",
  creator = "Amara Reed",
  image = photos.creative,
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="mini-player">
      <img src={image} alt="" />
      <div className="mini-title">
        <b>{title}</b>
        <span>{creator}</span>
      </div>
      <div className="mini-controls">
        <span>−15</span>
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
        >
          <Icon name={playing ? "pause" : "play"} size={19} />
        </button>
        <span>+15</span>
      </div>
      <div className="mini-track">
        <i />
        <span>18:24</span>
        <span>42:08</span>
      </div>
      <button className="mini-extra">1×</button>
      <button className="mini-extra">•••</button>
    </div>
  )
}

export function DiscoveryPage() {
  const [query, setQuery] = useState("")

  const [category, setCategory] = useState("All")

  const [saved, setSaved] = useState([])

  const results = useMemo(
    () =>
      allShows.filter((show) => {
        const matchesQuery = `${show.title} ${show.host}`
          .toLowerCase()
          .includes(query.toLowerCase())

        return (
          matchesQuery &&
          (category === "All" || show.tag === category.toUpperCase())
        )
      }),
    [query, category],
  )

  const filters = [
    "All",
    "Technology",
    "Wellbeing",
    "Creativity",
    "Interviews",
    "Culture",
  ]

  return (
    <main className="product-page has-player">
      <ProductHeader active="discover" />
      <section className="discovery-hero">
        <div>
          <p className="eyebrow light">
            <span />
            Find your next obsession
          </p>
          <h1>
            WHAT DO YOU
            <br />
            WANT TO HEAR?
          </h1>
        </div>
        <label className="search-box">
          <Icon name="search" size={22} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search shows, episodes, or creators"
          />
          {query && <button onClick={() => setQuery("")}>Clear</button>}
        </label>
      </section>
      <div className="product-content">
        <div className="filter-row">
          <div>
            {filters.map((filter) => (
              <button
                className={category === filter ? "active" : ""}
                onClick={() => setCategory(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="sort-button">
            Newest first <span>⌄</span>
          </button>
        </div>
        {!query && category === "All" && (
          <article className="featured-banner">
            <img src={photos.mind} alt="Mind Matters host in the studio" />
            <div>
              <p>EDITOR’S PICK · THIS WEEK</p>
              <h2>
                THE SCIENCE OF
                <br />
                FEELING GOOD
              </h2>
              <span>
                Nora Williams asks what actually makes a life feel meaningful.
              </span>
              <button onClick={() => go("/podcast")}>
                <Icon name="play" size={18} />
                Play featured episode
              </button>
            </div>
            <b>FEATURED</b>
          </article>
        )}
        <div className="list-heading">
          <div>
            <p className="eyebrow">
              <span />
              Handpicked for you
            </p>
            <h2>
              {query
                ? `RESULTS FOR “${query}”`
                : category === "All"
                  ? "TRENDING NOW"
                  : `${category.toUpperCase()} PICKS`}
            </h2>
          </div>
          <span>{results.length} shows</span>
        </div>
        {results.length ? (
          <div className="show-grid">
            {results.map((show) => (
              <article className="show-card" key={show.title}>
                <button className="show-image" onClick={() => go("/podcast")}>
                  <img src={show.image} alt="" />
                  <span>
                    <Icon name="play" size={22} />
                  </span>
                </button>
                <div className="show-data">
                  <span>{show.tag}</span>
                  <button
                    onClick={() =>
                      setSaved(
                        saved.includes(show.title)
                          ? saved.filter((item) => item !== show.title)
                          : [...saved, show.title],
                      )
                    }
                  >
                    <Icon name="bookmark" size={17} />
                    {saved.includes(show.title) && <i />}
                  </button>
                </div>
                <h3 onClick={() => go("/podcast")}>{show.title}</h3>
                <p>{show.host}</p>
                <small>{show.meta}</small>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>
              <Icon name="search" size={28} />
            </span>
            <h2>NO VOICES FOUND</h2>
            <p>Try a broader phrase or explore another category.</p>
            <button
              onClick={() => {
                setQuery("")
                setCategory("All")
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
        <section className="recent-strip">
          <div>
            <p className="eyebrow light">
              <span />
              New this week
            </p>
            <h2>
              FRESH FROM
              <br />
              THE STUDIO
            </h2>
          </div>
          <div className="episode-list-mini">
            {allShows.slice(1, 4).map((show, i) => (
              <button key={show.title} onClick={() => go("/podcast")}>
                <span>0{i + 1}</span>
                <img src={show.image} alt="" />
                <div>
                  <b>{show.title}</b>
                  <small>{show.meta}</small>
                </div>
                <Icon name="arrow" size={18} />
              </button>
            ))}
          </div>
        </section>
      </div>
      <CompactPlayer />
    </main>
  )
}

const episodes = [
  [
    "48",
    "Can technology make us more human?",
    "A candid look at the tools changing how we connect.",
    "May 24, 2025",
    "42 min",
  ],

  [
    "47",
    "The quiet revolution in our pockets",
    "Small interfaces, enormous shifts in behavior.",
    "May 17, 2025",
    "36 min",
  ],

  [
    "46",
    "Designing a future worth wanting",
    "Hope, responsibility, and the next decade of innovation.",
    "May 10, 2025",
    "51 min",
  ],

  [
    "45",
    "Who gets to build the internet?",
    "Opening the doors to a more imaginative digital world.",
    "May 03, 2025",
    "39 min",
  ],
]

export function PodcastPage() {
  const [playing, setPlaying] = useState(false)

  const [following, setFollowing] = useState(false)

  const [saved, setSaved] = useState([47])

  const [progress, setProgress] = useState(44)

  return (
    <main className="product-page has-player">
      <ProductHeader />
      <section className="podcast-detail-hero">
        <div className="detail-art">
          <div className="detail-rings" />
          <img src={photos.tech} alt="Tech Talks cover" />
          <span>
            TT
            <br />
            048
          </span>
        </div>
        <div className="detail-copy">
          <p className="eyebrow light">
            <span />
            Technology · Weekly
          </p>
          <h1>
            TECH
            <br />
            TALKS
          </h1>
          <p>
            Big questions about the technology shaping ordinary life, explored
            with the people building it — and the people living with the
            consequences.
          </p>
          <div className="host-line">
            <img src={photos.creator1} alt="" />
            <span>
              <small>HOSTED BY</small>
              <button onClick={() => go("/creator")}>Marcus Chen</button>
            </span>
          </div>
          <div className="detail-actions">
            <button
              className="primary-action"
              onClick={() => setPlaying(!playing)}
            >
              <Icon name={playing ? "pause" : "play"} size={19} />
              {playing ? "Playing episode" : "Play latest"}
            </button>
            <button
              className={
                following ? "secondary-action active" : "secondary-action"
              }
              onClick={() => setFollowing(!following)}
            >
              {following ? "Following" : "Follow show"}
            </button>
            <button className="circle-action" aria-label="Share">
              ↗
            </button>
          </div>
        </div>
        <aside className="show-stats">
          <div>
            <b>48</b>
            <span>Episodes</span>
          </div>
          <div>
            <b>4.9</b>
            <span>Listener rating</span>
          </div>
          <div>
            <b>86K</b>
            <span>Followers</span>
          </div>
        </aside>
      </section>
      <div className="product-content detail-content">
        <section className="featured-episode">
          <div className="featured-label">FEATURED EPISODE</div>
          <p>EPISODE 48 · MAY 24</p>
          <h2>
            CAN TECHNOLOGY
            <br />
            MAKE US MORE HUMAN?
          </h2>
          <p className="featured-description">
            Researcher Lena Ortiz joins Marcus to explore whether our tools can
            deepen empathy instead of replacing it.
          </p>
          <div className="full-player">
            <button onClick={() => setPlaying(!playing)}>
              <Icon name={playing ? "pause" : "play"} size={24} />
            </button>
            <span>18:24</span>
            <input
              aria-label="Episode progress"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
            />
            <span>42:08</span>
            <button className="volume" aria-label="Volume">
              ◖))
            </button>
            <button className="speed">1×</button>
          </div>
        </section>
        <section className="episodes-section">
          <div className="list-heading">
            <div>
              <p className="eyebrow">
                <span />
                Season four
              </p>
              <h2>ALL EPISODES</h2>
            </div>
            <button className="sort-button">Latest first ⌄</button>
          </div>
          <div className="episode-list">
            {episodes.map(([number, title, description, date, duration]) => (
              <article key={number}>
                <button
                  className="episode-play"
                  onClick={() => setPlaying(!playing)}
                >
                  <Icon
                    name={playing && number === "48" ? "pause" : "play"}
                    size={18}
                  />
                </button>
                <div className="episode-number">EP. {number}</div>
                <div className="episode-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <small>
                    {date} · {duration}
                  </small>
                </div>
                <button
                  className={
                    saved.includes(Number(number))
                      ? "episode-save saved"
                      : "episode-save"
                  }
                  onClick={() =>
                    setSaved(
                      saved.includes(Number(number))
                        ? saved.filter((x) => x !== Number(number))
                        : [...saved, Number(number)],
                    )
                  }
                >
                  <Icon name="bookmark" size={18} />
                </button>
                <button className="episode-more">•••</button>
              </article>
            ))}
          </div>
        </section>
      </div>
      <CompactPlayer
        title="Can technology make us more human?"
        creator="Tech Talks · Marcus Chen"
        image={photos.tech}
      />
    </main>
  )
}

export function DashboardPage() {
  const [tab, setTab] = useState("Overview")

  const [empty, setEmpty] = useState(false)

  const tabs = ["Overview", "Saved", "History", "Playlists", "Settings"]

  return (
    <main className="product-page dashboard-page has-player">
      <ProductHeader />
      <div className="dashboard-shell">
        <aside className="dash-sidebar">
          <div className="dash-profile">
            <img src={photos.creator4} alt="" />
            <div>
              <b>Ari Monroe</b>
              <span>@arimonroe</span>
            </div>
          </div>
          <nav>
            {tabs.map((item) => (
              <button
                className={tab === item ? "active" : ""}
                onClick={() => setTab(item)}
                key={item}
              >
                {item}
                <span>›</span>
              </button>
            ))}
          </nav>
          <button className="logout" onClick={() => go("/login")}>
            Log out <span>↗</span>
          </button>
        </aside>
        <div className="dash-main">
          <div className="dash-welcome">
            <div>
              <p className="eyebrow">
                <span />
                Tuesday, May 27
              </p>
              <h1>
                GOOD MORNING,
                <br />
                ARI.
              </h1>
              <p>Your queue has a few good ideas waiting.</p>
            </div>
            <button onClick={() => setEmpty(!empty)}>
              {empty ? "Show examples" : "Preview empty state"}
            </button>
          </div>
          {empty ? (
            <div className="dashboard-empty">
              <div>
                <Icon name="headphones" size={34} />
              </div>
              <h2>YOUR LIBRARY IS QUIET</h2>
              <p>Save a show or follow a creator and it will appear here.</p>
              <button onClick={() => go("/discover")}>
                Discover podcasts <Icon name="arrow" size={17} />
              </button>
            </div>
          ) : (
            <>
              <section className="continue-card">
                <img src={photos.tech} alt="" />
                <div>
                  <p>CONTINUE LISTENING · EP. 48</p>
                  <h2>
                    Can technology
                    <br />
                    make us more human?
                  </h2>
                  <span>Tech Talks · 23 minutes left</span>
                  <div className="continue-progress">
                    <i />
                  </div>
                </div>
                <button>
                  <Icon name="play" size={22} />
                </button>
              </section>
              <section className="dash-section">
                <div className="dash-title">
                  <div>
                    <p className="eyebrow">
                      <span />
                      Keep close
                    </p>
                    <h2>SAVED SHOWS</h2>
                  </div>
                  <button onClick={() => go("/discover")}>
                    View all <Icon name="arrow" size={16} />
                  </button>
                </div>
                <div className="saved-row">
                  {allShows.slice(0, 4).map((show) => (
                    <button key={show.title} onClick={() => go("/podcast")}>
                      <img src={show.image} alt="" />
                      <b>{show.title}</b>
                      <span>{show.host}</span>
                    </button>
                  ))}
                </div>
              </section>
              <section className="dash-columns">
                <div className="dash-section">
                  <div className="dash-title">
                    <div>
                      <p className="eyebrow">
                        <span />
                        Your people
                      </p>
                      <h2>FOLLOWING</h2>
                    </div>
                  </div>
                  <div className="following-list">
                    {creators.slice(0, 3).map((creator) => (
                      <button onClick={() => go("/creator")} key={creator.name}>
                        <img src={creator.image} alt="" />
                        <div>
                          <b>{creator.name}</b>
                          <span>{creator.genre}</span>
                        </div>
                        <small>{creator.followers}</small>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="dash-section playlist-card">
                  <p>PLAYLIST · 12 EPISODES</p>
                  <h2>
                    LATE NIGHT
                    <br />
                    IDEAS
                  </h2>
                  <div className="playlist-avatars">
                    {allShows.slice(0, 3).map((show) => (
                      <img src={show.image} alt="" key={show.title} />
                    ))}
                  </div>
                  <button>
                    Open playlist <Icon name="arrow" size={16} />
                  </button>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
      <CompactPlayer />
    </main>
  )
}

export function CreatorPage() {
  const [following, setFollowing] = useState(false)

  return (
    <main className="product-page has-player">
      <ProductHeader active="creators" />
      <section className="creator-banner">
        <img src={photos.studio} alt="" />
        <div className="creator-banner-waves" />
        <span>VOICE / 01</span>
      </section>
      <div className="creator-profile">
        <div className="profile-top">
          <img
            className="profile-photo"
            src={photos.creator1}
            alt="Elliot James"
          />
          <div className="profile-name">
            <p className="eyebrow">
              <span />
              Creator profile
            </p>
            <h1>
              ELLIOT
              <br />
              JAMES
            </h1>
          </div>
          <div className="profile-actions">
            <button
              className={
                following ? "primary-action following" : "primary-action"
              }
              onClick={() => setFollowing(!following)}
            >
              {following ? "Following" : "Follow Elliot"}
            </button>
            <button className="circle-action">↗</button>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-bio">
            <h2>
              CURIOUS ABOUT
              <br />
              HOW WE LIVE.
            </h2>
            <p>
              Writer, interviewer, and host of <em>Brighter Days</em>. Elliot
              makes room for conversations about culture, belonging, and the
              small decisions that quietly shape our lives.
            </p>
            <div className="genre-tags">
              <span>Culture</span>
              <span>Ideas</span>
              <span>Society</span>
            </div>
          </div>
          <div className="profile-stats">
            <div>
              <b>42.8K</b>
              <span>Followers</span>
            </div>
            <div>
              <b>1.2M</b>
              <span>Total listens</span>
            </div>
            <div>
              <b>86</b>
              <span>Episodes</span>
            </div>
          </div>
        </div>
      </div>
      <section className="creator-feature">
        <div className="creator-feature-art">
          <img src={photos.creator1} alt="" />
          <span>BD</span>
        </div>
        <div className="creator-feature-copy">
          <p className="eyebrow light">
            <span />
            Elliot’s show
          </p>
          <h2>
            BRIGHTER
            <br />
            DAYS
          </h2>
          <p>
            Honest conversations about making a good life in a complicated
            world.
          </p>
          <div>
            <button
              className="button button-cream"
              onClick={() => go("/podcast")}
            >
              <Icon name="play" size={18} />
              Listen now
            </button>
            <span>New episodes every Thursday</span>
          </div>
        </div>
      </section>
      <div className="product-content">
        <section className="episodes-section creator-episodes">
          <div className="list-heading">
            <div>
              <p className="eyebrow">
                <span />
                Latest from Elliot
              </p>
              <h2>RECENT EPISODES</h2>
            </div>
            <button className="sort-button">View all episodes</button>
          </div>
          <div className="episode-list">
            {episodes
              .slice(0, 3)
              .map(([number, title, description, date, duration]) => (
                <article key={number}>
                  <button className="episode-play">
                    <Icon name="play" size={18} />
                  </button>
                  <div className="episode-number">EP. {number}</div>
                  <div className="episode-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <small>
                      {date} · {duration}
                    </small>
                  </div>
                  <button className="episode-save">
                    <Icon name="bookmark" size={18} />
                  </button>
                </article>
              ))}
          </div>
        </section>
      </div>
      <CompactPlayer
        title="Brighter Days: The courage to begin again"
        creator="Elliot James"
        image={photos.creator1}
      />
    </main>
  )
}
