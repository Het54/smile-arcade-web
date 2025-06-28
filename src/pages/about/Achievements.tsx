
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Calendar, Star } from 'lucide-react';

const Achievements = () => {
  const awards = [
    {
      id: 1,
      title: "Best Dental Practice 2023",
      organization: "Local Healthcare Awards",
      year: "2023",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Recognized for outstanding patient care and innovative treatment approaches."
    },
    {
      id: 2,
      title: "Excellence in Orthodontics",
      organization: "American Orthodontic Association",
      year: "2022",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Awarded for exceptional results in orthodontic treatments and patient satisfaction."
    },
    {
      id: 3,
      title: "Community Service Award",
      organization: "City Health Department",
      year: "2023",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Honored for providing free dental care to underserved communities."
    },
    {
      id: 4,
      title: "Innovation in Dental Technology",
      organization: "Dental Technology Institute",
      year: "2022",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Recognized for implementing cutting-edge technology in patient care."
    }
  ];

  const milestones = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: "5,000+",
      title: "Happy Patients",
      description: "Served over 5,000 patients with exceptional dental care"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      number: "15",
      title: "Years of Excellence",
      description: "Providing quality dental care since 2009"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      number: "50+",
      title: "Awards & Certifications",
      description: "Recognition from various professional organizations"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      number: "4.9/5",
      title: "Patient Rating",
      description: "Consistently high ratings across all review platforms"
    }
  ];

  const certifications = [
    "ADA (American Dental Association) Accreditation",
    "OSHA Compliance Certification",
    "Infection Control Excellence Award",
    "Digital Dentistry Certification",
    "Invisalign Elite Provider Status",
    "Laser Dentistry Certification",
    "Sedation Dentistry License",
    "Continuing Education Excellence"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over the years, we've been honored with numerous awards and recognitions 
              that reflect our commitment to excellence in dental care.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {milestone.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{milestone.number}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">{milestone.title}</h4>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <Card key={award.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{award.organization}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is demonstrated through our extensive certifications 
              and continuous professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((certification, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{certification}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Award-Winning Dental Care
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied patients who trust us with their smiles.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Your Visit Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
