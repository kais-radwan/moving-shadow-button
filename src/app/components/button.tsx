"use client";

import { useState } from "react";

export default function Button() {
  const [direction, setDirection] = useState<"right" | "left" | "center">(
    "center"
  );
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="relative rounded-full transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        !hovered
          ? {
              boxShadow: "0px 0px 20px 0px rgba(251, 146, 60, .2)",
            }
          : {}
      }
    >
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 bg-orange-400/5 blur-2xl rounded-full transition-all duration-500 ${
          hovered ? "blur-sm" : ""
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 bg-orange-400/5 blur-lg rounded-full transition-all duration-500 ${
          hovered ? "blur-sm" : ""
        }`}
      ></div>
      <div
        className="z-20 w-56 h-10 flex items-center justify-center gap-2 bg-white/80 rounded-full text-black text-sm font-semibold relative  transition-all duration-500 border-[1px] border-white/80"
        style={
          !hovered
            ? {
                boxShadow: "0px 0px 10px 2px rgba(251, 146, 60, .1)",
              }
            : {}
        }
      >
        <div className="absolute top-0 left-0 w-56 h-full flex z-30 transition-all duration-500 rounded-full">
          <div className="w-full" onMouseEnter={() => setDirection("left")} />
          <div className="w-full" onMouseEnter={() => setDirection("right")} />
        </div>
        <div className="z-20">TRY IT FREE</div>
        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 bg-orange-300/20 blur-sm rounded-full transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
        />
        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 bg-orange-400/30 blur-md rounded-full transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
        />
        
        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 bg-orange-400/30 blur-lg rounded-full transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
        />
        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 rounded-full blur-sm transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
          style={{
            boxShadow: "0px 0px 70px 0px rgba(249, 115, 22, .4)",
          }}
        />
        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 rounded-full blur-sm transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
          style={{
            boxShadow: "0px 0px 10px 0px rgba(249, 115, 22, .2)",
          }}
        />

        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 rounded-full bg-white/40 blur-sm transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
        />
        <div
          className={`z-10 absolute left-0 top-0 h-full w-20 rounded-full bg-white/20 blur-sm transition-all duration-500 ${
            direction === "right"
              ? "translate-x-36"
              : direction === "left"
              ? "left-0"
              : ""
          }`}
        />
      </div>
    </div>
  );
}
