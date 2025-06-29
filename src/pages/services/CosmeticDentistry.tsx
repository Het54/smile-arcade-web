
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const CosmeticDentistry = () => {
  const faqs = [
    {
      question: "What is cosmetic dentistry?",
      answer: "Cosmetic dentistry focuses on improving the appearance of teeth, gums, and overall smile. It combines artistry with dental science to enhance the aesthetic aspects of your teeth while maintaining functionality."
    },
    {
      question: "What procedures are considered cosmetic dentistry?",
      answer: "Common cosmetic procedures include teeth whitening, veneers, bonding, crowns, inlays/onlays, dental implants, and orthodontics when used primarily for aesthetic improvement."
    },
    {
      question: "How long do cosmetic dental results last?",
      answer: "Results vary by procedure: teeth whitening lasts 6 months to 2 years, composite bonding 3-7 years, porcelain veneers 10-15 years, and cosmetic crowns 10-20 years with proper care."
    },
    {
      question: "Is cosmetic dentistry covered by insurance?",
      answer: "Most cosmetic procedures are not covered by dental insurance as they're considered elective. However, some treatments that also provide functional benefits may have partial coverage."
    },
    {
      question: "How do I choose the right cosmetic treatment?",
      answer: "During consultation, we'll assess your concerns, discuss your goals, examine your oral health, and recommend the most suitable treatments to achieve your desired smile transformation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cosmetic Dentistry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your smile with our comprehensive cosmetic dental treatments. 
              Combining artistry with advanced techniques for beautiful, natural-looking results.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Smile</h2>
              <p className="text-lg text-gray-600 mb-6">
                Cosmetic dentistry is the art and science of creating beautiful, confident smiles. 
                Our cosmetic treatments not only enhance the appearance of your teeth but also boost 
                your self-confidence and overall quality of life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Treatments</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional Teeth Whitening</li>
                    <li>• Porcelain Veneers</li>
                    <li>• Composite Bonding</li>
                    <li>• Cosmetic Crowns</li>
                    <li>• Smile Makeovers</li>
                    <li>• Gum Contouring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Enhanced smile aesthetics</li>
                    <li>• Improved self-confidence</li>
                    <li>• Natural-looking results</li>
                    <li>• Long-lasting improvements</li>
                    <li>• Customized treatment plans</li>
                    <li>• Minimal tooth preparation</li>
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
                Ready for Your Dream Smile?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a cosmetic consultation and discover your smile transformation options.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmeticDentistry;
