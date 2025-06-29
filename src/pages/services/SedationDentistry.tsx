
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const SedationDentistry = () => {
  const benefits = [
    'Anxiety-free dental experience',
    'Comfortable for lengthy procedures',
    'Multiple sedation options available',
    'Safe and monitored throughout',
    'Improved treatment outcomes',
    'Suitable for various procedures'
  ];

  const faqs = [
    {
      question: "What is sedation dentistry?",
      answer: "Sedation dentistry uses medication to help patients relax during dental procedures, ranging from mild relaxation to deep sedation depending on needs."
    },
    {
      question: "What types of sedation do you offer?",
      answer: "We offer nitrous oxide (laughing gas), oral sedation, IV sedation, and general anesthesia, depending on the procedure and patient needs."
    },
    {
      question: "Is sedation dentistry safe?",
      answer: "Yes, sedation dentistry is very safe when administered by trained professionals with proper monitoring equipment and protocols."
    },
    {
      question: "Who is a good candidate for sedation?",
      answer: "Patients with dental anxiety, sensitive gag reflex, difficulty getting numb, or those undergoing lengthy procedures may benefit from sedation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sedation Dentistry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Overcome dental anxiety with our comfortable sedation options. Experience stress-free dental care in a relaxed, safe environment.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Discuss Sedation Options
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Sedation Dentistry
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

export default SedationDentistry;
