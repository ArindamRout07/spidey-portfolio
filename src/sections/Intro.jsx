import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Intro() {
  const sectionRef = useRef(null)
  const threadVRef = useRef(null)
  const threadHRef = useRef(null)
  const threadNodeRef = useRef(null)
  const headerRef = useRef(null)
  const transmissionRef = useRef(null)
  const enterTheRef = useRef(null)
  const arindamVerseRef = useRef(null)
  const redAccentRef = useRef(null)
  const sublineRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      // 1. Delicate structural thread reveal
      tl.fromTo(
        threadVRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 1.1, ease: 'power3.inOut' },
        0,
      )
      tl.fromTo(
        threadHRef.current,
        { scaleX: 0, transformOrigin: 'center center' },
        { scaleX: 1, duration: 0.9, ease: 'power3.inOut' },
        0.15,
      )
      tl.fromTo(
        threadNodeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
        0.35,
      )

      // 2. Top bar and transmission tag: displaced vertically with low opacity
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        0.25,
      )
      tl.fromTo(
        transmissionRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        0.35,
      )

      // 3. ENTER THE reveals upward with clip-path
      tl.fromTo(
        enterTheRef.current,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          y: 28,
          opacity: 0,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: 'power4.out',
        },
        0.5,
      )

      // 4. ARINDAM-VERSE reveals upward from clipped state with slight vertical displacement
      tl.fromTo(
        arindamVerseRef.current,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          y: 38,
          opacity: 0,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power4.out',
        },
        0.65,
      )

      // 5. Red accent mark appears shortly after the main title with small scale/opacity reveal
      tl.fromTo(
        redAccentRef.current,
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 0.9, duration: 0.5, ease: 'power2.out' },
        1.15,
      )

      // 6. Supporting metadata fades in
      tl.fromTo(
        sublineRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        1.3,
      )

      // 7. SCROLL TO ENTER and bottom telemetry appear last
      tl.fromTo(
        footerRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
        1.45,
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="intro"
      aria-label="Opening transmission"
      className="relative w-full h-svh min-h-[640px] bg-void text-paper flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-6 sm:px-12 md:px-16 overflow-hidden select-none border-b border-line"
    >
      {/* Structural thread motif */}
      <div
        className="intro-thread-container pointer-events-none absolute inset-0 flex justify-center items-center"
        aria-hidden="true"
      >
        <div ref={threadVRef} className="intro-thread-v absolute top-0 bottom-0 w-px bg-line/60" />
        <div ref={threadHRef} className="intro-thread-h absolute left-0 right-0 h-px bg-line/40" />
        <div
          ref={threadNodeRef}
          className="intro-thread-node absolute w-2 h-2 rounded-full border border-spider-red bg-void"
        />
      </div>

      {/* Top Bar: Technical Metadata */}
      <header
        ref={headerRef}
        className="relative z-10 flex items-center justify-between w-full font-sans text-[11px] sm:text-xs tracking-[0.22em] text-muted uppercase"
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-spider-red shrink-0" aria-hidden="true" />
          <span className="font-mono tracking-widest text-paper/80">SIGNAL_00 / 08</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-muted">
          <span>FREQUENCY // 142.88 MHZ</span>
          <span className="text-line" aria-hidden="true">
            /
          </span>
          <span>PROTOCOL // ACTIVE</span>
        </div>
      </header>

      {/* Center Statement: ENTER THE ARINDAM-VERSE */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-5xl mx-auto px-2">
        <p
          ref={transmissionRef}
          className="font-sans text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.35em] text-muted uppercase mb-4 sm:mb-6"
        >
          TRANSMISSION DETECTED
        </p>

        <h1 className="tracking-tight text-paper">
          <span className="block overflow-hidden pb-1">
            <span
              ref={enterTheRef}
              className="block font-sans font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.24em] text-paper/90 mb-2 sm:mb-3 will-change-transform"
            >
              ENTER THE
            </span>
          </span>

          <span className="block overflow-hidden py-1">
            <span
              ref={arindamVerseRef}
              className="block font-display italic font-normal text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.88] text-paper will-change-transform"
            >
              ARINDAM
              <span
                ref={redAccentRef}
                className="text-spider-red font-sans not-italic font-light px-1 text-4xl sm:text-6xl md:text-8xl lg:text-9xl align-middle inline-block will-change-transform"
              >
                -
              </span>
              VERSE
            </span>
          </span>
        </h1>

        <div
          ref={sublineRef}
          className="mt-8 sm:mt-10 flex items-center gap-3 text-muted font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase"
        >
          <span>CREATIVE ENGINEERING</span>
          <span className="w-1 h-1 rounded-full bg-line" aria-hidden="true" />
          <span>CINEMATIC WEB</span>
        </div>
      </div>

      {/* Bottom Bar: Instructions & Telemetry */}
      <footer
        ref={footerRef}
        className="relative z-10 flex items-end justify-between w-full font-sans text-[11px] sm:text-xs tracking-[0.22em] text-muted uppercase"
      >
        <div className="hidden sm:block text-muted font-mono tracking-widest">
          [ 40.7128° N, 74.0060° W ]
        </div>

        {/* Understated Directional Indicator */}
        <div className="flex flex-col items-center gap-3 mx-auto sm:mx-0">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] text-muted font-medium">
            SCROLL TO ENTER
          </span>
          <div className="w-px h-8 bg-line relative flex justify-center" aria-hidden="true">
            <span className="w-1 h-2 bg-spider-red rounded-full" />
          </div>
        </div>

        <div className="hidden sm:block text-right text-muted font-mono tracking-widest">
          DIMENSION // EARTH-616
        </div>
      </footer>
    </section>
  )
}
