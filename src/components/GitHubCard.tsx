// GitHubCard.tsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

interface GitHubCardProps {
  repoName: string;
  description: string;
  repoLink: string;
}

const GitHubCard: React.FC<GitHubCardProps> = ({
  repoName,
  description,
  repoLink,
}) => {
  return (
    <Card className=" max-w-lg p-1.5  hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center">
          <FaGithub className="text-3xl text-gray-800 dark:text-white mr-2" />
          <CardTitle>{repoName}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-semibold"
        >
          View on GitHub &rarr;
        </a>
      </CardFooter>
    </Card>
  );
};

export default GitHubCard;
