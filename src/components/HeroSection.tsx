import { Terminal, Database, Server, Mail, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";
import profileImg from "@/assets/ahmed-profile.jpeg";

const HeroSection = () => {
  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Status bar */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
          <span className="status-dot" />
          <span className="font-mono text-sm text-primary">AVAILABLE FOR HIRE</span>
          <span className="text-muted-foreground font-mono text-xs">// Cairo, Egypt</span>
        </div>

        {/* Main heading */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-3">
            System Architect &<br />Backend Engineer<span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            Specializing in relational databases, enterprise system integrations, and 
            high-availability backend architectures. Currently optimizing for Backend / Database Engineering roles.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Instance */}
          <div className="card-depth p-5">
            <div className="text-label mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> INSTANCE
            </div>
            <div className="flex items-start gap-4">
              <img
                src={profileImg}
                alt="Ahmed Sameh Mohamed"
                className="w-20 h-20 rounded-lg object-cover object-top shrink-0"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}
              />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Ahmed Sameh Mohamed</p>
                <p className="text-muted-foreground text-xs font-mono">Biomedical Eng. → Software Eng.</p>
                <p className="text-muted-foreground text-xs font-mono mt-1">Helwan University — Excellent</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <ContactChip icon={<MapPin className="w-3 h-3" />} text="Cairo, EG" />
              <ContactChip icon={<Mail className="w-3 h-3" />} text="ahmedsameh2071996@gmail.com" href="mailto:ahmedsameh2071996@gmail.com" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <ContactChip icon={<Phone className="w-3 h-3" />} text="+201113975784" href="tel:+201113975784" />
              <ContactChip icon={<Linkedin className="w-3 h-3" />} text="LinkedIn" href="https://linkedin.com" />
            </div>
          </div>

          {/* Compute */}
          <div className="card-depth p-5">
            <div className="text-label mb-4 flex items-center gap-2">
              <Server className="w-3.5 h-3.5" /> COMPUTE
            </div>
            <div className="space-y-2.5">
              <SkillRow name="C# / .NET" detail="Full Stack Track — Production" />
              <SkillRow name="Python" detail="Data Science, AI & Automation" />
              <SkillRow name="JavaScript" detail="Web Apps & Integrations" />
              <SkillRow name="Bash / Shell" detail="Server Automation Scripts" />
              <SkillRow name="HTML / CSS" detail="Frontend Markup" />
            </div>
          </div>

          {/* Storage */}
          <div className="card-depth p-5">
            <div className="text-label mb-4 flex items-center gap-2">
              <Database className="w-3.5 h-3.5" /> STORAGE & INFRA
            </div>
            <div className="space-y-2.5">
              <SkillRow name="MS SQL Server" detail="Stored Procs, Migrations, Maintenance" />
              <SkillRow name="Oracle DB" detail="Administration & Queries" />
              <SkillRow name="IIS / Windows Server" detail="Deployment & Hosting" />
              <SkillRow name="VMware ESXi" detail="VM Management & Provisioning" />
              <SkillRow name="Linux" detail="CLI, Scripting, Server Ops" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillRow = ({ name, detail }: { name: string; detail: string }) => (
  <div className="flex justify-between items-start gap-2">
    <span className="text-foreground text-sm font-medium">{name}</span>
    <span className="text-muted-foreground text-xs font-mono text-right shrink-0">{detail}</span>
  </div>
);

const ContactChip = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => {
  const content = (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-mono hover:text-foreground transition-colors">
      {icon} {text}
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
};

export default HeroSection;
