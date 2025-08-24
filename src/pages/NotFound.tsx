import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen">
      <h1 className="text-xl">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button asChild>
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
