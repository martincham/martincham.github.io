import React from "react";

import { Separator } from "@/components/ui/separator";

const BallForBouncing: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/Basketball/basketball.webp"
          alt="Ball for Bouncing"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-4" />
        <a>Ball for Bouncing. 2021. Basketball and springs.</a>
      </section>
    </div>
  );
};

export default BallForBouncing;
