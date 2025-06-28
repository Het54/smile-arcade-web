
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expert Team", 
      description: "Board-certified dentists with years of specialized training and experience."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Latest Technology",
      description: "State-of-the-art equipment and cutting-edge techniques for optimal results."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to your unique needs and goals."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your busy lifestyle."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About The Dental Arcade
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over 15 years, we've been dedicated to providing exceptional dental care 
                with a focus on comfort, quality, and innovation. Our state-of-the-art facility 
                and experienced team ensure every patient receives the best possible treatment.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Meet Our Team
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our dental clinic"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of experience with the latest technology to deliver exceptional dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dental team"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, The Dental Arcade began with a simple mission: to provide 
                  comprehensive dental care in a comfortable, welcoming environment. What started 
                  as a small practice has grown into a leading dental clinic serving hundreds of 
                  families in our community.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition from patients and peers 
                  alike. We continuously invest in the latest technology and ongoing education 
                  to ensure our patients receive the most advanced care available.
                </p>
                <p>
                  Today, we're proud to be your trusted partner in oral health, offering everything 
                  from routine cleanings to complex reconstructive procedures, all under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional dental care through innovative treatments, personalized service, 
                  and a commitment to patient comfort. We strive to create beautiful, healthy smiles 
                  while building lasting relationships with our patients and community.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the premier dental practice in our community, known for excellence in clinical care, 
                  innovative technology, and compassionate service. We envision a future where every patient 
                  feels confident in their smile and oral health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
