import { motion } from "framer-motion";
import { Code2, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/10 bg-primary/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
            <Code2 className="h-4 w-4 text-secondary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-primary-foreground">CodeLearn</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Roadmap</a>
          <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Tracks</a>
          <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">About</a>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
                <User className="h-3.5 w-3.5" />
                {user.email}
              </span>
              <button
                onClick={signOut}
                className="flex items-center gap-1.5 rounded-lg border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                <LogOut className="h-3.5 w-3.5" />
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              className="rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
