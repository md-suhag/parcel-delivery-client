import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, Map, Leaf, Calendar, Shield, Headphones } from "lucide-react";

const services = [
  {
    title: "Same-Day Delivery",
    desc: "Get your parcels delivered within hours in select cities.",
    icon: Clock,
  },
  {
    title: "Nationwide Coverage",
    desc: "We operate across the country, reaching even remote locations.",
    icon: Map,
  },
  {
    title: "Eco-Friendly Options",
    desc: "Choose green delivery with electric vehicles and optimized routes.",
    icon: Leaf,
  },
  {
    title: "Flexible Scheduling",
    desc: "Book deliveries at your convenience with our platform.",
    icon: Calendar,
  },
  {
    title: "100% Safe Delivery",
    desc: "We deliver parcels with full responsibility in every corner of Bangladesh by providing 100% Safety Coverage.",
    icon: Shield,
  },
  {
    title: "24/7 Call Center Support",
    desc: "24/7 call center agent support for all sorts of queries.",
    icon: Headphones,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center gap-3">
              <service.icon className="h-12 w-12 text-primary" />
              <span className="text-lg font-semibold text-center">
                {service.title}
              </span>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center">
              {service.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
