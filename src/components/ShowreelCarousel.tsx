import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllShowreels, type ShowreelItem } from "@/lib/showreel-storage";

const ShowreelCarousel = () => {
  const [reels] = useState(getAllShowreels);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardW = scrollRef.current.querySelector("div")?.offsetWidth || 280;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardW - 16 : cardW + 16,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </p>
          <h2 className="text-4xl font-black text-foreground md:text-5xl">
            Showreel
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 md:left-6"
          aria-label="Previous"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 md:right-6"
          aria-label="Next"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory md:px-[max(1rem,calc((100vw-80rem)/2+1rem))]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-[220px] flex-shrink-0 snap-start sm:w-[260px]"
            >
              <div className="group relative overflow-hidden rounded-[20px] bg-secondary">
                <img
                  src={reel.thumbnail}
                  alt={reel.brand}
                  className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
                {/* Brand name */}
                <span className="absolute left-4 top-4 text-sm font-bold text-primary-foreground drop-shadow-md">
                  {reel.brand}
                </span>
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {reel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowreelCarousel;
