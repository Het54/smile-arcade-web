
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const PediatricDentistry = () => {
  const benefits = [
    'Specialized care for children',
    'Child-friendly environment',
    'Preventive dental education',
    'Early detection of problems',
    'Gentle and patient approach',
    'Building positive dental habits'
  ];

  const faqs = [
    {
      question: "When should my child first visit the dentist?",
      answer: "Children should have their first dental visit by age one or within six months of their first tooth appearing, whichever comes first."
    },
    {
      question: "How often should children visit the dentist?",
      answer: "Children should visit the dentist every six months for regular check-ups and cleanings, unless otherwise recommended by the dentist."
    },
    {
      question: "How can I prepare my child for their dental visit?",
      answer: "Read books about dental visits, use positive language, arrive early to get familiar with the office, and avoid bribing with treats."
    },
    {
      question: "What services do you provide for children?",
      answer: "We offer routine cleanings, fluoride treatments, sealants, cavity treatment, orthodontic evaluation, and dental education."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pediatric Dentistry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Creating positive dental experiences for children. Our specialized pediatric care focuses on prevention, education, and gentle treatment in a fun environment.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Child's Visit
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Pediatric Care?
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

export default PediatricDentistry;
