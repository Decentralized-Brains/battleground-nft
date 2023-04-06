import classNames from "classnames";
import React, { useState } from "react";

export default function RelicHover({ videoUrl, title }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="">
        <video
          className="aspect-square w-96 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <div
        className={classNames(
          "absolute h-full w-full left-0 top-0 flex items-center justify-center bg-black opacity-0 transition-all duration-500 text-3xl font-life",
          {
            "opacity-90": isHover,
          }
        )}
      >
        {title}
      </div>
    </div>
  );
}
