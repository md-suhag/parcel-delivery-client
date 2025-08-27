import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const ChargesSection = () => {
  return (
    <section className="py-12">
      <div className="mx-auto container px-4">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
          Our Delivery Charges
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Transparent pricing for all your delivery needs
        </p>

        {/* Charges Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Regular Parcel */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center">
                Regular Parcel
              </h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-primary">70</p>
              <p className="text-muted-foreground">Initial Price</p>
              <p className="mt-4 text-lg font-medium text-primary">
                +15 per kg
              </p>
              <p className="text-muted-foreground">Additional Weight Charge</p>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Document Parcel */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center">
                Document Parcel
              </h3>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-primary">50</p>
              <p className="text-muted-foreground">Initial Price</p>
              <p className="mt-4 text-lg font-medium text-primary">
                +10 per kg
              </p>
              <p className="text-muted-foreground">Additional Weight Charge</p>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChargesSection;
