import { useState } from "react";
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink, 
  Sparkles,
  Quote,
  ThumbsUp
} from "lucide-react";
import { REVIEWS_DATA, GYM_DETAILS } from "../data/gymData";

export function ReviewsSection() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = ["All", "Trainer & Atmosphere", "Women Friendly & Safe", "Heavy Equipment", "Location & Facilities", "Fat Loss & Results"];

  const filteredReviews = selectedTag === "All"
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.tag === selectedTag);

  return (
    <section id="reviews" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Real Member Feedback</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by 44+ Fitness Enthusiasts in Chennai
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-300">
              Read what our members say about our coaching quality, unisex safety, clean atmosphere, and heavy-duty strength equipment.
            </p>
          </div>

          {/* Overall Rating Badge Card */}
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">4.8</div>
              <div className="flex items-center text-amber-400 text-xs justify-center mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>

            <div className="border-l border-neutral-800 pl-4 text-xs space-y-0.5">
              <div className="font-bold text-white">Google Rating</div>
              <div className="text-neutral-400">44+ Verified Reviews</div>
              <a
                href={GYM_DETAILS.primaryMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold pt-1"
              >
                <span>View Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedTag === tag
                  ? "bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-all shadow-md"
            >
              <div className="space-y-3">
                {/* Header with stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(review.rating) ? "fill-amber-400" : "fill-neutral-700 text-neutral-700"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {review.tag}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{review.author}</div>
                    <div className="text-[10px] text-neutral-400">{review.date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action card */}
        <div className="mt-12 text-center">
          <a
            href={GYM_DETAILS.primaryMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 text-neutral-200 hover:text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Read All 44+ Reviews or Leave a Review on Google</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
