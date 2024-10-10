import React from "react";

import { Separator } from "@/components/ui/separator";

const Tofu: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-12">
        <img
          src="/HQPictures/Tofu/tofuDrip.webp"
          alt="Tofu"
          className="w-full h-full"
        />
        <Separator className="my-4" />
        <a>Tofu. 2021. Mixed media.</a>
      </section>
    </div>
  );
};

export default Tofu;
