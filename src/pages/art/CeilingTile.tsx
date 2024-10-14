import React from "react";
import { Separator } from "@/components/ui/separator";

const CeilingTile: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <img
          src="/HQPictures/DropTile/dropTile.webp"
          alt="Drop Ceiling Tile"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-4" />
        <a>Ceiling Tile. 2022. Oil on canvas. 24 x 24"</a>
      </section>
    </div>
  );
};

export default CeilingTile;
