
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const DentalImplants = () => {
  const benefits = [
    'Permanent tooth replacement solution',
    'Preserves jawbone and facial structure',
    'Natural look, feel, and function',
    'No impact on adjacent healthy teeth',
    'Easy maintenance with regular brushing',
    'Long-lasting with proper care'
  ];

  const faqs = [
    {
      question: "What are dental implants?",
      answer: "Dental implants are titanium posts surgically placed in the jawbone to replace tooth roots. They serve as a foundation for crowns, bridges, or dentures."
    },
    {
      question: "Am I a candidate for dental implants?",
      answer: "Most people with good general health and adequate bone density are candidates. We'll evaluate your specific situation during a comprehensive consultation."
    },
    {
      question: "How long does the implant process take?",
      answer: "The complete process typically takes 3-6 months, allowing time for the implant to integrate with your jawbone before placing the final restoration."
    },
    {
      question: "Are dental implants painful?",
      answer: "The procedure is performed under local anesthesia. Post-operative discomfort is typically mild and manageable with prescribed medications."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dental Implants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the most advanced tooth replacement solution. Our dental implants provide a permanent, natural-looking alternative to missing teeth.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Book Implant Consultation
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Dental Implants?
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

export default DentalImplants;
