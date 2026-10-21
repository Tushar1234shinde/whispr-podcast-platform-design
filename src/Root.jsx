import { useEffect, useState } from "react"

import HomePage from "./App"

import {
  AuthPage,
  CreatorPage,
  DashboardPage,
  DiscoveryPage,
  PodcastPage,
} from "./pages"

function getRoute() {
  const hash = window.location.hash.replace(/^#/, "")

  return hash.startsWith("/") ? hash : "/"
}

export default function Root() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const update = () => {
      setRoute(getRoute())

      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    window.addEventListener("hashchange", update)

    return () => window.removeEventListener("hashchange", update)
  }, [])

  if (route === "/login") return <AuthPage mode="login" />

  if (route === "/signup") return <AuthPage mode="signup" />

  if (route === "/discover") return <DiscoveryPage />

  if (route === "/podcast") return <PodcastPage />

  if (route === "/dashboard") return <DashboardPage />

  if (route === "/creator") return <CreatorPage />

  return <HomePage />
}
