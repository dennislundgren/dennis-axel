"use client";
import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import React from "react";

const Custom404 = () => {
  return (
    <div className="min-h-full-dynamic flex items-center justify-center">
      <Card>
        <Body>Sorry, the page you are looking for does not exist.</Body>
      </Card>
    </div>
  );
};

export default Custom404;
