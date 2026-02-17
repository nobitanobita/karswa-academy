import { motion } from "framer-motion";
import { BookOpen, Eye, PenTool, Layers, Rocket } from "lucide-react";

const stages = [
  {
    icon: BookOpen,
    title: "Understand",
    description: "Clear explanations in simple language",
    color: "bg-cl-blue-light text-cl-blue",
  },
  {
    icon: Eye,
    title: "See",
    description: "Practical visual examples",
    color: "bg-cl-green-light text-cl-green",
  },
  {
    icon: PenTool,
    title: "Practice",
    description: "Small guided exercises",
    color: "bg-cl-amber/10 text-cl-amber",
  },
  {
    icon: Layers,
    title: "Apply",
    description: "Build small features",
    color: "bg-cl-purple-light text-cl-purple",
  },
  {
    icon: Rocket,
    title: "Build",
    description: "Create real mini-projects",
    color: "bg-secondary/10 text-secondary",
  },
];

const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            How you'll learn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every lesson follows our 5-stage progression model — designed to build real understanding, not just memorization.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center md:flex-1"
            >
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border z-0" />
              )}
              <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${stage.color} mb-4`}>
                <stage.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{stage.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground max-w-[160px]">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
