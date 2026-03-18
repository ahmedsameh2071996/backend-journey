import { Terminal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-sm">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-foreground font-semibold">ahmed</span>
          <span className="text-muted-foreground">@</span>
          <span className="text-muted-foreground">backend</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-muted-foreground">
          <a href="#experience" className="hover:text-foreground transition-colors">/experience</a>
          <a href="#training" className="hover:text-foreground transition-colors">/training</a>
          <a href="#contact" className="hover:text-primary transition-colors">GET /contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
