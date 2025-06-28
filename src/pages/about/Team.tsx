
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Chief Dental Officer & Orthodontist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Johnson has over 15 years of experience in orthodontics and cosmetic dentistry. She graduated from Harvard School of Dental Medicine and specializes in Invisalign treatments and smile makeovers.",
      credentials: ["DDS - Harvard School of Dental Medicine", "Invisalign Certified", "American Board of Orthodontics"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Oral & Maxillofacial Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Chen is a board-certified oral surgeon with expertise in dental implants, wisdom tooth extraction, and corrective jaw surgery. He has performed over 3,000 successful procedures.",
      credentials: ["DDS - UCLA School of Dentistry", "Oral Surgery Residency - UCSF", "Board Certified Oral Surgeon"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1594824506080-d3ac3e8fa4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Rodriguez specializes in pediatric dentistry and has a gentle approach that helps children feel comfortable during their dental visits. She's passionate about early dental education.",
      credentials: ["DDS - Stanford School of Medicine", "Pediatric Dentistry Residency", "Child Psychology Certification"]
    },
    {
      id: 4,
      name: "Lisa Thompson",
      title: "Senior Dental Hygienist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Lisa has been with The Dental Arcade for 8 years and is known for her thorough cleanings and patient education. She holds advanced certifications in periodontal therapy.",
      credentials: ["RDH - Dental Hygiene Program", "Local Anesthesia Certification", "Periodontal Therapy Specialist"]
    },
    {
      id: 5,
      name: "Maria Santos",
      title: "Practice Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Maria oversees all administrative operations and ensures every patient has a smooth experience from scheduling to treatment completion. She speaks English, Spanish, and Portuguese.",
      credentials: ["Healthcare Administration Degree", "5+ Years Practice Management", "Multilingual Patient Care"]
    },
    {
      id: 6,
      name: "David Kim",
      title: "Dental Technician",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "David creates custom crowns, bridges, and dentures in our on-site lab. His attention to detail ensures perfect fit and natural-looking results for every patient.",
      credentials: ["Certified Dental Laboratory Technician", "CAD/CAM Specialist", "15+ Years Experience"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with the highest quality dental care 
              in a comfortable and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Credentials:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.credentials.map((credential, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your consultation today and experience personalized dental care.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
