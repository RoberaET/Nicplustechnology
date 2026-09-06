import { PageTransition } from '../components/layout/PageTransition';

export function Privacy() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              NIC+ Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by NIC+ Technologies.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">1. Information We Collect</h3>
            <p>
              We collect information from you when you visit our website, contact us, or engage with our services. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company details provided via forms.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our website, collected automatically via cookies.</li>
            </ul>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">2. How We Use Your Information</h3>
            <p>
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To personalize your experience</li>
              <li>To improve our website</li>
              <li>To improve customer service</li>
              <li>To process transactions</li>
              <li>To send periodic emails</li>
            </ul>

            <h3 className="text-text-main font-bold mt-8 mb-4">3. Security</h3>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">4. Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy, you may contact us using the information on our Contact page.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
