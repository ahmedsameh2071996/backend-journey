import { BookOpen, Award } from "lucide-react";

const certifications = [
  { name: "DEPI Full Stack .NET Web Development", org: "DEPI" },
  { name: "Andalusia Academy .NET Full Stack", org: "Andalusia" },
  { name: "SQL Server — Implementing & Developing Objects", org: "Mahara Tech / ITI" },
  { name: "Python for Data Science, AI & Development", org: "Coursera" },
  { name: "Machine Learning & Data Science Track", org: "NTI" },
  { name: "Deep Learning for Computer Vision", org: "NTI" },
  { name: "Data Analysis — Beginner & Professional", org: "FWD / Udacity" },
  { name: "Networking Fundamentals", org: "Mahara Tech" },
];

const TrainingSection = () => {
  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-label text-sm">CERTIFICATIONS & TRAINING</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card-depth p-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <Award className="w-4 h-4 text-primary mb-2" />
              <p className="text-foreground text-sm font-medium leading-snug mb-1">{cert.name}</p>
              <p className="text-muted-foreground text-xs font-mono">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
