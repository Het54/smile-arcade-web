
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle, Sparkles, DollarSign } from 'lucide-react';

const Twinkle = () => {
  const packageIncludes = [
    'Professional dental consultation',
    'Basic teeth whitening treatment',
    'Oral hygiene instruction',
    'Post-treatment care kit',
    'Follow-up appointment',
    'Wedding day touch-up'
  ];

  const features = [
    {
      title: 'Gentle Whitening',
      description: 'Safe and effective whitening for a natural glow'
    },
    {
      title: 'Quick Results',
      description: 'See improvements in just one session'
    },
    {
      title: 'Wedding Day Ready',
      description: 'Perfect timing for your special day'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Twinkle Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A subtle, natural glow for your wedding day. Perfect for brides who want gentle enhancement with beautiful, natural-looking results.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <DollarSign className="h-6 w-6 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Starting from $299</span>
          </div>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Calendar className="mr-2 h-5 w-5" />
            Book Twinkle Package
          </Button>
        </div>

        {/* Package Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes Twinkle Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-pink-200">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-600">{feature.title}</CardTitle>
                  <CardDescription className="text-lg">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Package Includes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Your Twinkle Package Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packageIncludes.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm border border-pink-100">
                <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-pink-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Add Some Twinkle to Your Smile?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your Twinkle package consultation and discover how we can give you that perfect natural glow for your wedding day.
            </p>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Twinkle Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Twinkle;
