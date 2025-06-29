
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

const SuperOrganised = () => {
  const timeline = [
    {
      timeframe: '6 months before',
      treatments: ['Comprehensive dental examination', 'Professional cleaning', 'Orthodontic consultation if needed'],
      description: 'Start with a complete assessment and address any major issues'
    },
    {
      timeframe: '4 months before',
      treatments: ['Begin orthodontic treatment if needed', 'Gum disease treatment', 'Cavity fillings'],
      description: 'Address structural and health issues'
    },
    {
      timeframe: '2 months before',
      treatments: ['Teeth whitening treatment', 'Cosmetic bonding', 'Veneer placement if planned'],
      description: 'Focus on aesthetic improvements'
    },
    {
      timeframe: '2 weeks before',
      treatments: ['Final polish and touch-ups', 'Professional cleaning', 'Final whitening session'],
      description: 'Final preparations for your perfect smile'
    }
  ];

  const benefits = [
    'Comprehensive treatment planning',
    'Time for complex procedures',
    'Optimal healing between treatments',
    'Perfect timing for your wedding',
    'Stress-free preparation',
    'Best possible results'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Miss Super Organised
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Perfect for brides who plan everything months in advance! With plenty of time, we can create your dream wedding smile with comprehensive treatments and perfect timing.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Calendar className="mr-2 h-5 w-5" />
            Start Your Wedding Smile Journey
          </Button>
        </div>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Your Perfect Wedding Smile Timeline
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {timeline.map((phase, index) => (
              <Card key={index} className="border-l-4 border-pink-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-pink-600" />
                    <CardTitle className="text-xl text-pink-600">{phase.timeframe}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.treatments.map((treatment, treatmentIndex) => (
                      <li key={treatmentIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why This Plan Works for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm border border-pink-100">
                <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-pink-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Planning Your Perfect Smile?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your comprehensive consultation and let's create a personalized timeline for your wedding smile transformation.
            </p>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Planning Session
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuperOrganised;
