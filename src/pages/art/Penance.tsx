import React from "react";
import { Separator } from "@/components/ui/separator";

const Penance: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/Penance/rockBoxEdited.webp"
          alt="Penance"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-4" />
        <a>Penance. 2024. Granite, wood, and luggage hardware.</a>
      </section>
    </div>
  );
};

export default Penance;
