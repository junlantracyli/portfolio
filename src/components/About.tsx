"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Card = {
  id: string;
  kind: "photo" | "quote";
  rotate: number;
  tapeRotate: number;
  x: string;
  y: string;
  photoSrc?: string;
  photoAlt?: string;
};

const initialCards: Card[] = [
  {
    id: "road-trip",
    kind: "photo",
    rotate: -6,
    tapeRotate: 4,
    x: "6%",
    y: "20%",
    photoSrc: "/about/photos/road-trip.jpg",
    photoAlt: "Road trip photo",
  },
  {
    id: "sunset",
    kind: "photo",
    rotate: 3,
    tapeRotate: -5,
    x: "32%",
    y: "8%",
    photoSrc: "/about/photos/sunset.jpg",
    photoAlt: "Hiking photo",
  },
  {
    id: "quote",
    kind: "quote",
    rotate: 4,
    tapeRotate: -3,
    x: "58%",
    y: "12%",
  },
  {
    id: "polaroid",
    kind: "photo",
    rotate: 5,
    tapeRotate: -4,
    x: "42%",
    y: "50%",
    photoSrc: "/about/photos/polaroid.jpg",
    photoAlt: "Postcard from Earth photo",
  },
];

function PhotoImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-current/10 to-current/[0.02]">
        <span className="label text-[10px] text-current/30">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="200px"
      className="object-cover"
      onError={() => setErrored(true)}
    />
  );
}

export default function About() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState(initialCards.map((card) => card.id));

  const bringToFront = (id: string) => {
    setOrder((current) => [...current.filter((cardId) => cardId !== id), id]);
  };

  return (
    <section id="about" className="scroll-mt-24 pt-4">
      <p className="label text-base text-current/45">About</p>
      <h2 className="mt-4 pb-2 text-6xl leading-[1.15] sm:text-7xl">
        Hello — I&rsquo;m Tracy.
      </h2>

      <div className="mt-6 flex max-w-3xl flex-col gap-4 text-2xl leading-relaxed text-current/70">
        <p>
          I design and engineer products that value your time as much as
          your attention. I&rsquo;m a big fan of simple systems and
          intentional details—if it&rsquo;s not intuitive, I&rsquo;m not
          finished yet.
        </p>
        <p>
          Off-clock, I&rsquo;m a music enthusiast, a professional-level road
          trip curator, and a firm believer that the best inspiration is
          found in the grainy details of a physical scrapbook.
        </p>
      </div>

      <motion.div
        ref={boardRef}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-current/10 bg-current/[0.03]"
      >
        <div className="dot-grid absolute inset-0" />

        {initialCards.map((card) => {
          const zIndex = order.indexOf(card.id) + 1;
          const dragProps = {
            drag: true as const,
            dragConstraints: boardRef,
            dragElastic: 0.15,
            dragMomentum: false,
            dragTransition: { bounceStiffness: 300, bounceDamping: 20 },
            onPointerDown: () => bringToFront(card.id),
            whileDrag: { scale: 1.05, boxShadow: "0 12px 32px rgba(0,0,0,0.35)" },
          };

          return (
            <motion.div
              key={card.id}
              {...dragProps}
              style={{ left: card.x, top: card.y, rotate: card.rotate, zIndex }}
              className="absolute cursor-grab select-none active:cursor-grabbing"
            >
              <div className="relative">
                {/* tape */}
                <div
                  className="absolute left-1/2 -top-3 h-6 w-14 -translate-x-1/2 bg-[#c9c2b0]/70 shadow-sm"
                  style={{ rotate: `${card.tapeRotate}deg` }}
                />

                {card.kind === "photo" ? (
                  <div className="w-36 rounded-sm bg-white p-2 pb-6 shadow-lg sm:w-40">
                    <div className="relative h-32 w-full overflow-hidden bg-black/5 sm:h-36">
                      <PhotoImage
                        src={card.photoSrc!}
                        alt={card.photoAlt ?? ""}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-56 rounded-sm bg-[#f7ecdf] p-4 shadow-lg light:bg-white">
                    <p className="font-serif text-lg italic text-black/80">
                      &ldquo;Leave no stone unturned.&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        <span className="label absolute bottom-4 right-5 text-sm text-current/30">
          Try moving things
        </span>
      </motion.div>
    </section>
  );
}
