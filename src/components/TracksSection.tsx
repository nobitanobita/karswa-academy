import { motion } from "framer-motion";
import { Globe, Code2, Boxes, Target } from "lucide-react";

const tracks = [
  {
    icon: Globe,
    title: "Web Development",
    description: "HTML, CSS, JavaScript — build websites from scratch",
    lessons: 24,
    projects: 5,
    color: "from-cl-blue/10 to-cl-blue/5",
    iconBg: "bg-cl-blue-light text-cl-blue",
  },
  {
    icon: Code2,
    title: "Java Programming",
    description: "Logic, OOP, and problem-solving with Java",
    lessons: 20,
    projects: 4,
    color: "from-cl-amber/10 to-cl-amber/5",
    iconBg: "bg-cl-amber/10 text-cl-amber",
  },
  {
    icon: Boxes,
    title: "Real Projects",
    description: "Portfolio sites, management apps, and more",
    lessons: 12,
    projects: 6,
    color: "from-cl-green/10 to-cl-green/5",
    iconBg: "bg-cl-green-light text-cl-green",
  },
  {
    icon: Target,
    title: "Placement Prep",
    description: "Practice problems and interview-ready skills",
    lessons: 15,
    projects: 3,
    color: "from-cl-purple/10 to-cl-purple/5",
    iconBg: "bg-cl-purple-light text-cl-purple",
  },
];

const TracksSection = () => {
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
            Learning tracks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Focused courses designed to take you from concept to creation.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl bg-gradient-to-b ${track.color} border border-border p-6 transition-all hover:card-hover-shadow hover:-translate-y-1 cursor-pointer`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${track.iconBg} mb-4`}>
                <track.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{track.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{track.description}</p>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span>{track.lessons} lessons</span>
                <span>{track.projects} projects</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
