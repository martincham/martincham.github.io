import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BallForBouncing: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold">Art Project Title</h1>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700">
            Welcome to my art project page! Here you'll find all the details
            about my latest creations.
          </p>
          {/* You can add more content here, like images or galleries */}
        </CardContent>
        <CardFooter>
          <Button onClick={() => alert("Contact form coming soon!")}>
            Contact Me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BallForBouncing;
