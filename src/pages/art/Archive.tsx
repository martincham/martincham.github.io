import React from "react";

import { Separator } from "@/components/ui/separator";

const projects = [
  {
    caption: "McMaster Catalog. 2021. Machine learning and print.",
    images: [
      {
        src: "/HQPictures/Catalog/cover.webp",
        alt: "McMasterCatalog created through machine learning",
        className: "max-w-xl",
      },
      {
        src: "/HQPictures/Catalog/page2.webp",
        alt: "McMasterCatalog created through machine learning",
      },
    ],
  },
  {
    caption: "Ball for Rolling. 2018. Wood and casters.",
    images: [
      {
        src: "/HQPictures/Rolling/sphere.jpg",
        alt: "A sphere with casters on it.",
      },
    ],
  },
  {
    caption: "Acoustic Tile. 2019. Cement.",
    images: [
      {
        src: "/HQPictures/FoamTile/AcousticTile.webp",
        alt: "Cement Acoustic foam Tile.",
      },
      {
        src: "/HQPictures/FoamTile/AcousticTileDetail.webp",
        alt: "Cement Acoustic foam Tile.",
      },
    ],
  },
  {
    caption: "A Good Friend. 2016. Fabric, stuffing, and two buttons.",
    images: [
      {
        src: "/HQPictures/Teddy/Teddy1.webp",
        alt: "5foot10inch teddy bear in an elevator.",
      },
    ],
  },
  {
    caption: "Packing Peanuts. 2016. Cement.",
    images: [
      {
        src: "/HQPictures/Peanuts/peanuts1.webp",
        alt: "Cement packing peanuts in a box",
      },
      {
        src: "/HQPictures/Peanuts/peanuts2.webp",
        alt: "Close up of cement packing peanuts in a box",
      },
    ],
  },
];

const Archive: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-screen ">
      <section className="container mx-auto py-2 max-w-fit">
        {projects.map((project, index) => (
          <div key={index} className="mb-12">
            {project.images.map((image, jindex) => (
              <img
                key={jindex}
                src={image.src}
                alt={image.alt}
                className={`w-full h-auto max-w-3xl object-contain mb-4 mx-auto ${image.className}`}
              />
            ))}
            <Separator className="my-4" />
            <a>{project.caption}</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Archive;
