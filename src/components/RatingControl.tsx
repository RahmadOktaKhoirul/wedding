// Static Netflix-style "Match Score" badge — always shows 100% match
export default function RatingControl() {
  return (
    <div className="flex items-center gap-2">
      {/* Match percentage pill */}
      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-green-500/40 rounded-full px-3 py-1">
        <span className="text-green-400 font-black text-sm leading-none">100%</span>
        <span className="text-[10px] text-green-300/70 font-mono uppercase tracking-wide leading-none">Match</span>
      </div>
    </div>
  );
}
