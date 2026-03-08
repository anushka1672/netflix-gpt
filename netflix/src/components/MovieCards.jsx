import React from "react";
import { img_CND } from "../utils/constant";

export default function MovieCards({ poster }) {

  if (!poster) return null;

  return (
    <div
      className="
      flex-shrink-0
      w-32
      sm:w-36
      md:w-40
      lg:w-48
      transition-transform
      duration-300
      hover:scale-110
      "
    >
      <img
        className="w-full rounded-lg object-cover"
        src={img_CND + poster}
        alt="Movie Poster"
      />
    </div>
  );
}