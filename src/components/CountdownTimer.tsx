import React from "react";

interface CountdownProps {
  targetDate: string;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400/60">Menuju Hari Bahagia</p>
      <div className="flex items-center gap-3 sm:gap-5">
        {units.map((u, i) => (
          <React.Fragment key={u.label}>
            <div className="flex flex-col items-center gap-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-xl">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
                  {pad(u.value)}
                </span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-pink-400/60">{u.label}</span>
            </div>
            {i < units.length - 1 && (
              <span className="text-pink-500/40 text-2xl font-bold mb-4">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
