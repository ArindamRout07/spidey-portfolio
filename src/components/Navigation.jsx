export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-line bg-void/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-mono text-sm text-paper">ARINDAM ROUT</span>
        <div className="flex gap-4 font-mono text-xs text-muted">
          <a href="#about">ABOUT</a>
          <a href="#engineer">ENGINEER</a>
          <a href="#creator">CREATOR</a>
          <a href="#experimenter">EXPERIMENTER</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#resume">RESUME</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </nav>
  )
}
