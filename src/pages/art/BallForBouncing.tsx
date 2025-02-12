import React from "react";

import { Separator } from "@/components/ui/separator";

const BallForBouncing: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-fit">
      <section className="container mx-auto py-2">
        <video
          controls
          autoPlay
          loop
          className="w-full h-auto max-w-xl mx-auto object-contain my-4"
        >
          <source
            src="/HQPictures/Basketball/1080vertical.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <img
          src="/HQPictures/Basketball/basketball.webp"
          alt="Ball for Bouncing"
          className="w-full h-auto max-w-xl max-h-[800px] object-contain"
        />

        <Separator className="my-4" />
        <a>Ball for Bouncing. 2021. Basketball and springs.</a>
      </section>
    </div>
  );
};

export default BallForBouncing;
