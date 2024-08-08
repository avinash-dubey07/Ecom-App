"use client";
import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const HomePage = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let slideInterval;

    const startAutoSlide = () => {
      slideInterval = setInterval(() => {
        if (carousel) {
          const active = carousel.querySelector(".carousel-item.active");
          const next =
            active.nextElementSibling ||
            carousel.querySelector(".carousel-item:first-child");
          active.classList.remove("active");
          next.classList.add("active");
        }
      }, 3000);
    };

    const stopAutoSlide = () => {
      clearInterval(slideInterval);
    };

    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleNext = () => {
    const carousel = carouselRef.current;
    const active = carousel.querySelector(".carousel-item.active");
    const next =
      active.nextElementSibling ||
      carousel.querySelector(".carousel-item:first-child");
    active.classList.remove("active");
    next.classList.add("active");
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    const active = carousel.querySelector(".carousel-item.active");
    const prev =
      active.previousElementSibling ||
      carousel.querySelector(".carousel-item:last-child");
    active.classList.remove("active");
    prev.classList.add("active");
  };

  return (
    <>
      <div className="container">
        <div className="relative">
          <div className="carousel" ref={carouselRef}>
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg"
                className="w-full h-full object-cover"
                alt="Image 1"
              />
              <div className="text-overlay">
                <h2 className="text-7xl font-bold">
                  Where Fun Meets Fashion 🔥
                </h2>
                <p className="text-3xl font-serif mt-2">
                  Exclusive collection for everyone.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg"
                className="w-full h-full object-cover"
                alt="Image 2"
              />
              <div className="text-overlay">
                <h2 className="text-7xl font-bold">
                  A Day For The Shopaholics 🔥
                </h2>
                <p className="text-3xl font-serif mt-2">
                  Enjoy your shopping experience with us.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20240705/pngtree-large-empty-shopping-cart-on-blue-background-image_15976525.jpg"
                className="w-full h-full object-cover"
                alt="Image 3"
              />
              <div className="text-overlay">
                <h2 className="text-7xl font-bold">Shopping That Matters🔥</h2>
                <p className="text-3xl font-serif mt-2">
                  Treat a little fun to yourself.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute inset-y-1/2 left-4 transform -translate-y-1/2 btn btn-circle z-10"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute inset-y-1/2 right-4 transform -translate-y-1/2 btn btn-circle z-10"
          >
            ❯
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between ml-[290px] -mt-16">
          <div>
            <h2 className="font-extrabold text-blue-600 text-4xl">
              Discover more. Good things are waiting for you
            </h2>
          </div>
          <div className="mr-[250px] justify-between">
            <button className="rounded-full text-3xl border-b-8">
              {" "}
              <GoArrowLeft />{" "}
            </button>
            <button className="rounded-full text-3xl border-b-8">
              {" "}
              <GoArrowRight />{" "}
            </button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default HomePage;
