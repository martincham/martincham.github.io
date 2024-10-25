import React from "react";
import { Separator } from "@/components/ui/separator";

const Penance: React.FC = () => {
  return (
    <div className="container mx-auto p-6 flex max-w-fit">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/Penance/rockbox2.webp"
          alt="Penance Open"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain mb-4"
        />
        <img
          src="/HQPictures/Penance/rockbox.webp"
          alt="Penance"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain mb-4"
        />
        <img
          src="/HQPictures/Penance/rockbox3.webp"
          alt="Penance Back"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-4" />
        <a>Penance. 2024. Granite, wood, and luggage hardware.</a>
      </section>
    </div>
  );
};

export default Penance;
