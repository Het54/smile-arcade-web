
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';
import { ToothScene } from '@/components/3d/ToothScene';
import { Suspense } from 'react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Perfect
                <span className="text-blue-600 block">Smile Awaits</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Experience exceptional dental care with cutting-edge technology and compassionate service. 
                Book your smile consultation today and discover the difference quality dentistry makes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Interactive 3D Tooth */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Friendly Tooth!</h3>
                <p className="text-gray-600">Hover and click to interact</p>
              </div>
              <Suspense fallback={
                <div className="h-96 w-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-gray-500">Loading 3D Experience...</div>
                </div>
              }>
                <ToothScene />
              </Suspense>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">5.0</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Excellent Reviews</div>
                  <div className="text-xs text-gray-500">Google & Yelp</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Latest Technology</div>
                  <div className="text-xs text-gray-500">State-of-the-art equipment</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
