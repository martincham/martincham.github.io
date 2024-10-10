import React from "react";
import { Separator } from "@/components/ui/separator";

const IroningBoard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/IroningBoard/ironBoard.webp"
          alt="Wrinkling Board"
          className="w-full h-full"
        />
        <Separator className="my-4" />
        <a>Wrinkling Board. 2023. Cherry and ironing board legs.</a>
      </section>
    </div>
  );
};

export default IroningBoard;
