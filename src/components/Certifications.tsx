import { certifications } from "@/data/Certifications";
import { CheckCircle2, Clock } from "lucide-react";

function Certifications() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <div className="flex flex-col gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors"
            >
              {cert.status === "completed" ? (
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
              ) : (
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="text-base font-medium">{cert.name}</p>
                <span
                  className={`text-xs mt-1 inline-block px-2 py-1 rounded ${
                    cert.status === "completed"
                      ? "bg-teal-400/20 text-teal-400"
                      : "bg-yellow-400/20 text-yellow-400"
                  }`}
                >
                  {cert.status === "completed" ? "Completed" : "In Progress"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;

