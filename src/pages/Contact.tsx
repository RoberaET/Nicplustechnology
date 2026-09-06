import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ContactForm } from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-tech-gradient opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            title="Get in Touch"
            subtitle="Request a professional assessment and technical proposal for your next IT project."
            badge="CONTACT US"
          />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ContactForm isQuote={true} />
            </div>
            
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-2xl font-bold text-text-main mb-6">Contact Information</h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Our engineering team is ready to discuss your technology infrastructure requirements. Reach out directly or fill out the form for a detailed quote.
                </p>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-surface border border-border p-3 rounded-lg mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-main font-semibold mb-1">Office Location</h4>
                      <p className="text-text-muted">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-surface border border-border p-3 rounded-lg mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-main font-semibold mb-1">Phone Number</h4>
                      <p className="text-text-muted">+251 941552458</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-surface border border-border p-3 rounded-lg mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-main font-semibold mb-1">Email Address</h4>
                      <p className="text-text-muted">info@nictechnologies.et</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-surface border border-border p-3 rounded-lg mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-main font-semibold mb-1">Business Hours</h4>
                      <p className="text-text-muted">Monday - Friday: 8:00 AM - 5:00 PM<br/>Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
