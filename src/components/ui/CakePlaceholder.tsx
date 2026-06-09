interface CakePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

const cakeIllustrations = [
  // Tiered cake
  (
    <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-40">
      <ellipse cx="60" cy="115" rx="40" ry="8" fill="#B89D84" opacity="0.3"/>
      <rect x="20" y="90" width="80" height="25" rx="4" fill="#E6DDD3"/>
      <rect x="30" y="60" width="60" height="32" rx="4" fill="#F2ECE4"/>
      <rect x="40" y="35" width="40" height="27" rx="4" fill="#E6DDD3"/>
      <ellipse cx="60" cy="35" rx="20" ry="5" fill="#D4C4B0"/>
      <ellipse cx="60" cy="60" rx="30" ry="6" fill="#D4C4B0"/>
      <ellipse cx="60" cy="90" rx="40" ry="7" fill="#C8B49E"/>
      <circle cx="60" cy="28" r="5" fill="#B89D84"/>
      <rect x="58" y="10" width="4" height="18" fill="#B89D84"/>
      <path d="M55 18 Q60 8 65 18" stroke="#B89D84" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  // Cupcake
  (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-40">
      <path d="M25 70 Q20 90 30 100 H70 Q80 90 75 70 Z" fill="#E6DDD3"/>
      <path d="M25 70 L30 50 Q35 48 50 48 Q65 48 70 50 L75 70 Z" fill="#D4C4B0"/>
      <path d="M30 50 Q40 20 50 15 Q60 20 70 50" fill="none" stroke="#B89D84" strokeWidth="2"/>
      <ellipse cx="50" cy="50" rx="20" ry="6" fill="#C8B49E"/>
      <path d="M35 45 Q40 25 50 20 Q60 25 65 45" fill="#F2ECE4" opacity="0.7"/>
      <circle cx="50" cy="18" r="4" fill="#B89D84"/>
    </svg>
  ),
  // Round cake with flowers
  (
    <svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-40">
      <ellipse cx="60" cy="95" rx="42" ry="8" fill="#B89D84" opacity="0.25"/>
      <rect x="18" y="65" width="84" height="30" rx="6" fill="#E6DDD3"/>
      <ellipse cx="60" cy="65" rx="42" ry="10" fill="#D4C4B0"/>
      <ellipse cx="60" cy="55" rx="38" ry="9" fill="#F2ECE4"/>
      <rect x="22" y="30" width="76" height="26" rx="6" fill="#F2ECE4"/>
      <ellipse cx="60" cy="30" rx="38" ry="9" fill="#E6DDD3"/>
      <circle cx="45" cy="25" r="6" fill="#B89D84" opacity="0.6"/>
      <circle cx="60" cy="20" r="7" fill="#C8B49E" opacity="0.7"/>
      <circle cx="75" cy="25" r="6" fill="#B89D84" opacity="0.6"/>
      <circle cx="45" cy="25" r="3" fill="#4F4338" opacity="0.3"/>
      <circle cx="60" cy="20" r="3" fill="#4F4338" opacity="0.3"/>
      <circle cx="75" cy="25" r="3" fill="#4F4338" opacity="0.3"/>
    </svg>
  ),
  // Macaron stack
  (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-40">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${i * 25})`}>
          <ellipse cx="50" cy="15" rx="28" ry="9" fill="#E6DDD3"/>
          <rect x="22" y="15" width="56" height="8" fill="#D4C4B0"/>
          <ellipse cx="50" cy="23" rx="28" ry="9" fill="#C8B49E"/>
        </g>
      ))}
    </svg>
  ),
];

export default function CakePlaceholder({ label, className = "", aspectRatio = "square" }: CakePlaceholderProps) {
  const illustration = cakeIllustrations[Math.floor(Math.random() * cakeIllustrations.length)];
  const aspectClass = aspectRatio === "portrait" ? "aspect-[3/4]" : aspectRatio === "landscape" ? "aspect-[4/3]" : "aspect-square";

  return (
    <div className={`cake-placeholder ${aspectClass} flex-col gap-3 ${className}`}>
      {illustration}
      {label && (
        <p className="text-xs text-taupe/60 font-sans tracking-wide text-center px-4">{label}</p>
      )}
    </div>
  );
}
