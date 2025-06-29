
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConservativeDentistry = () => {
  const faqs = [
    {
      question: "What is conservative dentistry?",
      answer: "Conservative dentistry focuses on preserving natural tooth structure while treating dental problems. It emphasizes prevention, early intervention, and minimally invasive treatments to maintain oral health."
    },
    {
      question: "What procedures are included in conservative dentistry?",
      answer: "Conservative dentistry includes fillings, crowns, bridges, root canals, preventive treatments, cosmetic procedures like veneers and whitening, and other treatments that preserve natural teeth."
    },
    {
      question: "How do you preserve natural teeth?",
      answer: "We use advanced techniques like composite fillings, ceramic restorations, and minimally invasive procedures that remove only the damaged portion of teeth while preserving healthy tooth structure."
    },
    {
      question: "What materials are used in conservative treatments?",
      answer: "We use biocompatible materials like composite resins, ceramics, and porcelain that closely match natural tooth color and provide long-lasting results while being safe for your body."
    },
    {
      question: "How long do conservative dental treatments last?",
      answer: "With proper care and maintenance, conservative dental treatments can last many years. Composite fillings typically last 5-10 years, while ceramic restorations can last 10-20 years or more."
    }
  ];

  const specialties = [
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile's appearance with professional cosmetic treatments and procedures.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/cosmetic-dentistry"
    },
    {
      title: "Dental Veneers",
      description: "Transform your smile with custom-made porcelain or composite veneers.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/dental-veneers"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/teeth-whitening"
    },
    {
      title: "Smile Makeover",
      description: "Comprehensive treatment plans to completely transform your smile.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/smile-makeover"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conservative Dentistry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Preserve your natural teeth with our conservative approach to dental care. 
              We focus on prevention and minimally invasive treatments to maintain your oral health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Conservative Dentistry Specialties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {specialties.map((specialty, index) => (
                <Link key={index} to={specialty.link}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={specialty.image}
                        alt={specialty.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialty.title}</h3>
                      <p className="text-gray-600 mb-4">{specialty.description}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Conservative Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                Conservative dentistry is built on the principle of preserving as much of your natural tooth 
                structure as possible while effectively treating dental problems. Our approach combines 
                prevention, early intervention, and advanced techniques to maintain your oral health.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Philosophy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Preserve natural tooth structure</li>
                    <li>• Minimally invasive procedures</li>
                    <li>• Prevention-focused care</li>
                    <li>• Biocompatible materials</li>
                    <li>• Long-term oral health</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Techniques</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Digital imaging and diagnostics</li>
                    <li>• Laser dentistry</li>
                    <li>• Air abrasion technology</li>
                    <li>• Composite bonding</li>
                    <li>• Ceramic restorations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Preserve Your Natural Smile
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how our conservative approach can maintain your oral health for years to come.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConservativeDentistry;
