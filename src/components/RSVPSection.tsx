import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { RSVPComment } from "../types";

interface RSVPSectionProps {
  guestName: string;
}

const INITIAL_COMMENTS: RSVPComment[] = [
  {
    name: "Ahmad Rifai",
    message: "Selamat menempuh hidup baru untuk kedua mempelai! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
    status: "Hadir",
    createdAt: new Date(Date.now() - 3600000 * 2),
  },
  {
    name: "Dimas & Sarah",
    message: "Happy wedding Tata & Renata! Semoga selalu diberikan kebahagiaan dan kelancaran sampai hari H.",
    status: "Hadir",
    createdAt: new Date(Date.now() - 3600000 * 5),
  },
  {
    name: "Budi Santoso",
    message: "Barakallahu lakum wa baraka alaikum wa jama'a bainakuma fi khair.",
    status: "Hadir",
    createdAt: new Date(Date.now() - 3600000 * 12),
  },
];

export const RSVPSection: React.FC<RSVPSectionProps> = ({ guestName }) => {
  const [comments, setComments] = useState<RSVPComment[]>(INITIAL_COMMENTS);
  const [name, setName] = useState(guestName || "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"Hadir" | "Tidak hadir" | "Masih ragu">("Hadir");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (guestName && !name) {
      setName(guestName);
    }
  }, [guestName]);

  // Firebase Realtime Listener with fallback
  useEffect(() => {
    try {
      const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const fetched = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })) as RSVPComment[];
            setComments(fetched);
          }
        },
        (error) => {
          console.warn("Firestore offline/fallback mode:", error);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Firebase not configured:", e);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFeedback("Mohon isi nama dan ucapan Anda.");
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const newComment: RSVPComment = {
      name: name.trim(),
      message: message.trim(),
      status,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "wishes"), {
        ...newComment,
        createdAt: serverTimestamp(),
      });
      setMessage("");
      setFeedback("Terima kasih atas doa dan ucapan Anda!");
    } catch (err) {
      // Fallback local memory
      setComments((prev) => [newComment, ...prev]);
      setMessage("");
      setFeedback("Terima kasih atas doa dan ucapan Anda!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  const countHadir = comments.filter((c) => c.status === "Hadir").length;
  const countTidakHadir = comments.filter((c) => c.status === "Tidak hadir").length;

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 bg-transparent text-center overflow-hidden">
      {/* Front Layer Flower Ornaments (z-20) */}
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Left Flipped"
        className="absolute z-20 top-12 -left-10 sm:-left-12 w-40 sm:w-52 opacity-90 pointer-events-none animate-float-left drop-shadow-md"
      />
      <img
        src="/assets/flower.webp"
        alt="Floral Decor Right"
        className="absolute z-20 top-12 -right-10 sm:-right-12 w-40 sm:w-52 opacity-90 pointer-events-none animate-float-right drop-shadow-md"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#853638] font-bold mb-2"
        >
          Wishes &amp; RSVP
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-xs sm:text-sm text-[#6B5048] mb-8"
        >
          Berikan ucapan harapan dan do’a kepada kedua mempelai
        </motion.p>

        {/* Attendance Counter Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-8 w-full"
        >
          <div className="flex-1 py-2.5 px-4 rounded-2xl bg-[#3D9A62]/20 border border-[#3D9A62]/35 backdrop-blur-sm flex items-center justify-center gap-2 text-[#24633E] shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#3D9A62]" />
            <span className="font-bold text-sm">{countHadir}</span>
            <span className="text-xs font-sans font-semibold">Hadir</span>
          </div>

          <div className="flex-1 py-2.5 px-4 rounded-2xl bg-[#D90A11]/20 border border-[#D90A11]/35 backdrop-blur-sm flex items-center justify-center gap-2 text-[#8F0C10] shadow-sm">
            <XCircle className="w-4 h-4 text-[#D90A11]" />
            <span className="font-bold text-sm">{countTidakHadir}</span>
            <span className="text-xs font-sans font-semibold">Tidak Hadir</span>
          </div>
        </motion.div>

        {/* Form Container with frosted glass */}
        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="w-full p-6 sm:p-8 rounded-3xl frosted-card flex flex-col gap-4 text-left mb-10"
        >
          {/* Name Input */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#853638] uppercase mb-1.5">
              Nama Anda
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/90 border border-[#C5A880]/40 text-[#4A2022] font-sans text-xs sm:text-sm focus:outline-none focus:border-[#853638]"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#853638] uppercase mb-1.5">
              Ucapan &amp; Doa
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan selamat & doa untuk mempelai..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/90 border border-[#C5A880]/40 text-[#4A2022] font-sans text-xs sm:text-sm focus:outline-none focus:border-[#853638] resize-none"
            />
          </div>

          {/* Attendance Selection */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#853638] uppercase mb-1.5">
              Konfirmasi Kehadiran
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F4EFE6]/90 border border-[#C5A880]/40 text-[#4A2022] font-sans text-xs sm:text-sm focus:outline-none focus:border-[#853638]"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak hadir">Tidak Hadir</option>
              <option value="Masih ragu">Masih Ragu</option>
            </select>
          </div>

          {feedback && (
            <p className="text-xs font-sans text-center text-[#853638] font-semibold py-1">
              {feedback}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#853638] hover:bg-[#682426] text-white font-cinzel text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? "Mengirim..." : "Kirim Ucapan"}</span>
          </button>
        </motion.form>

        {/* Comments Feed with frosted styling */}
        <div className="w-full flex flex-col gap-3.5 max-h-96 overflow-y-auto pr-1">
          {comments.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-2xl frosted-card-soft text-left flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#853638]">
                  {item.name}
                </span>

                <span
                  className={`text-[10px] font-sans font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                    item.status === "Hadir"
                      ? "bg-[#3D9A62]/20 text-[#24633E]"
                      : item.status === "Tidak hadir"
                      ? "bg-[#D90A11]/20 text-[#8F0C10]"
                      : "bg-[#D7A916]/20 text-[#8A6704]"
                  }`}
                >
                  {item.status === "Hadir" && <CheckCircle2 className="w-3 h-3" />}
                  {item.status === "Tidak hadir" && <XCircle className="w-3 h-3" />}
                  {item.status === "Masih ragu" && <HelpCircle className="w-3 h-3" />}
                  {item.status}
                </span>
              </div>

              <p className="font-sans text-xs text-[#5A383A] leading-relaxed">
                {item.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
