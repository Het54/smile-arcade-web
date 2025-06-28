
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const EquipmentDetail = () => {
  const { equipmentSlug } = useParams();

  const equipmentData: Record<string, any> = {
    'digital-xray-system': {
      name: "Digital X-Ray System",
      image: "https://images.unsplash.com/photo-1583912267550-3351371a2716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our state-of-the-art digital X-ray system represents the latest advancement in dental radiography technology. This system provides exceptional image quality while significantly reducing radiation exposure for our patients.",
      benefits: [
        "90% less radiation exposure compared to traditional film X-rays",
        "Instant image processing - no waiting time",
        "Enhanced image quality for better diagnosis",
        "Environmentally friendly - no chemical processing",
        "Images can be easily shared and stored digitally",
        "Allows for better patient education with clear visuals"
      ],
      technicalSpecs: [
        "High-resolution digital sensors",
        "Advanced image processing software",
        "DICOM-compliant image storage",
        "Network connectivity for easy sharing",
        "Automatic exposure control"
      ],
      applications: [
        "Routine dental checkups",
        "Cavity detection",
        "Root canal planning",
        "Orthodontic assessment",
        "Periodontal evaluation",
        "Implant planning"
      ]
    },
    'cad-cam-system': {
      name: "CAD/CAM System",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our Computer-Aided Design and Computer-Aided Manufacturing (CAD/CAM) system allows us to create precise dental restorations in a single visit. This revolutionary technology eliminates the need for temporary crowns and multiple appointments.",
      benefits: [
        "Same-day crowns and restorations",
        "No temporary crowns needed",
        "Perfect fit with digital precision",
        "Natural-looking ceramic materials",
        "Reduced chair time and appointments",
        "Long-lasting and durable restorations"
      ],
      technicalSpecs: [
        "3D optical scanning technology",
        "Advanced CAD software",
        "High-precision milling unit",
        "Multiple ceramic block options",
        "Color matching system"
      ],
      applications: [
        "Dental crowns",
        "Inlays and onlays",
        "Veneers",
        "Bridges",
        "Implant crowns"
      ]
    },
    'laser-therapy-system': {
      name: "Laser Therapy System",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our soft tissue laser system provides minimally invasive treatment options for various dental procedures. This advanced technology offers precise, comfortable treatments with faster healing times.",
      benefits: [
        "Virtually painless procedures",
        "Minimal bleeding and swelling",
        "Faster healing and recovery",
        "Reduced need for anesthesia",
        "Precise tissue removal",
        "Sterilization of treatment area"
      ],
      technicalSpecs: [
        "Diode laser technology",
        "Multiple wavelength options",
        "Fiber optic delivery system",
        "Adjustable power settings",
        "Safety features and protocols"
      ],
      applications: [
        "Gum disease treatment",
        "Soft tissue surgery",
        "Crown lengthening",
        "Frenectomy procedures",
        "Lesion removal",
        "Periodontal therapy"
      ]
    },
    '3d-cone-beam-scanner': {
      name: "3D Cone Beam Scanner",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our 3D Cone Beam CT scanner provides detailed three-dimensional images of your teeth, soft tissues, nerve pathways, and bone in a single scan. This advanced imaging technology is essential for complex treatment planning.",
      benefits: [
        "Comprehensive 3D visualization",
        "Precise measurements and planning",
        "Improved surgical accuracy",
        "Better patient outcomes",
        "Reduced treatment time",
        "Enhanced safety in procedures"
      ],
      technicalSpecs: [
        "High-resolution 3D imaging",
        "Low radiation dose",
        "Fast scan times",
        "Multiple field of view options",
        "Advanced reconstruction software"
      ],
      applications: [
        "Dental implant planning",
        "Orthodontic assessment",
        "TMJ evaluation",
        "Airway analysis",
        "Oral surgery planning",
        "Endodontic procedures"
      ]
    },
    'intraoral-scanner': {
      name: "Intraoral Scanner",
      image: "https://images.unsplash.com/photo-1609052118796-c29692bcba01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our digital intraoral scanner creates precise 3D models of your teeth and gums without the need for traditional impression materials. This comfortable, accurate technology improves treatment planning and patient experience.",
      benefits: [
        "No messy impression materials",
        "Immediate digital models",
        "Higher accuracy than traditional impressions",
        "Comfortable patient experience",
        "Faster turnaround times",
        "Environmentally friendly"
      ],
      technicalSpecs: [
        "High-definition 3D scanning",
        "True color capture",
        "Real-time visualization",
        "Cloud-based storage",
        "CAD/CAM integration"
      ],
      applications: [
        "Crown and bridge impressions",
        "Orthodontic treatment planning",
        "Invisalign therapy",
        "Implant restorations",
        "Study models",
        "Progress monitoring"
      ]
    },
    'ultrasonic-scalers': {
      name: "Ultrasonic Scalers",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Our advanced ultrasonic scaling system uses high-frequency vibrations to efficiently remove plaque, tartar, and bacteria from your teeth and gums. This technology provides thorough cleaning with maximum patient comfort.",
      benefits: [
        "Efficient plaque and tartar removal",
        "Gentle on tooth enamel",
        "Reduced treatment time",
        "Comfortable patient experience",
        "Antimicrobial action",
        "Better access to difficult areas"
      ],
      technicalSpecs: [
        "Multiple frequency settings",
        "Interchangeable tips",
        "Adjustable power levels",
        "Irrigation system",
        "Ergonomic design"
      ],
      applications: [
        "Routine dental cleanings",
        "Periodontal therapy",
        "Root planing",
        "Implant maintenance",
        "Stain removal",
        "Calculus removal"
      ]
    }
  };

  const equipment = equipmentData[equipmentSlug || ''];

  if (!equipment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Equipment Not Found</h1>
          <Link to="/about/facility" className="text-blue-600 hover:text-blue-800">
            ← Back to Facility
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            to="/about/facility" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Facility
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {equipment.name}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {equipment.description}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {equipment.benefits.slice(0, 6).map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <ul className="space-y-2">
                  {equipment.technicalSpecs.map((spec: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                <ul className="space-y-2">
                  {equipment.applications.map((application: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience Advanced Dental Technology
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today to experience the benefits of our state-of-the-art equipment.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default EquipmentDetail;
