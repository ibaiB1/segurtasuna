import { useCallback, useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import TermPage from './pages/TermPage'

/** Orri aldatzean goora itzuli (animaziorik gabe). */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const root = document.documentElement
    const prev = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = prev
  }, [pathname])
  return null
}

export default function App() {
  const [ready, setReady] = useState(false)
  const [loaderGone, setLoaderGone] = useState(false)

  const handleLeaveStart = useCallback(() => setReady(true), [])
  const handleDone = useCallback(() => setLoaderGone(true), [])

  return (
    <>
      {!loaderGone && (
        <Loader duration={1600} onLeaveStart={handleLeaveStart} onDone={handleDone} />
      )}
      <HashRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        {ready && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erronka1" element={<Navigate to="/" replace />} />
            <Route path="/erronka1/:slug" element={<TermPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
        <BackToTop />
      </HashRouter>
    </>
  )
}