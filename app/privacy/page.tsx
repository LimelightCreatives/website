import { LegalPage } from "@/components/LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal / Privacy"
      title="Privacy policy."
      intro="This privacy policy outlines your rights and obligations in relation to the handling of your data."
      lastUpdated="31 August 2026"
      sections={[
        {
          title: "In summary",
          content: (
            <>
              <p>
                We believe in collecting as little data as possible, and only
                what is needed to run Limelight Creatives&apos; programs,
                services, and events.
              </p>

              <p className="mt-6">
                We do not, and never will, sell your personal information.
              </p>

              <p className="mt-6">
                Code used in our events or online is 100% open-source for
                transparency and is available on{" "}
                <a
                  href="https://github.com/LimelightCreatives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  GitHub
                </a>
                .
              </p>

              <p className="mt-6">
                You may decline to share certain information with Limelight
                Creatives. That is completely fine. You can still use any of
                our services that do not require that information.
              </p>
            </>
          ),
        },

        {
          title: "Who we are",
          content: (
            <>
              <p>
                Limelight Creatives (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) is committed to protecting the personal
                information you share with us through our services, including
                our websites, applications, programs, and events.
              </p>

              <p className="mt-6">
                This Privacy Policy applies to products and services provided
                by Limelight Creatives through{" "}
                <a
                  href="https://limelightcreatives.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  limelightcreatives.org
                </a>
                , sites operated under Limelight Creatives or its affiliates,
                applications, services, and events operated by Limelight
                Creatives.
              </p>

              <p className="mt-6">
                Limelight Creatives currently operates exclusively in Australia
                and complies with the Office of the Australian Information
                Commissioner (OAIC) and the Australian Privacy Principles (APPs).
                As we expand our offerings globally, we may revise portions of
                this Privacy Policy to comply with applicable laws and standards
                in other jurisdictions.
              </p>
            </>
          ),
        },

        {
          title: "What is personal information?",
          content: (
            <p>
              Personal information is information or an opinion that identifies
              an individual. Examples of personal information we may collect
              include names, addresses, email addresses, and phone numbers.
            </p>
          ),
        },

        {
          title: "Information we collect",
          content: (
            <>
              <p>
                You may share personal information with us when using Limelight
                Creatives&apos; services. This may happen when setting up an
                account, registering for a program, making a donation, or taking
                part in activities that are public or intended to be public in
                nature, such as sharing a project or participating in a
                community discussion.
              </p>

              <p className="mt-6">
                Depending on how you interact with us, the information you
                provide may include your name, email address, home address,
                phone number, date of birth, and parent or guardian contact
                details.
              </p>
            </>
          ),
        },

        {
          title: "How we collect information",
          content: (
            <>
              <p>
                <strong>Information you provide.</strong> When you register for
                a service, sign up for a program, make a donation, attend an
                information session, or otherwise use our services, you may
                provide personal information to us.
              </p>

              <p className="mt-6">
                <strong>Information collected automatically.</strong> When you
                use our website or open our emails, we may automatically collect
                limited technical information, such as your IP address, device
                information, and browser type.
              </p>

              <p className="mt-6">
                <strong>In-person events.</strong> Limelight Creatives events
                may be photographed, recorded, or streamed by us. These
                materials may be used in marketing and promotional materials,
                including on social media or in print media.
              </p>
            </>
          ),
        },

        {
          title: "How we use your information",
          content: (
            <>
              <p>
                <strong>Running our programs.</strong> We use information to
                operate, maintain, and improve our services and programs.
              </p>

              <p className="mt-6">
                <strong>Communicating with you.</strong> We may use your contact
                details to communicate with you about programs, events, updates,
                news, and other information relating to Limelight Creatives.
              </p>

              <p className="mt-6">
                <strong>Meeting legal requirements.</strong> Some information
                may be necessary for us to comply with Australian law or respond
                to a court order or other lawful government request.
              </p>
            </>
          ),
        },

        {
          title: "Sharing information",
          content: (
            <>
              <p>
                We do not sell your personal information.
              </p>

              <p className="mt-6">
                We may share information with service providers working on our
                behalf, such as website hosting providers, security services,
                and event logistics providers. We require these parties to
                handle information in accordance with applicable privacy
                requirements and to use it only for the purposes for which it
                was provided.
              </p>

              <p className="mt-6">
                We may also disclose information where necessary to protect the
                security and integrity of our platforms, prevent fraud or abuse,
                defend against legal claims, or protect the safety of our
                participants and community.
              </p>
            </>
          ),
        },

        {
          title: "Third-party websites and services",
          content: (
            <p>
              Services operated by Limelight Creatives may link to third-party
              websites or services. The privacy practices of those third
              parties are not governed by this Privacy Policy. We encourage you
              to review the privacy policies of third-party websites and
              services you use to understand how they collect, use, and handle
              information.
            </p>
          ),
        },

        {
          title: "Your rights and choices",
          content: (
            <>
              <p>
                We will comply with valid requests to exercise your privacy
                rights in accordance with the Australian Privacy Principles.
                Depending on the circumstances, you may have the right to:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6">
                <li>
                  Obtain access to, or a copy of, certain personal information
                  we hold about you.
                </li>
                <li>
                  Request that personal information that is out of date or
                  incorrect be updated or corrected.
                </li>
                <li>
                  Request deletion of certain personal information we hold about
                  you.
                </li>
                <li>
                  Request that we restrict the way we process or disclose
                  specific personal information about you.
                </li>
                <li>
                  Revoke consent that you previously provided for the processing
                  of your personal information, where applicable.
                </li>
              </ul>

              <p className="mt-6">
                To make a privacy request, please contact us using our{" "}
                <a
                  href="#contact"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  privacy contact form
                </a>
                .
              </p>

              <p className="mt-6">
                To protect your privacy and security, we may take reasonable
                steps to verify your identity, or your parent or guardian&apos;s
                identity where applicable, before granting access to or making
                changes to your information. We will respond to valid requests
                within a reasonable time.
              </p>
            </>
          ),
        },

        {
          title: "Children's privacy",
          content: (
            <>
              <p>
                <strong>
                  If you are under 13 years of age, you may not use or access
                  Limelight Creatives&apos; services at any time or in any
                  manner.
                </strong>
              </p>

              <p className="mt-6">
                Protecting the privacy of young children is especially important
                to us. Limelight Creatives does not knowingly collect or
                maintain personal information from persons under 13 years of
                age.
              </p>

              <p className="mt-6">
                If Limelight Creatives learns that personal information
                belonging to a person under 13 has been collected through our
                services, we will take appropriate steps to delete that
                information.
              </p>

              <p className="mt-6">
                If you are the parent or legal guardian of a child under 13 who
                has provided personal information through Limelight Creatives
                services, please contact us using our{" "}
                <a
                  href="#contact"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  privacy contact form
                </a>{" "}
                to request deletion of that information.
              </p>
            </>
          ),
        },

        {
          title: "Retention of your information",
          content: (
            <>
              <p>
                Limelight Creatives retains information about your use of our
                services for as long as reasonably required to fulfil the
                purposes described in this Privacy Policy, as required or
                permitted by law, or as otherwise communicated to you.
              </p>

              <p className="mt-6">
                If you ask us to close an account and delete information
                associated with it, we will delete information that we are not
                required or permitted to retain by law.
              </p>
            </>
          ),
        },

        {
          title: "Data security",
          content: (
            <p>
              We take reasonable measures to protect the information we hold
              from unauthorised access, disclosure, alteration, or destruction.
              However, no method of transmitting or storing information online
              can be guaranteed to be completely secure.
            </p>
          ),
        },

        {
          title: "Additional information for certain jurisdictions",
          content: (
            <p>
              Depending on where you live, local laws may provide you with
              additional privacy rights or require additional disclosures.
              Those rights and disclosures apply to you to the extent required
              by applicable law and are in addition to the rights described in
              this Privacy Policy. To exercise any jurisdiction-specific rights,
              please contact us using our{" "}
              <a
                href="#contact"
                className="underline underline-offset-4 hover:opacity-50"
              >
                privacy contact form
              </a>
              .
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
            <div id="contact">
              <p>
                If you have questions about this Privacy Policy, want to
                exercise a privacy right, or have concerns about how we handle
                your information, please get in touch with us through our
                privacy contact form.
              </p>

              <p className="mt-6">
                Privacy contact form:{" "}
                <a
                  href="https://limelightcreatives.fillout.com/t/gaGhCkKMJous"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  https://limelightcreatives.fillout.com/t/gaGhCkKMJous
                </a>
              </p>
            </div>
          ),
        },
      ]}
    />
  );
}