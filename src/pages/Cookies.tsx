import { PageTransition } from '../components/layout/PageTransition';

export function Cookies() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none text-text-muted">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              This Cookie Policy explains how NIC+ Technologies ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">1. What are cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">2. Why do we use cookies?</h3>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.
            </p>

            <h4 className="text-text-main font-semibold mt-6 mb-3">Essential Website Cookies:</h4>
            <p>
              These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
            </p>

            <h4 className="text-text-main font-semibold mt-6 mb-3">Analytics and Customization Cookies:</h4>
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
            </p>

            <h3 className="text-text-main font-bold mt-8 mb-4">3. How can I control cookies?</h3>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Banner that appears when you first visit our site.
            </p>
            <p>
              Additionally, you can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            
            <h3 className="text-text-main font-bold mt-8 mb-4">4. Updates to this policy</h3>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>

            <h3 className="text-text-main font-bold mt-8 mb-4">5. Contact Us</h3>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at info@nictechnologies.et.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
