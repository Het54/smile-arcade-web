
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const Dentures = () => {
  const benefits = [
    'Replace multiple missing teeth',
    'Restore chewing and speaking ability',
    'Support facial muscles and structure',
    'Removable for easy cleaning',
    'Cost-effective tooth replacement',
    'Custom-fitted for comfort'
  ];

  const faqs = [
    {
      question: "What are dentures?",
      answer: "Dentures are removable appliances that replace missing teeth and surrounding tissues. They can be complete (full) or partial, depending on your needs."
    },
    {
      question: "How long does it take to get used to dentures?",
      answer: "Most people adjust to new dentures within a few weeks. Initially, you may experience some discomfort and changes in speech and eating patterns."
    },
    {
      question: "How do I care for my dentures?",
      answer: "Clean dentures daily with a denture brush and cleanser, soak them overnight, and handle them carefully to avoid damage."
    },
    {
      question: "How often should dentures be replaced?",
      answer: "Dentures typically need replacement every 5-10 years due to normal wear and changes in your mouth's shape over time."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dentures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Regain your confidence with comfortable, natural-looking dentures. We provide complete and partial dentures tailored to your unique needs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Book Denture Consultation
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Dentures
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

export default Dentures;
