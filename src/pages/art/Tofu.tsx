import React from "react";

import { Separator } from "@/components/ui/separator";

const Tofu: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <video controls width="500" autoPlay loop className="py-4">
          <source src="/HQPictures/Tofu/tofu.mp4" type="video/mp4" />
          <source src="/HQPictures/Tofu/tofu.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <img
          src="/HQPictures/Tofu/tofuDrip.webp"
          alt="Tofu"
          className="w-full h-full max-w-[500px]"
        />
        <Separator className="my-4" />
        <a>Tofu. 2021. Mixed media.</a>
      </section>
    </div>
  );
};

export default Tofu;
