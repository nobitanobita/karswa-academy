import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";

const levels = [
  {
    level: 1,
    title: "Foundations",
    subtitle: "Understand the basics",
    topics: ["What is programming", "How the internet works", "Your first lines of code"],
    unlocked: true,
    color: "border-cl-blue bg-cl-blue-light",
    dotColor: "bg-cl-blue",
  },
  {
    level: 2,
    title: "Website Basics",
    subtitle: "HTML, CSS & JavaScript",
    topics: ["Build page structure", "Style with CSS", "Add interactivity"],
    unlocked: true,
    color: "border-cl-green bg-cl-green-light",
    dotColor: "bg-cl-green",
  },
  {
    level: 3,
    title: "Java Programming",
    subtitle: "Logic & OOP",
    topics: ["Variables & control flow", "Object-oriented thinking", "Problem solving"],
    unlocked: false,
    color: "border-cl-amber bg-cl-amber/10",
    dotColor: "bg-cl-amber",
  },
  {
    level: 4,
    title: "Real Projects",
    subtitle: "Build your portfolio",
    topics: ["Portfolio website", "Management system", "Beginner applications"],
    unlocked: false,
    color: "border-cl-purple bg-cl-purple-light",
    dotColor: "bg-cl-purple",
  },
  {
    level: 5,
    title: "Advanced Builder",
    subtitle: "Full systems & capstone",
    topics: ["Full mini systems", "Real-world simulations", "Capstone project"],
    unlocked: false,
    color: "border-secondary bg-secondary/10",
    dotColor: "bg-secondary",
  },
];

const LearningPathSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Your learning roadmap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A clear path from zero to builder. No guessing what to learn next.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {levels.map((level, i) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-xl border-l-4 bg-card p-6 card-shadow transition-all hover:card-hover-shadow ${level.color.split(" ")[0]}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-primary-foreground ${level.dotColor}`}>
                      {level.level}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">{level.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-10">{level.subtitle}</p>
                  <ul className="mt-3 ml-10 space-y-1">
                    {level.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-accent" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                {!level.unlocked && (
                  <Lock className="h-5 w-5 text-muted-foreground/40 mt-1" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
