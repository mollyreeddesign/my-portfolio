"use client";
import React from "react";

type JamCardSceneProps = {
  hovered: boolean;
};

/**
 * Layered scene for the Jam card with absolute positioning.
 * Gives precise control over sizes, positions, stacking, and hover transforms.
 */
export default function JamCardScene({ hovered }: JamCardSceneProps) {
  return (
    <div className="absolute inset-0">
      <div className="relative w-full h-full">
        {/* Left stack */}
        <div className="absolute bottom-6 left-8 flex flex-col gap-0 z-[5]">
          <div className="relative w-[200px] h-[55px]">
            <div className="absolute inset-0 card-overlay-loop">
              <img
                src="/images/home-jam-card/ToDo1.png"
                alt=""
                className={`h-full w-full object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "-translate-x-[80px] scale-110" : "-translate-x-[20px]"}`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="relative w-[200px] h-[55px] -mt-1">
            <div className="absolute inset-0 card-overlay-loop">
              <img
                src="/images/home-jam-card/ToDo2.png"
                alt=""
                className={`h-full w-full object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "-translate-x-[80px] scale-110" : "-translate-x-[20px]"}`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="relative w-[200px] h-[55px] -mt-1">
            <div className="absolute inset-0 card-overlay-loop">
              <img
                src="/images/home-jam-card/ToDo4.png"
                alt=""
                className={`h-full w-full object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "-translate-x-[80px] scale-110" : "-translate-x-[20px]"}`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="relative w-[200px] h-[55px] -mt-1">
            <div className="absolute inset-0 card-overlay-loop">
              <img
                src="/images/home-jam-card/ToDo5.png"
                alt=""
                className={`h-full w-full object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "-translate-x-[80px] scale-110" : "-translate-x-[20px]"}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Center phone */}
        <img
          src="/images/home-jam-mobile.png"
          alt=""
          className={`absolute left-1/2 -translate-x-1/2 -bottom-6 z-[10] h-[100%] w-auto object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "-translate-y-[30px] scale-110" : "translate-y-0"}`}
          loading="lazy"
        />

        {/* Right stack */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-0 z-[5]">
          <div className="relative w-[88px] h-[72px] overflow-hidden">
            <div className="absolute inset-0 card-overlay-loop">
              <img
                src="/images/home-jam-card/ToDo1.png"
                alt=""
                className={`h-full w-full object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "translate-x-[80px] scale-110" : "translate-x-[20px]"}`}
                loading="lazy"
              />
            </div>
          </div>
          <div className="relative w-[88px] h-[72px] overflow-hidden -mt-1">
            <div className="absolute inset-0 card-overlay-loop">
              <img
                src="/images/home-jam-card/ToDo2.png"
                alt=""
                className={`h-full w-full object-contain drop-shadow-md transition-transform duration-300 ease-out transform-gpu ${hovered ? "translate-x-[80px] scale-110" : "translate-x-[20px]"}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


