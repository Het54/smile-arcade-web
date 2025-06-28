
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Facility = () => {
  const clinicPhotos = [
    {
      id: 1,
      title: "Reception Area",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our welcoming reception area designed for patient comfort"
    },
    {
      id: 2,
      title: "Treatment Room",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art treatment rooms with modern equipment"
    },
    {
      id: 3,
      title: "Sterilization Area",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Advanced sterilization protocols ensure the highest safety standards"
    },
    {
      id: 4,
      title: "Consultation Room",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Private consultation rooms for treatment planning"
    }
  ];

  const equipment = [
    {
      id: 1,
      name: "Digital X-Ray System",
      slug: "digital-xray-system",
      image: "https://images.unsplash.com/photo-1583912267550-3351371a2716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      summary: "Advanced digital radiography system providing 90% less radiation exposure compared to traditional X-rays.",
      features: ["Instant image processing", "Enhanced diagnostic accuracy", "Minimal radiation exposure"]
    },
    {
      id: 2,
      name: "CAD/CAM System",
      slug: "cad-cam-system",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      summary: "Computer-aided design and manufacturing system for same-day crowns and restorations.",
      features: ["Same-day crowns", "Precise digital impressions", "Perfect fit guarantee"]
    },
    {
      id: 3,
      name: "Laser Therapy System",
      slug: "laser-therapy-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      summary: "Soft tissue laser for minimally invasive gum treatments and periodontal therapy.",
      features: ["Painless procedures", "Faster healing", "Minimal bleeding"]
    },
    {
      id: 4,
      name: "3D Cone Beam Scanner",
      slug: "3d-cone-beam-scanner",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      summary: "3D imaging technology for precise implant placement and complex treatment planning.",
      features: ["3D visualization", "Accurate measurements", "Implant planning"]
    },
    {
      id: 5,
      name: "Intraoral Scanner",
      slug: "intraoral-scanner",
      image: "https://images.unsplash.com/photo-1609052118796-c29692bcba01?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      summary: "Digital impression system eliminating the need for traditional messy impressions.",
      features: ["Comfortable scanning", "Accurate digital models", "Eco-friendly"]
    },
    {
      id: 6,
      name: "Ultrasonic Scalers",
      slug: "ultrasonic-scalers",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      summary: "Advanced cleaning technology for thorough plaque and tartar removal.",
      features: ["Gentle cleaning", "Efficient removal", "Comfortable experience"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Modern Facility
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience dental care in our state-of-the-art facility, designed with your comfort 
              and safety in mind, equipped with the latest technology.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Clinic Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in cutting-edge technology to provide you with the most effective and comfortable treatments available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Link 
                key={item.id} 
                to={`/about/equipment/${item.slug}`}
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.summary}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {item.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facility;
