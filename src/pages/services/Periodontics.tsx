
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Periodontics = () => {
  const periodonticsTypes = [
    {
      title: 'Teeth Scaling',
      description: 'Deep cleaning to remove plaque and tartar buildup',
      image: '/placeholder.svg',
      path: '/services/teeth-scaling'
    }
  ];

  const faqs = [
    {
      question: "What is periodontics?",
      answer: "Periodontics is the branch of dentistry that focuses on the prevention, diagnosis, and treatment of gum disease and other conditions affecting the supporting structures of teeth."
    },
    {
      question: "What are the signs of gum disease?",
      answer: "Common signs include bleeding gums, persistent bad breath, red or swollen gums, receding gums, loose teeth, and changes in bite alignment."
    },
    {
      question: "How can I prevent gum disease?",
      answer: "Maintain good oral hygiene with regular brushing and flossing, use antibacterial mouthwash, avoid tobacco, eat a balanced diet, and visit your dentist regularly."
    },
    {
      question: "Is gum disease treatment painful?",
      answer: "Most periodontal treatments are performed with local anesthesia to minimize discomfort. Post-treatment care instructions help manage any mild discomfort."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Periodontics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Maintain healthy gums and supporting structures with our specialized periodontal care. We focus on preventing and treating gum disease for optimal oral health.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Gum Health Check
          </Button>
        </div>

        {/* Types of Periodontic Treatments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Periodontal Treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {periodonticsTypes.map((type, index) => (
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

export default Periodontics;
