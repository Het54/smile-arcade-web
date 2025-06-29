
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const DentalBridges = () => {
  const benefits = [
    'Replace one or more missing teeth',
    'Restore your natural bite and chewing function',
    'Prevent remaining teeth from shifting',
    'Maintain facial structure and appearance',
    'Durable and long-lasting solution',
    'Natural-looking results'
  ];

  const faqs = [
    {
      question: "What are dental bridges?",
      answer: "Dental bridges are fixed prosthetic devices used to replace one or more missing teeth by anchoring artificial teeth to adjacent natural teeth or implants."
    },
    {
      question: "How long do dental bridges last?",
      answer: "With proper care and maintenance, dental bridges typically last 10-15 years or longer. Regular dental check-ups and good oral hygiene are essential."
    },
    {
      question: "What is the procedure like?",
      answer: "The process involves preparing the anchor teeth, taking impressions, placing a temporary bridge, and finally cementing the permanent bridge in place over 2-3 visits."
    },
    {
      question: "Are there different types of bridges?",
      answer: "Yes, including traditional bridges, cantilever bridges, Maryland bridges, and implant-supported bridges. We'll recommend the best option for your situation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dental Bridges
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Restore your complete smile with custom dental bridges. Our advanced bridge solutions provide a permanent, natural-looking replacement for missing teeth.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Dental Bridges
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

export default DentalBridges;
