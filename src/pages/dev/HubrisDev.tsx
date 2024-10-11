import React from "react";
import { Separator } from "@/components/ui/separator";
import GitHubCard from "@/components/GitHubCard";

const HubrisDev: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-2">
        <a>Hubris Coding.</a>

        <Separator />
        {/* GitHub Card */}
        <div className="mx-auto flex  flex-col items-center justify-center gap-6 p-4 sm:p-6 lg:p-8">
          <div className="grid w-full gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <GitHubCard
              repoName="Hubris Robotics"
              description="C++ Arduino code for synchronized pedestal sculpture.."
              repoLink="https://github.com/martincham/hubris"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubrisDev;
