import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="card-depth p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-primary mb-1">GET /contact</p>
            <p className="text-muted-foreground text-sm">
              Open to backend engineering, database, and systems integration roles.
            </p>
          </div>
          <a
            href="mailto:ahmedsameh2071996@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-medium hover:brightness-110 transition-all"
          >
            <Send className="w-4 h-4" />
            Send Request
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} Ahmed Sameh Mohamed — Built with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
