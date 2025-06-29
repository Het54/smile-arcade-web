
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const LaserDentistry = () => {
  const benefits = [
    'Minimally invasive procedures',
    'Reduced bleeding and swelling',
    'Faster healing times',
    'Less discomfort during treatment',
    'Precise and accurate treatment',
    'Reduced need for anesthesia'
  ];

  const faqs = [
    {
      question: "What is laser dentistry?",
      answer: "Laser dentistry uses focused light beams to perform various dental procedures, offering a more precise and comfortable alternative to traditional methods."
    },
    {
      question: "What procedures can be done with lasers?",
      answer: "Lasers can be used for gum reshaping, cavity treatment, teeth whitening, frenectomy, and treating gum disease, among other procedures."
    },
    {
      question: "Is laser dentistry safe?",
      answer: "Yes, laser dentistry is very safe when performed by trained professionals. It's FDA-approved and has been used successfully for decades."
    },
    {
      question: "Does laser treatment hurt?",
      answer: "Laser treatments typically cause less discomfort than traditional methods and often require little to no anesthesia."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Laser Dentistry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of dental care with advanced laser technology. Our laser treatments offer precise, comfortable, and efficient dental solutions.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Learn About Laser Treatment
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Laser Dentistry
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

export default LaserDentistry;
