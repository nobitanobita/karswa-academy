import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero min-h-[90vh] flex items-center">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${heroIllustration})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cl-amber/30 bg-cl-amber/10 px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4 text-cl-amber" />
            <span className="text-sm font-medium text-cl-amber-light">
              Your coding journey starts here
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          >
            Learn to code.{" "}
            <span className="text-gradient-brand">Build real things.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl"
          >
            A structured learning platform that takes you from complete beginner to confident builder — step by step, project by project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="group inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 font-display text-base font-semibold text-secondary-foreground transition-all hover:brightness-110 hover:shadow-lg">
              Start Learning Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-4 font-display text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              View Roadmap
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-sm text-primary-foreground/50"
          >
            <span>✓ No experience needed</span>
            <span>✓ Project-based</span>
            <span>✓ Guided path</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
