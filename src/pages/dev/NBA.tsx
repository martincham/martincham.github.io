import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import GitHubCard from "@/components/GitHubCard";
import { NbaChart } from "@/charts/NbaChart";
import { NbaChartPG } from "@/charts/NbaChartPG";

const Nba: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <p>
        This command-line tool I built in 2023 solves the problem of inaccurate
        player valuation. It pulls data from ESPN's API, uses Pandas to
        normalize each stat to it's average in the league, and pushes to
        Google's Sheets API. It can also find marginal improvements a based on a
        team's schedule. See the GitHub for more detail.
      </p>
      <Separator className="my-2" />
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 ">
        <div className="grid max-w- gap-6 md:grid-cols-1 lg:grid-cols-2  chart-wrapper">
          {/* NBA Chart Cards */}
          <Card className="lg:max-w-md min-w-0" x-chunk="charts-01-chunk-0">
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
                Stats are disproportionality displayed by number size.
                Perception overvalues points.
              </div>
            </CardFooter>
          </Card>

          <Card className="lg:max-w-md min-w-0" x-chunk="charts-01-chunk-0">
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
    </div>
  );
};

export default Nba;
