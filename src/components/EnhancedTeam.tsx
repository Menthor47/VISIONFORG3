import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin?: string;
};

const team: Member[] = [
  {
    name: "Alex Rivera",
    role: "Lead Engineer",
    photo: "/team/alex.webp",
    bio: "10 + years building scalable front-end architectures at Fortune 500s.",
    linkedin: "https://linkedin.com/in/alexrivera",
  },
  {
    name: "Mira Chen",
    role: "Product Designer",
    photo: "/team/mira.webp",
    bio: "Specialises in data-driven UX for SaaS. Speaker at Figma Config 2024.",
  },
  // …
];

export default function EnhancedTeam() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="mb-12 text-center text-3xl font-extrabold text-white">
        Meet the Squad
      </h2>

      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <li key={m.name}>
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="group w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-0"
                >
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-64 w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="p-4 text-left">
                    <p className="text-lg font-semibold text-white">{m.name}</p>
                    <p className="text-sm text-white/70">{m.role}</p>
                  </div>
                </motion.button>
              </DialogTrigger>

              <DialogContent className="max-w-md bg-black text-left text-white">
                <h3 className="mb-2 text-2xl font-bold">{m.name}</h3>
                <p className="mb-4 text-cyan-400">{m.role}</p>
                <p className="mb-6 leading-relaxed">{m.bio}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                  >
                    <Linkedin size={18} /> Connect on LinkedIn
                  </a>
                )}
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ul>
    </section>
  );
}
