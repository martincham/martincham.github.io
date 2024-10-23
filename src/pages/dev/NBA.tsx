import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import GitHubCard from "@/components/GitHubCard";
import { NbaChart } from "@/charts/NbaChart";
import { NbaChartPG } from "@/charts/NbaChartPG";

const Nba: React.FC = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 p-4 sm:p-6 lg:p-8">
      <div className="grid max-w- gap-6 md:grid-cols-1 lg:grid-cols-2  chart-wrapper">
        {/* NBA Chart Cards */}
        <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
          <CardHeader>
            <CardTitle>Traditional Per-Game Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <NbaChartPG />
          </CardContent>

          <CardFooter className="flex-col items-start gap-2 text-sm border-t">
            <div className="flex gap-2 font-medium leading-none pt-2">
              Misleading
            </div>
            <div className="leading-none text-muted-foreground">
              Stats are disproportionality displayed by number size. Perception
              overvalues points.
            </div>
          </CardFooter>
        </Card>

        <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
          <CardHeader>
            <CardTitle>Analyzer's Adjusted Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <NbaChart />
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm border-t">
            <div className="flex gap-2 font-medium leading-none">
              Shows true value
            </div>
            <div className="leading-none text-muted-foreground">
              Normalizes each stat to it's average production. Correctly shows
              Wemby's large advantage in blocks.
            </div>
          </CardFooter>
        </Card>

        {/* GitHub Card */}
        <GitHubCard
          repoName="ESPN NBA Fantasy Analyzer"
          description="Creates standardized and non-biased ratings of player metrics."
          repoLink="https://github.com/martincham/espn-nba-fantasy-analyzer"
        />
      </div>
    </div>
  );
};

export default Nba;
