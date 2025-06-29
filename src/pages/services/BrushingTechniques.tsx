
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle } from 'lucide-react';

const BrushingTechniques = () => {
  const benefits = [
    'Learn proper brushing methods',
    'Prevent cavities and gum disease',
    'Improve overall oral health',
    'Personalized technique guidance',
    'Reduce plaque buildup effectively',
    'Maintain fresh breath'
  ];

  const faqs = [
    {
      question: "How often should I brush my teeth?",
      answer: "You should brush your teeth at least twice a day - once in the morning and once before bedtime. Brushing after meals is also beneficial."
    },
    {
      question: "What's the correct brushing technique?",
      answer: "Use gentle circular motions, hold your toothbrush at a 45-degree angle to your gums, and brush for at least two minutes covering all surfaces."
    },
    {
      question: "What type of toothbrush should I use?",
      answer: "Use a soft-bristled toothbrush that fits comfortably in your mouth. Electric toothbrushes can be more effective for some people."
    },
    {
      question: "How long should I brush my teeth?",
      answer: "Brush for at least two minutes, spending about 30 seconds on each quadrant of your mouth to ensure thorough cleaning."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Brushing Techniques
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master the art of proper oral hygiene with expert brushing techniques. Learn the right methods to maintain healthy teeth and gums for life.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Book Oral Hygiene Session
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Proper Brushing
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

export default BrushingTechniques;
