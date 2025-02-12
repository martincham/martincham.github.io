import React from "react";

import { Separator } from "@/components/ui/separator";

const Tofu: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-fit">
      <section className=" py-2">
        <video
          controls
          autoPlay
          loop
          className="w-full h-auto max-w-xl mx-auto object-contain mb-4"
        >
          <source src="/HQPictures/Tofu/tofu.mp4" type="video/mp4" />
          <source src="/HQPictures/Tofu/tofu.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <img
          src="/HQPictures/Tofu/tofuDrip.webp"
          alt="Tofu"
          className="w-full h-auto max-w-xl mx-auto object-contain"
        />
        <Separator className="my-4" />
        <a>Tofu. 2021. Mixed media.</a>
      </section>
    </div>
  );
};

export default Tofu;
