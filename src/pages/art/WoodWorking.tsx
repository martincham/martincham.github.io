import React from "react";

import { Separator } from "@/components/ui/separator";

const WoodWorking: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-fit">
      <section className="container mx-auto py-2">
        {/* 2016 Cutting Boards */}
        <div className="mb-12">
          <img
            src="/HQPictures/Wood/board31.webp"
            alt="Wooden cutting board."
            className="w-full h-auto  max-w-3xl object-contain mx-auto mb-4"
          />
          <img
            src="/HQPictures/Wood/board13.webp"
            alt="Wooden cutting board."
            className="w-full h-auto  max-w-3xl object-contain mx-auto mb-4"
          />
          <img
            src="/HQPictures/Wood/board22.webp"
            alt="Wooden cutting board."
            className="w-full h-auto  max-w-3xl object-contain mx-auto"
          />
          <Separator className="my-4" />
          <a>Cutting boards. 2016.</a>
        </div>
      </section>
    </div>
  );
};

export default WoodWorking;
