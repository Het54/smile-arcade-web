
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingSmile = () => {
  const brideTypes = [
    {
      title: 'Miss Super Organised',
      description: 'You plan everything months in advance and want the perfect smile timeline',
      image: '/placeholder.svg',
      path: '/wedding-smile/super-organised'
    },
    {
      title: 'Miss Organised',
      description: 'You like to plan ahead but appreciate flexible treatment options',
      image: '/placeholder.svg',
      path: '/wedding-smile/organised'
    },
    {
      title: 'Miss Not Long To Go Now',
      description: 'Your wedding is approaching and you need effective quick solutions',
      image: '/placeholder.svg',
      path: '/wedding-smile/not-long-to-go'
    },
    {
      title: 'Miss Last Minute',
      description: 'Time is running out but you still want that perfect wedding smile',
      image: '/placeholder.svg',
      path: '/wedding-smile/last-minute'
    }
  ];

  const groomTypes = [
    {
      title: 'The Computer Geek',
      description: 'Tech-savvy and analytical, you want efficient smile solutions',
      image: '/placeholder.svg',
      path: '/wedding-smile/computer-geek'
    },
    {
      title: 'The Free Spirit Guy',
      description: 'Easy-going and flexible, you prefer simple and natural treatments',
      image: '/placeholder.svg',
      path: '/wedding-smile/free-spirit'
    },
    {
      title: 'Mr. Intellectual',
      description: 'Detail-oriented and research-focused, you want comprehensive options',
      image: '/placeholder.svg',
      path: '/wedding-smile/intellectual'
    }
  ];

  const brideOffers = [
    {
      title: 'Twinkle',
      description: 'Basic teeth whitening for a subtle, natural glow',
      image: '/placeholder.svg',
      path: '/wedding-smile/offers/twinkle'
    },
    {
      title: 'Glitter',
      description: 'Enhanced whitening with minor cosmetic improvements',
      image: '/placeholder.svg',
      path: '/wedding-smile/offers/glitter'
    },
    {
      title: 'Sparkle',
      description: 'Complete smile makeover with comprehensive treatments',
      image: '/placeholder.svg',
      path: '/wedding-smile/offers/sparkle'
    }
  ];

  const groomOffers = [
    {
      title: 'Two Pack Smile',
      description: 'Essential dental care and basic whitening',
      image: '/placeholder.svg',
      path: '/wedding-smile/offers/two-pack'
    },
    {
      title: 'Four Pack Smile',
      description: 'Comprehensive care with advanced whitening',
      image: '/placeholder.svg',
      path: '/wedding-smile/offers/four-pack'
    },
    {
      title: 'Six Pack Smile',
      description: 'Premium smile transformation package',
      image: '/placeholder.svg',
      path: '/wedding-smile/offers/six-pack'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <Sparkles className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Perfect Wedding-Ready Smile
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Make your special day even more memorable with a radiant smile. Discover personalized treatments designed for brides and grooms preparing for their big day.
          </p>
        </div>

        {/* Bride Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Which Type of Bride Are You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brideTypes.map((bride, index) => (
              <Link key={index} to={bride.path}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105">
                  <CardHeader>
                    <img 
                      src={bride.image} 
                      alt={bride.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">
                      {bride.title}
                    </CardTitle>
                    <CardDescription>{bride.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-pink-600 group-hover:text-pink-700">
                      <span className="text-sm font-medium">Discover Your Plan</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Groom Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Which Type of Groom Are You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {groomTypes.map((groom, index) => (
              <Link key={index} to={groom.path}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105">
                  <CardHeader>
                    <img 
                      src={groom.image} 
                      alt={groom.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {groom.title}
                    </CardTitle>
                    <CardDescription>{groom.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">Find Your Solution</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Take Advantage of Our Special Offers
          </h2>
          
          {/* Bride Offers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-pink-600 mb-8">For Brides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {brideOffers.map((offer, index) => (
                <Link key={index} to={offer.path}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 border-pink-200">
                    <CardHeader>
                      <img 
                        src={offer.image} 
                        alt={offer.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <CardTitle className="text-xl group-hover:text-pink-600 transition-colors">
                        {offer.title}
                      </CardTitle>
                      <CardDescription>{offer.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-pink-600 hover:bg-pink-700">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Groom Offers */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">For Grooms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {groomOffers.map((offer, index) => (
                <Link key={index} to={offer.path}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 border-blue-200">
                    <CardHeader>
                      <img 
                        src={offer.image} 
                        alt={offer.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {offer.title}
                      </CardTitle>
                      <CardDescription>{offer.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeddingSmile;
