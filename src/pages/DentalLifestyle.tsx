
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Heart, Utensils, Brush, Shield } from 'lucide-react';

const DentalLifestyle = () => {
  const tips = [
    {
      icon: <Brush className="h-8 w-8 text-blue-600" />,
      title: "Daily Oral Hygiene",
      description: "Brush twice daily with fluoride toothpaste, floss regularly, and use mouthwash to maintain optimal oral health."
    },
    {
      icon: <Utensils className="h-8 w-8 text-green-600" />,
      title: "Nutrition for Teeth",
      description: "Eat calcium-rich foods, limit sugary snacks, and stay hydrated to support strong teeth and healthy gums."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Preventive Care",
      description: "Regular dental checkups, cleanings, and early intervention prevent serious dental problems."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Lifestyle Habits",
      description: "Avoid tobacco, limit alcohol, wear mouthguards during sports, and manage stress for better oral health."
    }
  ];

  const articles = [
    {
      title: "The Complete Guide to Daily Oral Hygiene",
      excerpt: "Master the fundamentals of daily dental care with proper brushing, flossing, and mouthwash techniques for optimal oral health.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "5 min read"
    },
    {
      title: "Foods That Strengthen Your Teeth Naturally",
      excerpt: "Discover the best foods for dental health and learn how nutrition plays a crucial role in maintaining strong teeth and gums.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "4 min read"
    },
    {
      title: "Understanding the Connection Between Oral and Overall Health",
      excerpt: "Learn how your oral health impacts your overall well-being and why maintaining good dental hygiene is crucial for total body health.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "6 min read"
    },
    {
      title: "Breaking Bad Habits That Damage Your Teeth",
      excerpt: "Identify and overcome common habits that harm your teeth, from teeth grinding to using teeth as tools.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      readTime: "3 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental Lifestyle
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the secrets to maintaining optimal oral health throughout your life. 
              Learn about nutrition, habits, and lifestyle choices that keep your smile healthy and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Health Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Four Pillars of Dental Health
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tips.map((tip, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {tip.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Latest Dental Health Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs text-gray-600">
                      {article.readTime}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Daily Dental Lifestyle Guide
            </h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Morning Routine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Brush teeth for 2 minutes with fluoride toothpaste</li>
                    <li>• Use proper brushing technique (circular motions, gentle pressure)</li>
                    <li>• Clean your tongue to remove bacteria</li>
                    <li>• Consider mouthwash for additional protection</li>
                    <li>• Eat a balanced breakfast rich in calcium and vitamins</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Throughout the Day
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stay hydrated with water to wash away bacteria</li>
                    <li>• Choose tooth-friendly snacks (nuts, cheese, vegetables)</li>
                    <li>• Avoid constant snacking and sugary drinks</li>
                    <li>• Chew sugar-free gum after meals to stimulate saliva</li>
                    <li>• Be mindful of teeth grinding or jaw clenching</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Evening Routine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Floss between all teeth to remove plaque and debris</li>
                    <li>• Brush teeth thoroughly before bed</li>
                    <li>• Use antibacterial mouthwash if recommended</li>
                    <li>• Avoid eating or drinking (except water) after brushing</li>
                    <li>• Consider a nightguard if you grind your teeth</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Improve Your Dental Lifestyle?
              </h3>
              <p className="text-gray-600 mb-6">
                Get personalized advice and support for maintaining optimal oral health throughout your life.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Your Wellness Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalLifestyle;
