import { Button } from "@/components/ui/button";

import heroImg from "@/assets/heroImg.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="py-10 md:py-24 container mx-auto px-4">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex  flex-col items-center text-center lg:items-start lg:text-left order-2 md:order-1">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            No. 1 Parcel Delivery Service
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            This is the fastest parcel delivery service in Bangladesh that
            ensures safe delivery of your product
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/register">Register Now</Link>
            </Button>
          </div>
        </div>
        <img
          src={heroImg}
          alt={"parcel delivery"}
          className="max-h-96 w-full rounded-md object-cover md:order-2"
        />
      </div>
    </section>
  );
};

export default Hero;
