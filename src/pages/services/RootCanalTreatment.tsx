
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const RootCanalTreatment = () => {
  const benefits = [
    'Save your natural tooth',
    'Eliminate pain and infection',
    'Prevent spread of infection',
    'Restore full tooth function',
    'Cost-effective tooth preservation',
    'High success rate treatment'
  ];

  const faqs = [
    {
      question: "What is root canal treatment?",
      answer: "Root canal treatment removes infected or damaged pulp from inside a tooth, cleans the root canals, and seals them to save the natural tooth."
    },
    {
      question: "When is root canal treatment needed?",
      answer: "It's needed when the tooth's pulp becomes infected or inflamed due to deep decay, repeated procedures, or trauma to the tooth."
    },
    {
      question: "Is root canal treatment painful?",
      answer: "Modern root canal treatment is typically no more uncomfortable than having a large filling. Local anesthesia ensures you're comfortable throughout."
    },
    {
      question: "How many visits does treatment require?",
      answer: "Most root canal treatments can be completed in one to three visits, depending on the complexity of your case."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Root Canal Treatment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Save your natural tooth with modern root canal therapy. Our gentle approach eliminates infection while preserving your tooth's function and appearance.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Emergency Root Canal Consultation
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Root Canal Treatment
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

export default RootCanalTreatment;
