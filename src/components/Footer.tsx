import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <Code2 className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-display text-base font-bold text-foreground">CodeLearn</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 CodeLearn. Helping beginners become builders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
