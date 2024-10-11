import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import GitHubCard from "@/components/GitHubCard";

const Websites: React.FC = () => {
  return (
    <div>
      <p>
        I built my first simple HTML/CSS portfolio website in 2016. Since then,
        I expaned my web-dev toolkit with JavaScipt and TypeScript in 2019. Most
        recently I built this website using a modern tech-stack.
      </p>
      <Separator className="my-2" />
      <div className="mx-auto flex  flex-col items-center justify-center gap-6 p-4 sm:p-6 lg:p-8">
        <div className="grid w-full gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* Website Cards */}
          <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
            <CardHeader>
              <CardTitle>
                <a
                  href="https://unlisted.studio"
                  className="font-serif text-blue-600 underline text-xl leading-3 "
                >
                  unlisted.studio
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>

            <CardFooter className="flex-col items-start gap-2 text-sm border-t">
              <div className="flex gap-2 font-medium leading-none pt-2">
                Gallery show - Fall 2023.
              </div>
              <div className="leading-none text-muted-foreground">
                The chosen aesthetic was "Craigslist". Simple HTML/CSS website
                with photos and descriptions of each artist.
              </div>
            </CardFooter>
          </Card>
          <GitHubCard
            repoName="This Website"
            description="Built with React,TypeScript/JavaScript, Tailwind CSS, and shadcn"
            repoLink="https://github.com/martincham/martincham.github.io"
          />
        </div>
      </div>
    </div>
  );
};

export default Websites;