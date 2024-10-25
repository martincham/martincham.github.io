import React from "react";
import { Separator } from "@/components/ui/separator";

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto p-6 ">
      <section className="container mx-auto py-2">
        <Separator className="my-2" />
        <iframe
          src="/files/MartinChamberlinResume.pdf"
          className="w-full h-screen"
          style={{ border: "none" }}
          title="Embedded Resume PDF"
        ></iframe>
      </section>
    </div>
  );
};

export default Resume;
