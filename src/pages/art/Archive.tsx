import React from "react";

import { Separator } from "@/components/ui/separator";

const Archive: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-fit">
      <section className="container mx-auto py-2">
        {/* McMaster Catalog */}
        <div className="mb-12">
          <img
            src="/HQPictures/Catalog/cover.webp"
            alt="McMasterCatalog created through machine learning"
            className="w-full h-auto  max-w-lg object-contain mx-auto"
          />
          <img
            src="/HQPictures/Catalog/page3.webp"
            alt="Acoustic Tile"
            className="w-full h-auto  max-w-3xl object-contain mt-4"
          />
          <Separator className="my-4" />
          <a>McMaster Catalog. 2021. Machine learning and print.</a>
        </div>
        {/* Ball for Rolling */}
        <div className="mb-12">
          <img
            src="/HQPictures/Rolling/sphere.jpg"
            alt="A sphere with casters on it."
            className="w-full h-auto  max-w-3xl object-contain"
          />
          <Separator className="my-4" />
          <a>Ball for Rolling. 2018. Wood and casters.</a>
        </div>
        {/* Foam Tile */}
        <div className="mb-12">
          <img
            src="/HQPictures/FoamTile/AcousticTile.webp"
            alt="Cement Acoustic foam Tile"
            className="w-full h-auto  max-w-3xl object-contain"
          />
          <img
            src="/HQPictures/FoamTile/AcousticTileDetail.webp"
            alt="Cemennt Acoustic foam Tile detail"
            className="w-full h-auto  max-w-3xl object-contain mt-4"
          />
          <Separator className="my-4" />
          <a>Acoustic Tile. 2019. Cement.</a>
        </div>
        {/* A Good Friend */}
        <div className="mb-12">
          <img
            src="/HQPictures/Teddy/Teddy1.webp"
            alt="5foot10inch teddy bear in an elevator."
            className="w-full h-auto  max-w-3xl object-contain"
          />

          <Separator className="my-4" />
          <a>A Good Friend. 2016. Fabric, stuffing, and two buttons.</a>
        </div>
        {/* Packing Peanuts */}
        <div className="mb-12">
          <img
            src="/HQPictures/Peanuts/peanuts1.webp"
            alt="Cement packing peanuts in a box"
            className="w-full h-auto  max-w-3xl object-contain"
          />
          <img
            src="/HQPictures/Peanuts/peanuts2.webp"
            alt="Close up of cement packing peanuts"
            className="w-full h-auto  max-w-3xl object-contain mt-4"
          />
          <Separator className="my-4" />
          <a>Packing Peanuts. 2016. Cement.</a>
        </div>
      </section>
    </div>
  );
};

export default Archive;
