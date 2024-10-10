import React from "react";
import { Separator } from "@/components/ui/separator";

const Penance: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-12">
        <img
          src="/HQPictures/Penance/rockBoxEdited.jpg"
          alt="Penance"
          className="w-full h-full"
        />
        <Separator className="my-4" />
        <a>Penance. 2024. Granite, wood, and luggage hardware.</a>
      </section>
    </div>
  );
};

export default Penance;
