// components/TrustpilotSection.tsx
// Works in App Router. No client-only APIs inside, so it can be rendered server-side.
// TailwindCSS required.

type Badge = "Invited" | "Verified";

type Review = {
  name: string;
  dateLabel: string; // e.g., "October 21"
  title: string;
  text: string;
  stars: number;
  badge?: Badge;
  reply?: {
    by: string;       // e.g., "Bookatrekking.com"
    dateLabel: string; // e.g., "September 12"
  };
};

type Props = {
  heading?: string;               // default: "REVIEWS"
  trustpilotBrand?: string;       // default: "Trustpilot"
  verdict?: "Excellent" | "Great" | "Average" | "Poor" | string;
  rating: number;                 // e.g., 4.4
  reviewsCount: number;           // e.g., 1666
  trustpilotLink: string;         // link to your Trustpilot page
  reviews: Review[];
};

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${i < full ? "text-emerald-500" : "text-emerald-200"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.62L12 2 10.19 8.62 3 9.24l4.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function TrustpilotSection({
  heading = "REVIEWS",
  trustpilotBrand = "Trustpilot",
  verdict = "Excellent",
  rating,
  reviewsCount,
  trustpilotLink,
  reviews,
}: Props) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">{heading}</h2>

          <div className="mt-2 flex flex-col items-center  sm:flex-col sm:justify-center ">
            <div className="flex flex-col items-center sm:flex-col sm:items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">{verdict}</span>
                  <img
    src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/stars-5_1.svg?v=1761921983"
    alt="Trustpilot"
    className="h-5"
  />
              </div>
             <div> <br></br></div>
              <p className="text-slate-600 mt-2 sm:mt-0 ">
                Rated <span className="font-semibold">{rating.toFixed(1)} / 5</span> based on{" "}
                <a href={trustpilotLink} target="_blank" className="underline">
                  {reviewsCount.toLocaleString()} reviews
                </a>{" "}
                on{" "}
                <a href={trustpilotLink} target="_blank" className=" inline-flex items-center gap-1 font-medium">
                  {/* Trustpilot star mark */}
                  <img
    src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/png-transparent-trustpilot-logos-brands-in-colors-icon_ef4934f5-b453-49aa-84d7-24852a2d0927.png?v=1761852503"
    alt="Trustpilot"
    className="h-5 "
  />
                {trustpilotBrand}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <article
              key={`${r.name}-${idx}`}
              className="rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  {/* Stars + badge row */}
                  <div className="flex items-center gap-2">
                      <img
    src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/stars-5_1.svg?v=1761921983"
    alt="Trustpilot"
    className="h-5"
  />
                  </div>
                </div>

                {/* Author + date */}
                <div className="mt-3 text-sm text-slate-500">
                  <span className="font-medium text-slate-700">{r.name}</span>, {r.dateLabel}
                </div>

                {/* Title + text */}
                <h3 className="mt-2 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">{r.text}</p>

                {/* Reply box (optional) */}
                
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <a
            href={trustpilotLink}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-400"
          >
            Read more on Trustpilot
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
