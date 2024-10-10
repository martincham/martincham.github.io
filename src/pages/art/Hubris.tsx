import React from "react";
import { Separator } from "@/components/ui/separator";

const Hubris: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/Hubris/hubrisBlur.webp"
          alt="Hubris"
          className="w-full h-full"
        />
        <Separator className="my-4" />
        <a>Hubris. 2024. Mixed media and robotics.</a>
      </section>
    </div>
  );
};

export default Hubris;
