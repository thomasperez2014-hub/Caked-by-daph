"use client";

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, onRate, size = "md" }: StarRatingProps) {
  const sizeClass = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate?.(star)}
          className={`${sizeClass} transition-transform hover:scale-110 ${onRate ? "cursor-pointer" : "cursor-default"}`}
          aria-label={`${star} star${star !== 1 ? "s" : ""}`}
        >
          <span className={star <= rating ? "text-accent" : "text-border"}>★</span>
        </button>
      ))}
    </div>
  );
}
