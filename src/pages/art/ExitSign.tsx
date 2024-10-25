import React from "react";
import { Separator } from "@/components/ui/separator";

const ExitSign: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-fit">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/ExitSign/exitSign.webp"
          alt="Exit Sign"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-4" />
        <a>Exit Sign. 2022. Acrylic on canvas. 7x12"</a>
      </section>
    </div>
  );
};

export default ExitSign;
