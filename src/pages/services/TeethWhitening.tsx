
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const TeethWhitening = () => {
  const faqs = [
    {
      question: "How does professional teeth whitening work?",
      answer: "Professional whitening uses stronger bleaching agents (hydrogen peroxide or carbamide peroxide) applied under controlled conditions to break down stains and discoloration on tooth enamel."
    },
    {
      question: "How much whiter will my teeth get?",
      answer: "Most patients see 3-8 shades whiter teeth after professional treatment. Results vary based on the original tooth color, type of staining, and individual response to treatment."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Professional teeth whitening is safe when performed by dental professionals. Temporary sensitivity may occur but typically resolves within 24-48 hours after treatment."
    },
    {
      question: "How long do whitening results last?",
      answer: "Whitening results typically last 6 months to 2 years, depending on your diet, lifestyle habits (smoking, coffee, wine), and oral hygiene maintenance."
    },
    {
      question: "Who is not a candidate for teeth whitening?",
      answer: "Whitening may not be suitable for pregnant women, people with severe tooth sensitivity, extensive dental work, or certain types of intrinsic staining that don't respond to bleaching."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Teeth Whitening
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Achieve a brighter, more confident smile with our professional teeth whitening treatments. 
              Safe, effective, and dramatic results in just one visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Whitening Session
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Brighten Your Smile</h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional teeth whitening is one of the most popular and effective cosmetic dental 
                treatments available. Our advanced whitening systems can dramatically improve the color 
                of your teeth in a safe, comfortable environment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Whitening Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• In-Office Power Whitening</li>
                    <li>• Take-Home Whitening Kits</li>
                    <li>• Combination Treatments</li>
                    <li>• Touch-Up Treatments</li>
                    <li>• Maintenance Programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Causes of Staining</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Coffee, tea, and wine</li>
                    <li>• Tobacco use</li>
                    <li>• Aging and genetics</li>
                    <li>• Certain medications</li>
                    <li>• Poor oral hygiene</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Whitening Treatment Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-600">
                      In-Office Whitening
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Immediate results in 60-90 minutes</li>
                      <li>• Professional-strength whitening gel</li>
                      <li>• Gum protection and monitoring</li>
                      <li>• Up to 8 shades whiter</li>
                      <li>• Perfect for special events</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-600">
                      Take-Home Kits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Custom-fitted whitening trays</li>
                      <li>• Professional whitening gel</li>
                      <li>• Gradual whitening over 1-2 weeks</li>
                      <li>• Convenience of home treatment</li>
                      <li>• Long-term maintenance option</li>
                    </ul>
                  </CardContent>
                </Card>
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
                Ready for a Brighter Smile?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule your professional whitening consultation and discover your whitest smile potential.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Your Whitening Treatment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeethWhitening;
