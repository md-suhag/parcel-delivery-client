import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    title: "Same-Day Delivery",
    desc: "Get your parcels delivered within hours in select cities.",
  },
  {
    title: "Nationwide Coverage",
    desc: "We operate across the country, reaching even remote locations.",
  },
  {
    title: "Real-Time Tracking",
    desc: "Stay informed with live updates on your parcel's journey.",
  },
  {
    title: "Eco-Friendly Options",
    desc: "Choose green delivery with electric vehicles and optimized routes.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Book deliveries at your convenience with our platform.",
  },
];
const teamInfo = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    desc: "With over 15 years in logistics, Jane drives our vision of innovative and sustainable delivery solutions.",
  },
  {
    name: "John Smith",
    role: "CTO",
    desc: "John leads our tech team, developing systems for seamless tracking and scheduling.",
  },
  {
    name: "Emily Chen",
    role: "Operations Director",
    desc: "Emily ensures our delivery network runs smoothly, overseeing thousands of deliveries daily.",
  },
  {
    name: "Liam Patel",
    role: "Sustainability Lead",
    desc: "Liam champions our eco-friendly initiatives, reducing our environmental impact.",
  },
  {
    name: "Sarah Johnson",
    role: "Customer Success Manager",
    desc: "Sarah and her team provide top-notch support to our customers.",
  },
];

const About = () => {
  return (
    <div className="mx-auto container px-4 py-4 ">
      <h1 className="text-center text-3xl text-primary my-5 font-semibold">
        About Us
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Delivering Trust, One Parcel at a Time
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Our Mission</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="text-gray-600">
            our mission is to provide fast, reliable, and sustainable parcel
            delivery solutions that connect people and businesses seamlessly. We
            strive to redefine logistics by prioritizing customer satisfaction,
            environmental responsibility, and innovation in every delivery we
            make.
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-lg font-semibold">
                {service.title}
              </CardHeader>
              <CardContent className="text-gray-600">
                {service.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamInfo.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-lg font-semibold">
                {member.name}
              </CardHeader>
              <CardContent>
                <p className="font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
