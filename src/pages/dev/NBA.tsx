import React from "react";
import { Separator } from "@/components/ui/separator";

import GitHubCard from "@/components/GitHubCard";

import { NbaChart } from "@/charts/NbaChart";

const Nba: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="container mx-auto py-12">
        <GitHubCard
          repoName="ESPN NBA Fantasy Analyzer"
          description="Creates standardized and non-biased ratings of player metrics."
          repoLink="https://github.com/martincham/espn-nba-fantasy-analyzer"
        />
        <Separator className="my-4" s />
        <NbaChart />
        <Separator className="my-4" s />
        <a>NBA. 2024. Mixed media and robotics.</a>
      </section>
    </div>
  );
};

export default Nba;
