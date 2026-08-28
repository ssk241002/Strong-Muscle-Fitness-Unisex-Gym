import { useState } from "react";
import { 
  Camera, 
  ExternalLink, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Sparkles,
  Receipt,
  ArrowUpRight
} from "lucide-react";
import { GALLERY_ITEMS, GYM_DETAILS, PhotoItem } from "../data/gymData";

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Trainers & Members", "Floor & Equipment", "Strength Zone", "Cardio", "Atmosphere"];

  const filteredItems = filter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedPhoto(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedPhoto(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-900/40 border-t border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Gym Floor & Equipment</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Take a Virtual Tour of Strong Muscle Fitness
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-300">
              Browse our spacious gym floor, heavy-duty weight stations, cardio machines, and authentic photos verified on Google Maps.
            </p>
          </div>

          {/* Direct Google Maps link */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://maps.app.goo.gl/L5qnM4URKzdmHEXf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-neutral-950 text-xs sm:text-sm font-bold transition-all shadow-sm"
            >
              <Receipt className="w-4 h-4" />
              <span>View Official Price Card on Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={GYM_DETAILS.primaryMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold border border-neutral-700 transition-colors"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Google Maps Photos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === cat
                  ? "bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-neutral-850 hover:bg-neutral-800 text-neutral-300 border border-neutral-750"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 cursor-pointer shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-neutral-700">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-lg bg-neutral-950/80 text-white backdrop-blur-md border border-neutral-700">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption & Map link on card */}
                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {item.caption}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between text-[11px] text-amber-400 font-medium">
                    <span>Tap to expand</span>
                    <span className="flex items-center gap-1">
                      Maps View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Maps Showcase Links Card */}
        <div className="mt-12 rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Verified Google Maps Photo Streams</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Explore Direct Google Maps Street & Photo Links
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Click any direct link to view real member photos, equipment uploads, and the official price card directly on Google Maps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-neutral-800">
            {GYM_DETAILS.allMapsUrls.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-amber-500/40 hover:bg-neutral-850 flex items-center justify-between text-xs text-neutral-200 transition-all group"
              >
                <span className="font-medium truncate mr-2 group-hover:text-amber-400">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-700 hover:bg-neutral-800 transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-all hidden sm:flex"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-all hidden sm:flex"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            {/* Modal Image */}
            <div className="relative max-h-[60vh] sm:max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                    {selectedPhoto.category}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {selectedPhoto.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selectedPhoto.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold shadow-md transition-colors"
                >
                  <span>Open on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
