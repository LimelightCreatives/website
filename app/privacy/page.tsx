import { LegalPage } from "@/components/LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal / Privacy"
      title="Privacy policy."
      intro="This Privacy Policy explains how we collect, use, and protect information when you visit or interact with our website."
      lastUpdated="31 August 2026"
      sections={[
        {
          title: "Who we are",
          content: (
            <>
              <p>
                Ontik is a filmmaking organisation supporting young filmmakers
                and creatives. This Privacy Policy applies to information
                collected through our website and related services.
              </p>

              <p className="mt-6">
                For the purposes of this policy, &quot;we&quot;, &quot;us&quot;,
                and &quot;our&quot; refer to Ontik.
              </p>
            </>
          ),
        },

        {
          title: "Information we collect",
          content: (
            <>
              <p>
                We may collect information that you voluntarily provide to us,
                such as your name, email address, and other information you
                provide when contacting us, applying to participate in our
                programs, or otherwise interacting with our website.
              </p>

              <p className="mt-6">
                We may also automatically collect limited technical information
                when you use our website, such as your IP address, browser
                type, device information, pages visited, and general usage
                information.
              </p>
            </>
          ),
        },

        {
          title: "How we use your information",
          content: (
            <>
              <p>
                We use information we collect to operate and improve our
                website, respond to enquiries, administer applications and
                opportunities, communicate with you, and provide the services
                and information you request.
              </p>

              <p className="mt-6">
                We may also use information to maintain the security of our
                website, prevent misuse, and comply with applicable legal
                obligations.
              </p>
            </>
          ),
        },

        {
          title: "Sharing information",
          content: (
            <>
              <p>
                We do not sell your personal information. We may share
                information with trusted service providers where necessary to
                operate our website or provide our services.
              </p>

              <p className="mt-6">
                We may also disclose information where required to do so by law,
                to protect our rights, or to protect the safety of our users or
                others.
              </p>
            </>
          ),
        },

        {
          title: "Cookies",
          content: (
            <>
              <p>
                Our website may use cookies and similar technologies to make
                the website function correctly, understand how visitors use the
                website, and improve your experience.
              </p>

              <p className="mt-6">
                Where required, we will ask for your consent before using
                non-essential cookies or similar technologies.
              </p>
            </>
          ),
        },

        {
          title: "Your rights",
          content: (
            <>
              <p>
                Depending on where you live, you may have rights relating to
                your personal information. These may include the right to
                request access to, correction of, or deletion of your personal
                information.
              </p>

              <p className="mt-6">
                If you would like to exercise a privacy right or ask a question
                about how your information is handled, please contact us.
              </p>
            </>
          ),
        },

        {
          title: "Data security",
          content: (
            <p>
              We take reasonable measures to protect information we hold from
              unauthorised access, disclosure, alteration, or destruction.
              However, no method of transmitting or storing information online
              can be guaranteed to be completely secure.
            </p>
          ),
        },

        {
          title: "Changes to this policy",
          content: (
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our practices, services, or legal obligations. When we
              make changes, we will update the date shown at the beginning of
              this policy.
            </p>
          ),
        },

        {
          title: "Contact",
          content: (
            <>
              <p>
                If you have questions about this Privacy Policy or how we
                handle your information, please get in touch with us.
              </p>

              <p className="mt-6">
                Email:{" "}
                <a
                  href="mailto:hello@ontik.com"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  hello@ontik.com
                </a>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}