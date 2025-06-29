
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const DentalVeneers = () => {
  const faqs = [
    {
      question: "What are dental veneers?",
      answer: "Dental veneers are thin, custom-made shells made of porcelain or composite resin that are bonded to the front surface of teeth to improve their appearance, color, shape, or size."
    },
    {
      question: "What's the difference between porcelain and composite veneers?",
      answer: "Porcelain veneers are more durable, stain-resistant, and natural-looking but cost more. Composite veneers are less expensive, applied in one visit, but may not last as long as porcelain."
    },
    {
      question: "How long do veneers last?",
      answer: "Porcelain veneers typically last 10-15 years with proper care, while composite veneers last 5-7 years. Longevity depends on oral hygiene, diet, and habits like teeth grinding."
    },
    {
      question: "Are veneers reversible?",
      answer: "Traditional veneers require removing a small amount of tooth enamel, making them irreversible. However, minimal-prep or no-prep veneers may be reversible depending on the amount of tooth preparation required."
    },
    {
      question: "What dental issues can veneers fix?",
      answer: "Veneers can address discolored teeth, worn down teeth, chipped or broken teeth, misaligned or uneven teeth, gaps between teeth, and teeth that are too small or large."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental Veneers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your smile instantly with custom-made dental veneers. 
              Achieve the perfect smile you've always wanted with natural-looking, durable results.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect Your Smile with Veneers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Dental veneers are one of the most popular cosmetic dental treatments, offering an 
                immediate transformation for your smile. These ultra-thin shells are custom-designed 
                to cover the front surface of your teeth, creating a flawless, natural appearance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Veneers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Porcelain Veneers</li>
                    <li>• Composite Resin Veneers</li>
                    <li>• Minimal-Prep Veneers</li>
                    <li>• No-Prep Veneers</li>
                    <li>• Instant Veneers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal Candidates</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Discolored or stained teeth</li>
                    <li>• Chipped or worn teeth</li>
                    <li>• Misaligned or crooked teeth</li>
                    <li>• Gaps between teeth</li>
                    <li>• Irregularly shaped teeth</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Veneer Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      Step 1: Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Comprehensive examination, discussion of goals, and treatment planning with digital smile preview.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      Step 2: Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Minimal tooth preparation, impressions, and temporary veneers while permanent ones are crafted.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      Step 3: Placement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Precise bonding of custom veneers, final adjustments, and polishing for perfect fit and appearance.
                    </p>
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
                Transform Your Smile Today
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how dental veneers can give you the perfect smile you've always dreamed of.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Your Veneer Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalVeneers;
