import { certifications } from "@/data/Certifications";
import { CheckCircle2, Clock } from "lucide-react";

function Certifications() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Certifications</h2>
        <div className="flex flex-col gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-3 p-4 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-700"
            >
              {cert.status === "completed" ? (
                <CheckCircle2 className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
              ) : (
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="text-base font-medium text-black dark:text-white">{cert.name}</p>
                <span
                  className={`text-xs mt-1 inline-block px-2 py-1 rounded border ${
                    cert.status === "completed"
                      ? "bg-black/10 dark:bg-white/10 text-black dark:text-white border-black/20 dark:border-white/20"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
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

