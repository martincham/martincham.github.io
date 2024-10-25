import React from "react";
import { Separator } from "@/components/ui/separator";
import GitHubCard from "@/components/GitHubCard";

const HubrisDev: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <a>
          I taught myself robotics in 2 months for my final thesis work in my
          MFA. The sculpture installation used a ESP32 microcontroller in each
          pedestal to control the movement of the weight and to synchronize
          through BluetoothLowEnergy.
        </a>
        <Separator className="my-2" />
        <img
          src="/HQPictures/Hubris/insideHubris.webp"
          alt="Hubris interior"
          className="w-full h-auto max-w-screen max-h-[800px] object-contain"
        />
        <Separator className="my-2" />
        {/* GitHub Card */}
        <div className="mx-auto flex  flex-col items-center justify-center gap-6  sm:p-6 lg:p-8">
          <GitHubCard
            repoName="Hubris Robotics"
            description="C++ Arduino code for synchronized pedestal sculpture.."
            repoLink="https://github.com/martincham/hubris"
          />
        </div>
        <Separator className="my-2" />
        {/* Interface Images */}
        <a>
          The pedestal top and bottom had a locking interface to allow easy
          access to the robotics.
        </a>
        <div className="flex flex-row items-center justify-center gap-6  sm:p-6 lg:p-8">
          <img
            src="/HQPictures/Hubris/bottomInterfacePedestal.svg"
            alt="CNC file bottom pedestal interface"
            className="w-1/2 h-auto max-w-screen "
          />

          <img
            src="/HQPictures/Hubris/topInterfacePedestal.svg"
            alt="CNC file top pedestal interface"
            className="w-1/2 h-auto max-w-screen  "
          />
        </div>
      </section>
    </div>
  );
};

export default HubrisDev;
