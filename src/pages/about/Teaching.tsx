import React from "react";
import { Separator } from "@/components/ui/separator";

const Teaching: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <p>
          I created curriculum and taught 2 years of 3D Design to undergrads at
          the University of Georgia. Students learned to design and fabricate
          with wood, metal, plaster, paper/cardboard, and found objects. I also
          taught students to professionaly photograph and edit their work with
          Photoshop.
        </p>
        <Separator className="my-2" />

        <iframe
          src="/files/ChamberlinTeachingPortfolio.pdf"
          className="w-full h-screen"
          style={{ border: "none" }}
          title="Embedded Teaching Portfolio PDF"
        ></iframe>
      </section>
    </div>
  );
};

export default Teaching;
