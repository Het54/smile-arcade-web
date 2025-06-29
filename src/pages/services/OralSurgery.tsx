
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const OralSurgery = () => {
  const faqs = [
    {
      question: "What is oral and maxillofacial surgery?",
      answer: "Oral and maxillofacial surgery is a specialized branch of dentistry that involves surgical procedures of the mouth, jaws, face, and neck. It includes procedures like tooth extractions, dental implants, jaw surgery, and treatment of oral diseases."
    },
    {
      question: "When is oral surgery necessary?",
      answer: "Oral surgery may be needed for impacted wisdom teeth, severe tooth decay, jaw alignment issues, oral cancer, facial trauma, or when preparing for dental implants or orthodontic treatment."
    },
    {
      question: "Is oral surgery painful?",
      answer: "Modern oral surgery techniques and anesthesia options ensure minimal discomfort during procedures. Post-operative pain is manageable with prescribed medications and proper aftercare instructions."
    },
    {
      question: "How long is the recovery time?",
      answer: "Recovery time varies depending on the procedure. Simple extractions may heal in a few days, while complex surgeries like jaw reconstruction can take several weeks to months for complete healing."
    },
    {
      question: "What should I expect during recovery?",
      answer: "Expect some swelling, bruising, and discomfort for the first few days. Follow all post-operative instructions, take prescribed medications, eat soft foods, and avoid strenuous activities as directed."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Oral & Maxillofacial Surgery
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced surgical solutions for complex oral health issues. Our experienced oral surgeons 
              provide safe, effective treatments using the latest techniques and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Oral Surgery Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our oral and maxillofacial surgery services encompass a wide range of procedures designed to treat 
                conditions affecting the mouth, jaws, face, and surrounding structures. We combine expertise with 
                compassionate care to ensure optimal outcomes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Procedures</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wisdom Tooth Extraction</li>
                    <li>• Dental Implant Placement</li>
                    <li>• Bone Grafting</li>
                    <li>• Jaw Surgery (Orthognathic)</li>
                    <li>• Oral Pathology Treatment</li>
                    <li>• Facial Trauma Repair</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Techniques</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3D Imaging & Planning</li>
                    <li>• Minimally Invasive Surgery</li>
                    <li>• Sedation Options</li>
                    <li>• Laser Surgery</li>
                    <li>• Computer-Guided Procedures</li>
                    <li>• Same-Day Procedures</li>
                  </ul>
                </div>
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
                Need Oral Surgery Consultation?
              </h3>
              <p className="text-gray-600 mb-6">
                Our experienced oral surgeons are here to help with advanced surgical solutions.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OralSurgery;
