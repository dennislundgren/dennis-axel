import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import React from "react";

const Custom404 = () => {
  console.log("TS: ", Date.now(), " Not found page...");
  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Card>
        <Body>Sorry, the page you are looking for does not exist.</Body>
      </Card>
    </main>
  );
};

export default Custom404;
