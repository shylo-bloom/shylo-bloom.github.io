import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { mediaByIndex } from '../media';

const EmblaCarousel = ({ slides, info }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides &&
            info &&
            slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image  
                      src={mediaByIndex(index)}
                      className="embla__slide__img"
                      objectFit={"contain"}
                      layout='fill'
                      alt={`Shylo Bloom - Harvest Image`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <audio className="music__player" controls>
        <source src="" type="audio/mp3"></source>
      </audio>
    </div>
  );
};

export default EmblaCarousel;
