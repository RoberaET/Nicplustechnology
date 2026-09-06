import { PageTransition } from '../components/layout/PageTransition';

export function Terms() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none text-text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the NIC+ Technologies website operated by NIC+ Technologies.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on NIC+ Technologies' website for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-text-main font-bold mt-8 mb-4">3. Disclaimer</h3>
            <p>
              The materials on NIC+ Technologies' website are provided on an 'as is' basis. NIC+ Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">4. Limitations</h3>
            <p>
              In no event shall NIC+ Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NIC+ Technologies' website.
            </p>

            <h3 className="text-text-main font-bold mt-8 mb-4">5. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Ethiopia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
