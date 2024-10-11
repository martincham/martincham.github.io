import React from "react";
import { Separator } from "@/components/ui/separator";

const AboutMe: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <p>
          Software developer and artist based in New Haven, CT. BA in Studio Art
          and Computer Science from Grinnell College, MFA in Studio Art from
          University of Georgia, Lamar Dodd School of Art.
        </p>
        <Separator className="my-4" />
        <div className="max-w-fit">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Socials</h4>
          </div>
          <Separator className="my-2" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>
              <a href="https://github.com/martincham">Github</a>
            </div>
            <Separator orientation="vertical" />
            <div>
              <a href="https://www.linkedin.com/in/martincham/">LinkedIn</a>
            </div>
            <Separator orientation="vertical" />
            <div>
              <a href="https://www.instagram.com/martin__chamberlin/">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
