import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import influencerImg from "@/assets/influencer-marketing.jpg";
import aiVideoImg from "@/assets/ai-video.jpg";
import realShopImg from "@/assets/real-shop-video.jpg";

const services = [
  {
    img: influencerImg,
    title: "Influencer\nMarketing",
    desc: "We connect your brand with trusted local creators who drive real engagement and footfall.",
    alt: "Indian influencer creating content",
  },
  {
    img: aiVideoImg,
    title: "AI Video\n& Animation",
    desc: "Professional-quality promotional content powered by AI — at a fraction of traditional costs.",
    alt: "AI video editing on laptop",
  },
  {
    img: realShopImg,
    title: "Real Shop\nVideos",
    desc: "Authentic behind-the-scenes footage of your business that builds instant trust with viewers.",
    alt: "Videographer filming in local shop",
  },
];

const ServiceCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth || 400;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth - 24 : cardWidth + 24,
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
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What we do
            </p>
            <h2 className="text-4xl font-black text-foreground md:text-5xl">
              Our Services
            </h2>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory md:px-[max(1rem,calc((100vw-80rem)/2+1rem))]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-[85vw] flex-shrink-0 snap-start sm:w-[420px]"
          >
            <Link to="/services" className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-[hsl(0,0%,96%)] p-8 pb-0 transition-all duration-500 hover:bg-[hsl(0,0%,92%)]">
                {/* Title */}
                <h3
                  className="mb-8 text-3xl font-black italic leading-[1.1] text-[hsl(0,0%,10%)] md:text-4xl"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  {service.title.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < service.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Image */}
                <div className="relative mx-auto flex h-[280px] items-end justify-center overflow-hidden sm:h-[320px]">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="h-full w-[85%] rounded-t-2xl object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Floating stat badge */}
                  <div className="absolute bottom-4 right-4 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
                    {i === 0 ? "100+ Creators" : i === 1 ? "AI Powered" : "Real Footage"}
                  </div>
                </div>
              </div>
              {/* Description below card */}
              <p className="mt-4 px-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile arrows */}
      <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
        <button
          onClick={() => scroll("left")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
          aria-label="Previous"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
          aria-label="Next"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default ServiceCarousel;
