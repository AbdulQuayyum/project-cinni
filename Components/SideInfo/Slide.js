import React from "react";
import { SlideTitle, SlideImage, SlideMessage } from "./Index"

export default function Slide({ data: { src, title, message } })  {
  return (
    <div className="slide">
      <SlideImage src={src} alt="..." />
      <SlideTitle title={title} />
      <SlideMessage message={message} />
    </div>
  );
}
