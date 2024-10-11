import React from "react";
import { Separator } from "@/components/ui/separator";

const Hubris: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <video
          controls
          autoPlay
          loop
          className="w-full h-auto max-w-screen object-contain pb-4"
        >
          <source src="/HQPictures/Hubris/hubris.mp4" type="video/mp4" />
          <source src="/HQPictures/Hubris/hubris.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <img
          src="/HQPictures/Hubris/hubrisBlur.webp"
          alt="Hubris"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-4" />
        <a>Hubris. 2024. Mixed media and robotics.</a>
      </section>
    </div>
  );
};

export default Hubris;
