import { Code2 } from "lucide-react";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  status: "active" | "completed";
  logs: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "Backend Engineer & Systems Integrator",
    company: "Millensys",
    period: "DEC 2022 — PRESENT",
    status: "active",
    logs: [
      "Architected and optimized complex SQL Server stored procedures, functions, and data migration pipelines for enterprise healthcare systems.",
      "Designed and maintained database schemas supporting HIS-RIS-PACS integration across multi-facility deployments.",
      "Built and tested RESTful API integrations (POSTMAN) for HL7, E-Claims, SMS gateways, SAP, and cross-system data flows.",
      "Automated report generation pipelines using FRX (Fast Reporting) with dynamic SQL queries.",
      "Deployed and managed web applications on IIS servers with Windows Server infrastructure.",
      "Led system-to-system integration projects ensuring zero-downtime migrations and data consistency.",
    ],
  },
  {
    role: "Field Service Engineer",
    company: "DEKA Egypt",
    period: "APR 2022 — DEC 2022",
    status: "completed",
    logs: [
      "Managed installation and maintenance lifecycle for precision medical hardware systems.",
      "Developed diagnostic procedures and troubleshooting protocols for embedded systems.",
    ],
  },
  {
    role: "Clinical Engineer & DB Administrator",
    company: "Civilian Workers Military Hospital",
    period: "APR 2021 — APR 2022",
    status: "completed",
    logs: [
      "Designed and maintained pharmacy database management system for inventory and dispensation tracking.",
      "Managed ICU and Radiology equipment data systems with uptime requirements.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-label text-sm">QUERY LOG — EXPERIENCE</h2>
        </div>

        <div className="space-y-1">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card-depth p-5 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  {exp.status === "active" && <span className="status-dot" />}
                  {exp.status === "completed" && (
                    <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground" />
                  )}
                  <div>
                    <h3 className="text-foreground font-semibold text-sm">{exp.role}</h3>
                    <p className="text-muted-foreground text-xs font-mono">{exp.company}</p>
                  </div>
                </div>
                <span className="text-muted-foreground text-xs font-mono">{exp.period}</span>
              </div>

              <div className="pl-5 border-l border-border/50 space-y-2">
                {exp.logs.map((log, j) => (
                  <div key={j} className="flex gap-2 text-xs">
                    <span className="text-primary font-mono shrink-0">→</span>
                    <span className="text-muted-foreground leading-relaxed">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
