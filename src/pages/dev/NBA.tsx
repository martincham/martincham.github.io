import React from "react";
import { Separator } from "@/components/ui/separator";

import GitHubCard from "@/components/GitHubCard";

import { NbaChart } from "@/charts/NbaChart";

const Nba: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="flex flex-col md:flex-row md:space-x-4 items-stretch py-8">
        {/* GitHub Card */}
        <div className="flex-1 mb-6 md:mb-0 min-w-md">
          <GitHubCard
            repoName="ESPN NBA Fantasy Analyzer"
            description="Creates standardized and non-biased ratings of player metrics."
            repoLink="https://github.com/martincham/espn-nba-fantasy-analyzer"
          />
        </div>

        {/* NBA Chart */}
        <div className="flex-1">
          <NbaChart />
        </div>
      </section>
      <Separator className="my-4" />
      <a>NBA. 2024. Mixed media and robotics.</a>
    </div>
  );
};

export default Nba;
