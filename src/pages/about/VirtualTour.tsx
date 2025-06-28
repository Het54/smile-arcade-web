
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useState } from 'react';

const VirtualTour = () => {
  const [activeView, setActiveView] = useState('map');

  // Dummy coordinates for San Francisco (replace with actual clinic location)
  const clinicLocation = {
    lat: 37.7749,
    lng: -122.4194,
    address: "123 Dental Avenue, San Francisco, CA 94102"
  };

  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Virtual Tour & Location
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our clinic virtually and find us easily with our interactive location guide. 
              Take a 360° tour of our facilities before your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveView('map')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeView === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MapPin className="h-4 w-4 inline mr-2" />
              Location & Directions
            </button>
            <button
              onClick={() => setActiveView('tour')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeView === 'tour'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Navigation className="h-4 w-4 inline mr-2" />
              Virtual 360° Tour
            </button>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      {activeView === 'map' && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-0">
                    {/* Replace this div with actual Google Maps embed */}
                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">Google Maps Integration</h3>
                        <p className="text-gray-500 text-sm max-w-md">
                          Replace this section with Google Maps embed using your clinic's actual coordinates. 
                          Add your Google Maps API key to enable interactive maps.
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg text-left">
                          <h4 className="font-semibold text-blue-900 mb-2">Integration Code:</h4>
                          <code className="text-xs text-blue-800 bg-white p-2 rounded block">
                            {`<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...YOUR_EMBED_CODE..."
  width="100%" 
  height="400" 
  frameBorder="0"
  allowFullScreen
></iframe>`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600 text-sm">{clinicLocation.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600 text-sm">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Emergency</p>
                          <p className="text-gray-600 text-sm">(555) 123-4568</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-700">{schedule.day}</span>
                          <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-red-600' : 'text-gray-600'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Parking & Access</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Free parking available on-site</li>
                      <li>• Wheelchair accessible entrance</li>
                      <li>• Public transportation nearby</li>
                      <li>• Elevator access to all floors</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Virtual Tour Section */}
      {activeView === 'tour' && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-0">
                    {/* Replace this div with actual 360° virtual tour embed */}
                    <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Navigation className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">360° Virtual Tour</h3>
                        <p className="text-gray-600 text-sm max-w-md mb-4">
                          Integrate your 360° virtual tour here using services like Matterport, 
                          Google Street View, or custom 360° photography.
                        </p>
                        <div className="bg-white p-4 rounded-lg text-left max-w-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Integration Options:</h4>
                          <ul className="text-xs text-gray-700 space-y-1">
                            <li>• Matterport 3D Tour embed</li>
                            <li>• Google Street View integration</li>
                            <li>• Custom 360° photo viewer</li>
                            <li>• Interactive hotspots for room navigation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900">Reception Area</h4>
                        <p className="text-sm text-blue-700">Welcoming entrance with comfortable seating</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900">Treatment Rooms</h4>
                        <p className="text-sm text-blue-700">Modern equipment and calming environment</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900">Sterilization Center</h4>
                        <p className="text-sm text-blue-700">State-of-the-art safety protocols</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900">Recovery Area</h4>
                        <p className="text-sm text-blue-700">Comfortable post-treatment space</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Tour Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Interactive 360° navigation</li>
                      <li>• High-resolution imagery</li>
                      <li>• Equipment close-up views</li>
                      <li>• Room-to-room transitions</li>
                      <li>• Mobile device compatible</li>
                      <li>• VR headset support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Visit Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Now that you've explored our facility, we'd love to welcome you in person. 
            Schedule your appointment today!
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;
