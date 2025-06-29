
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const Orthodontics = () => {
  const faqs = [
    {
      question: "What is orthodontics?",
      answer: "Orthodontics is a specialized branch of dentistry that focuses on diagnosing, preventing, and treating dental and facial irregularities, particularly misaligned teeth and jaws."
    },
    {
      question: "How long does orthodontic treatment take?",
      answer: "Treatment duration varies depending on the complexity of the case, but typically ranges from 12 to 36 months. Simple cases may take 6-12 months, while complex cases can take up to 3 years."
    },
    {
      question: "What's the difference between braces and clear aligners?",
      answer: "Traditional braces use metal brackets and wires to move teeth, while clear aligners are removable plastic trays. Braces are more effective for complex cases, while aligners are nearly invisible and removable."
    },
    {
      question: "At what age should children start orthodontic treatment?",
      answer: "The American Association of Orthodontists recommends children have their first orthodontic evaluation by age 7, though treatment may not begin until later when more permanent teeth have erupted."
    },
    {
      question: "Do braces hurt?",
      answer: "You may experience some discomfort when braces are first applied and after adjustments. This is normal and usually subsides within a few days. Over-the-counter pain relievers can help manage any discomfort."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Orthodontics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Straighten your teeth and perfect your smile with our comprehensive orthodontic treatments. 
              From traditional braces to clear aligners, we offer solutions for all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Orthodontics?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Orthodontics is a specialized field of dentistry that focuses on correcting teeth and jaw alignment issues. 
                Our orthodontic treatments not only improve the appearance of your smile but also enhance your oral health 
                and overall quality of life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Traditional Metal Braces</li>
                    <li>• Clear Ceramic Braces</li>
                    <li>• Clear Aligners (Invisalign)</li>
                    <li>• Lingual Braces</li>
                    <li>• Retainers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Improved smile aesthetics</li>
                    <li>• Better oral hygiene</li>
                    <li>• Enhanced chewing function</li>
                    <li>• Reduced risk of dental problems</li>
                    <li>• Increased self-confidence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation with our orthodontic specialists today.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orthodontics;
