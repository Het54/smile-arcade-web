
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

export const FeaturedServices = () => {
  const services = [
    {
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or clear aligners for a perfect smile.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["Clear Aligners", "Traditional Braces", "Retainers"]
    },
    {
      title: "Dental Implants",
      description: "Replace missing teeth with durable, natural-looking dental implants.",
      image: "https://images.unsplash.com/photo-1594824804882-8e2fe98ffd2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["Single Implants", "Full Mouth", "Same Day Service"]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and smile makeovers.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["Teeth Whitening", "Veneers", "Smile Makeover"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of dental services designed to keep your smile healthy, 
            beautiful, and confident.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Learn More
                  <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
