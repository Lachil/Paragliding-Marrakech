// components/RatingBadges.tsx
import React from "react";

type Badge = {
  name: "Google" | "Tripadvisor" | "Trustpilot";
  rating: number; // z.B. 4.9
  reviewsText: string; // z.B. "Based on 800+ reviews"
  variant?: "dark" | "light";
};

const StarRow = ({
  count = 5,
  fill = 5,
  colorClass = "text-amber-400",
}: {
  count?: number;
  fill?: number; // 0..5
  colorClass?: string;
}) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => {
        const filled = i < Math.round(fill);
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${filled ? colorClass : "text-white/30"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
};

const TrustpilotIcon = () => (
  <div className="flex items-center gap-1">
    <span className="text-emerald-400">★</span>
    <span className="text-sm font-semibold text-white">Trustpilot</span>
  </div>
);

const GoogleIcon = () => (
  <div className="text-sm font-semibold text-white">Google</div>
);

const TripadvisorIcon = () => (
  <div className="text-sm font-semibold text-white">Tripadvisor</div>
);

const BadgeCard = ({ b }: { b: Badge }) => {
  const isTrustpilot = b.name === "Trustpilot";

  return (
    <div className="rounded-2xl bg-black/55 px-4 py-3 backdrop-blur-md ring-1 ring-white/10">
      <div className="flex items-center gap-2">
        {b.name === "Google" && <GoogleIcon />}
        {b.name === "Tripadvisor" && <TripadvisorIcon />}
        {b.name === "Trustpilot" && <TrustpilotIcon />}
      </div>

      <div className="mt-1 flex items-center gap-2">
        {isTrustpilot ? (
          <div className="flex items-center gap-1">
            {/* Trustpilot-style: 5 grüne Blöcke */}
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex h-4 w-4 items-center justify-center rounded bg-emerald-500 text-[10px] font-bold text-white"
              >
                ★
              </span>
            ))}
          </div>
        ) : (
          <StarRow fill={b.rating} />
        )}
      </div>

      <div className="mt-1 text-xs text-white/80">
        {isTrustpilot ? (
          <>
            <div className="font-medium text-white/90">
              TrustScore {b.rating.toFixed(1)}
            </div>
            <div>{b.reviewsText}</div>
          </>
        ) : (
          <div>{b.reviewsText}</div>
        )}
      </div>
    </div>
  );
};

export default function RatingBadges({
  className = "",
  google,
  tripadvisor,
  trustpilot,
}: {
  className?: string;
  google?: Omit<Badge, "name">;
  tripadvisor?: Omit<Badge, "name">;
  trustpilot?: Omit<Badge, "name">;
}) {
  const data: Badge[] = [
    ...(google ? [{ name: "Google" as const, ...google }] : []),
    ...(tripadvisor ? [{ name: "Tripadvisor" as const, ...tripadvisor }] : []),
    ...(trustpilot ? [{ name: "Trustpilot" as const, ...trustpilot }] : []),
  ];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {data.map((b) => (
        <BadgeCard key={b.name} b={b} />
      ))}
    </div>
  );
}
