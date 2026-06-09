interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`${alignClass} ${className}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="section-heading mb-4">{heading}</h2>
      {subheading && (
        <p className={`text-taupe/70 text-base leading-relaxed ${align === "center" ? "max-w-xl mx-auto" : "max-w-xl"}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
