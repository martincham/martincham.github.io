import React from "react";

const Resume: React.FC = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const pdfUrl = "/files/MartinChamberlinResume.pdf";
  return (
    <div className="container mx-auto p-6 ">
      <section className="container mx-auto py-2 max-w-4xl">
        {isMobile ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Download Resume
          </a>
        ) : (
          <iframe
            src={pdfUrl}
            className="w-full h-screen"
            style={{ border: "none" }}
            title="Embedded Resume PDF"
          ></iframe>
        )}
      </section>
    </div>
  );
};

export default Resume;
