
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle, Monitor, Zap } from 'lucide-react';

const ComputerGeek = () => {
  const techSolutions = [
    {
      title: 'Digital Smile Design',
      description: 'Advanced software shows your new smile before treatment',
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      features: ['3D visualization', 'Precise measurements', 'Predictable results']
    },
    {
      title: 'Laser Dentistry',
      description: 'Cutting-edge laser technology for precise treatments',
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      features: ['Minimal discomfort', 'Faster healing', 'High precision']
    }
  ];

  const treatments = [
    'Digital impressions with 3D scanning',
    'Computer-guided teeth whitening',
    'Laser gum contouring',
    'CAD/CAM ceramic restorations',
    'Digital bite analysis',
    'AI-assisted treatment planning'
  ];

  const benefits = [
    'Data-driven treatment decisions',
    'Precise and predictable outcomes',
    'Minimal treatment time',
    'Advanced technology integration',
    'Detailed progress tracking',
    'Efficient appointment scheduling'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Computer Geek
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Perfect for tech-savvy grooms who appreciate innovation and efficiency! Experience the latest in dental technology for your wedding smile transformation.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="mr-2 h-5 w-5" />
            Explore Tech Solutions
          </Button>
        </div>

        {/* Tech Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Advanced Technology Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {techSolutions.map((solution, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {solution.icon}
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Treatment Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            High-Tech Treatment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{treatment}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why This Approach Works for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm border border-blue-100">
                <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future of Dentistry?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule your high-tech consultation and discover how advanced dental technology can create your perfect wedding smile efficiently and precisely.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Book Tech Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComputerGeek;
