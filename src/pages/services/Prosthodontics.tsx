
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Prosthodontics = () => {
  const prosthodonticsTypes = [
    {
      title: 'Dental Bridges',
      description: 'Replace missing teeth with fixed prosthetic devices',
      image: '/placeholder.svg',
      path: '/services/dental-bridges'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution',
      image: '/placeholder.svg',
      path: '/services/dental-implants'
    },
    {
      title: 'Dental Crowns',
      description: 'Restore damaged or weakened teeth',
      image: '/placeholder.svg',
      path: '/services/dental-crowns'
    },
    {
      title: 'Dentures',
      description: 'Complete or partial removable tooth replacement',
      image: '/placeholder.svg',
      path: '/services/dentures'
    }
  ];

  const faqs = [
    {
      question: "What is prosthodontics?",
      answer: "Prosthodontics is a dental specialty that focuses on the restoration and replacement of missing or damaged teeth using artificial devices like crowns, bridges, dentures, and implants."
    },
    {
      question: "How long do prosthodontic treatments last?",
      answer: "The lifespan varies by treatment: dental implants can last 20+ years, crowns 10-15 years, bridges 10-15 years, and dentures 5-10 years with proper care."
    },
    {
      question: "Are prosthodontic procedures painful?",
      answer: "Most procedures are performed under local anesthesia. Some discomfort may occur post-treatment, but this is manageable with prescribed medications."
    },
    {
      question: "How do I care for my prosthodontic restoration?",
      answer: "Maintain good oral hygiene, use appropriate cleaning tools, avoid hard foods, and attend regular dental check-ups for optimal longevity."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prosthodontics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Restore your smile with advanced prosthodontic treatments. Our specialized care focuses on replacing and restoring damaged or missing teeth for optimal function and aesthetics.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Book Consultation
          </Button>
        </div>

        {/* Types of Prosthodontics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Prosthodontic Treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prosthodonticsTypes.map((type, index) => (
              <Link key={index} to={type.path}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {type.title}
                    </CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prosthodontics;
