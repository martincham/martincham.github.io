import React, { useState } from "react";
import "./TitleAnimation.css";

const TitleAnimation: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div className="title-container" onMouseMove={handleMouseMove}>
      <h1
        className="animated-title"
        style={{
          transform: `translate(${position.x * 0.05}px, ${position.y * 0.05}px)`,
        }}
      >
        Martin Chamberlin
      </h1>
    </div>
  );
};

export default TitleAnimation;
