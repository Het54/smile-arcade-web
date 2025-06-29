
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const SmileMakeover = () => {
  const faqs = [
    {
      question: "What is a smile makeover?",
      answer: "A smile makeover is a comprehensive treatment plan that combines multiple cosmetic and restorative dental procedures to completely transform the appearance of your smile, addressing color, shape, size, alignment, and overall aesthetics."
    },
    {
      question: "How long does a smile makeover take?",
      answer: "The timeline varies depending on the treatments involved. Simple makeovers may take 2-4 weeks, while comprehensive cases involving orthodontics or implants can take 6 months to 2 years."
    },
    {
      question: "What procedures are included in a smile makeover?",
      answer: "Common procedures include teeth whitening, veneers, crowns, orthodontics, dental implants, gum reshaping, and tooth-colored fillings. The specific combination depends on your individual needs and goals."
    },
    {
      question: "How much does a smile makeover cost?",
      answer: "Costs vary widely based on the procedures included, complexity of the case, and geographic location. We provide detailed treatment plans with transparent pricing during your consultation."
    },
    {
      question: "Will my smile look natural?",
      answer: "Absolutely! We use advanced digital smile design technology and work closely with you to ensure your new smile looks natural, complements your facial features, and reflects your personality."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Smile Makeover
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your entire smile with our comprehensive makeover treatments. 
              From minor enhancements to complete reconstructions, achieve the smile of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Makeover Consultation
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Smile Transformation</h2>
              <p className="text-lg text-gray-600 mb-6">
                A smile makeover is more than just cosmetic dentistry—it's a comprehensive approach 
                to creating your perfect smile. We combine artistry, advanced technology, and multiple 
                treatment modalities to achieve stunning, natural-looking results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Makeover Components</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional Teeth Whitening</li>
                    <li>• Porcelain Veneers</li>
                    <li>• Cosmetic Crowns</li>
                    <li>• Orthodontic Treatment</li>
                    <li>• Dental Implants</li>
                    <li>• Gum Reshaping</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Considerations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Facial symmetry and proportions</li>
                    <li>• Tooth color and translucency</li>
                    <li>• Gum line and tissue health</li>
                    <li>• Bite alignment and function</li>
                    <li>• Personal style preferences</li>
                    <li>• Long-term maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Smile Makeover Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      1. Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Comprehensive exam, photos, and discussion of your smile goals and expectations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      2. Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Digital smile design and treatment planning with preview of your new smile.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      3. Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Step-by-step execution of treatment plan with regular progress evaluations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-600">
                      4. Maintenance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Ongoing care instructions and maintenance schedule to preserve your new smile.
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
                Start Your Smile Transformation
              </h3>
              <p className="text-gray-600 mb-6">
                Discover how a complete smile makeover can change your life. Schedule your consultation today.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Begin Your Makeover Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmileMakeover;
