import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import carouselImg1 from "../../assets/images/carousel-section/carousel1.webp";
import carouselImg2 from "../../assets/images/carousel-section/carousel2.webp";
import carouselImg3 from "../../assets/images/carousel-section/carousel3.webp";
import carouselImg4 from "../../assets/images/carousel-section/carousel4.webp";
import carouselImg5 from "../../assets/images/carousel-section/carousel5.webp";

export const HomePageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="bg-[#FCF8F3] py-11 my-14 max-w-[1920px] mx-auto">
      <div className="flex flex-col-reverse items-center gap-10 mx-4 md:flex-row xsm:mx-8 max-w-screen-2xl 2xl:mx-auto">
        <div className="max-w-md max-md:mr-auto">
          <h3 className="mb-2 text-2xl lg:text-4xl font-bold text-[#3A3A3A]">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="text-sm lg:text-base mb-6 font-medium text-[#616161]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <a
            href="/shop"
            className="inline-block px-6 lg:px-8 py-3 lg:py-4 hover:bg-[#ddad3d] rounded ease-linear duration-300 text-white bg-[#B88E2F]"
          >
            Explore More
          </a>
        </div>

        <div className="relative overflow-hidden embla" ref={emblaRef}>
          <div className="flex gap-6 embla__container">
            <div className="min-w-0 lg:max-w-[400px] max-w-[320px] flex-[0_0_80%] lg:flex-[0_0_45%] embla__slide">
              <img src={carouselImg1} className="w-full" />
              <div className="absolute p-5 xsm:p-8 bottom-6 left-6 rounded backdrop-blur bg-[#FFFFFFB8] w-max">
                <p className="text-sm xsm:text-base text-[#616161]">
                  01{" "}
                  <span className="after:content-[''] after:w-6 xsm:after:w-8 after:absolute relative after:-translate-y-1/2 after:right-1/2 after:translate-x-1/2 after:top-1/2 mr-5 mx-4 xsm:mx-6 xsm:mr-7 after:h-[2px] after:bg-[#616161]"></span>{" "}
                  Bed Room
                </p>
                <p className="mt-2 text-lg xsm:text-2xl font-semibold text-[#3A3A3A]">
                  Inner Peace
                </p>
              </div>
            </div>

            <div className="min-w-0 lg:max-w-[400px] max-w-[320px] flex-[0_0_80%] lg:flex-[0_0_45%] embla__slide">
              <img src={carouselImg2} className="w-full" />
            </div>

            <div className="min-w-0 lg:max-w-[400px] max-w-[320px] flex-[0_0_80%] lg:flex-[0_0_45%] embla__slide">
              <img src={carouselImg3} className="w-full" />
            </div>

            <div className="min-w-0 lg:max-w-[400px] max-w-[320px] flex-[0_0_80%] lg:flex-[0_0_45%] embla__slide">
              <img src={carouselImg4} className="w-full" />
            </div>

            <div className="min-w-0 mr-6 lg:max-w-[400px] max-w-[320px] flex-[0_0_80%] lg:flex-[0_0_45%] embla__slide">
              <img src={carouselImg5} className="w-full" />
            </div>
          </div>

          <div className="embla__controls">
            <div className="embla__buttons">
              <button
                className="flex absolute -translate-y-1/2 z-20 top-1/2 left-5 items-center justify-center w-10 h-10 xsm:w-12 xsm:h-12 rounded-full text-[#B88E2F] shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.2)] bg-white  cursor-pointer embla__prev"
                onClick={scrollPrev}
              >
                <svg
                  className="w-5 xsm:w-6 embla__button__svg"
                  viewBox="0 0 532 532"
                >
                  <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0A5994246.277 5994246.277 0 00126.328 291.2a35.065 35.065 0 01-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354z"
                  />
                </svg>
              </button>
              <button
                className="flex absolute -translate-y-1/2 z-20 top-1/2 right-5 items-center justify-center w-10 h-10 xsm:w-12 xsm:h-12 rounded-full text-[#B88E2F] shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.2)] bg-white  cursor-pointer embla__next"
                onClick={scrollNext}
              >
                <svg
                  className="w-5 xsm:w-6 embla__button__svg"
                  viewBox="0 0 532 532"
                >
                  <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454A35.065 35.065 0 01416 265.927c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52z"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 flex flex-wrap items-center justify-end right-1/3 embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot after:content-[''] after:w-[10px] after:h-[10px] xsm:after:w-3 xsm:after:h-3 after:rounded-full after:flex after:items-center after:bg-[#B88E2F] appearance-none bg-transparent touch-manipulation cursor-pointer outline-2 w-5 h-5 xsm:w-7 xsm:h-7 flex justify-center items-center rounded-full".concat(
                    index === selectedIndex
                      ? " embla__dot--selected border-[#B88E2F] border"
                      : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
