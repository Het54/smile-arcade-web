
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const DentalCrowns = () => {
  const benefits = [
    'Restore damaged or weakened teeth',
    'Improve tooth appearance and shape',
    'Strengthen teeth after root canal',
    'Cover dental implants',
    'Natural-looking ceramic materials',
    'Long-lasting durability'
  ];

  const faqs = [
    {
      question: "What are dental crowns?",
      answer: "Dental crowns are tooth-shaped caps that cover the entire visible portion of a tooth to restore its shape, size, strength, and appearance."
    },
    {
      question: "When do I need a dental crown?",
      answer: "Crowns are recommended for severely damaged, decayed, or weakened teeth, after root canal treatment, to cover implants, or for cosmetic enhancement."
    },
    {
      question: "What materials are used for crowns?",
      answer: "We offer porcelain, ceramic, metal, and porcelain-fused-to-metal crowns. We'll recommend the best material based on your specific needs."
    },
    {
      question: "How long do dental crowns last?",
      answer: "With proper care, dental crowns typically last 10-15 years or longer. Good oral hygiene and regular dental visits are essential for longevity."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dental Crowns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Restore and protect damaged teeth with custom dental crowns. Our high-quality crowns provide strength, function, and natural beauty.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Crown Consultation
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Dental Crowns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
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

export default DentalCrowns;
