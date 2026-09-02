import { LegalPage } from "@/components/LegalPage";

export default function CodeOfConduct() {
  return (
    <LegalPage
      eyebrow="Legal / Code of Conduct"
      title="Code of conduct."
      intro="The Code of Conduct outlines the standards we expect from everyone involved with Limelight Creatives, and the steps we take when those expectations are not met."
      lastUpdated="31 August 2026"
      sections={[
        {
          title: "Why this matters",
          content: (
            <>
              <p>
                Limelight exists because a group of teenagers wanted young
                filmmakers to have a space to create collaboratively, where they
                would be included, supported, and most importantly,{" "}
                <strong>safe</strong> throughout that process.
              </p>

              <p className="mt-6">
                We want everyone who picks up a camera at one of our events to
                be able to trust the people around them.
              </p>

              <p className="mt-6">
                This Code of Conduct exists plainly to outline what we expect
                from one another and what happens when those expectations are
                not met.
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6">
                <li>Lead With Kindness</li>
                <li>Respect the Space</li>
                <li>Keep it Constructive</li>
                <li>Make Improvements, Not Excuses</li>
              </ul>
            </>
          ),
        },

        {
          title: "Who these terms apply to",
          content: (
            <>
              <p>
                This Code of Conduct applies to everyone connected to Limelight
                Creatives, including:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6">
                <li>Event participants aged 13–18</li>
                <li>Organisers and founders</li>
                <li>Event staff and volunteers</li>
                <li>
                  Mentors, guest speakers, sponsors, and venue staff
                </li>
                <li>
                  Parents, carers, and legal guardians of event participants
                </li>
                <li>
                  Anyone present at or taking part in a Limelight event or
                  shared space
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "Where these terms apply",
          content: (
            <>
              <p>
                This Code of Conduct applies everywhere Limelight Creatives
                operates, including:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6">
                <li>
                  Any Film-a-thon venue or in-person event space, including
                  outdoor areas where participants may need to leave the venue
                </li>
                <li>
                  Digital spaces connected to Limelight, such as Discord,
                  ClickUp, and video calls
                </li>
                <li>
                  Every stage of an event, including pre-event contact, the
                  event itself, and post-event follow-up communications
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "Lead with kindness",
          content: (
            <>
              <p>
                Treat everyone with respect and equality, regardless of race,
                background, circumstances, sex, sexual orientation, personal
                characteristics, or event progress.
              </p>

              <p className="mt-6">
                Limelight Creatives does not make room for bullying, harassment,
                exclusion, inappropriate sexual advances, or discriminatory
                language.
              </p>

              <p className="mt-6">
                If you wouldn&apos;t say or do something with a Safeguarding
                Officer standing next to you, don&apos;t do it at all.
              </p>
            </>
          ),
        },

        {
          title: "Respect the space",
          content: (
            <>
              <p>
                Respect the venue, the equipment, and everyone running the
                event. This includes:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6">
                <li>
                  Following reasonable instructions from event staff,
                  organisers, mentors, or officers regarding venue rules and
                  equipment handling
                </li>
                <li>
                  Never possessing or using alcohol, drugs, or weapons at any
                  Limelight event
                </li>
                <li>
                  No physical aggression, including threats or intimidation
                </li>
                <li>Respecting the privacy of others</li>
                <li>
                  Not damaging event materials. If something breaks, that&apos;s
                  okay, as long as you report it directly to a staff member or
                  the Safeguarding Officer
                </li>
                <li>
                  Not spamming our online services or posting sexual,
                  inappropriate, or unwelcome content
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "Keep it constructive",
          content: (
            <>
              <p>
                Limelight Creatives runs on feedback, and feedback only works
                when it is given and received in good faith.
              </p>

              <p className="mt-6">
                You can disagree with an idea, but that does not mean you have
                to disagree with the person behind it. Always assume good
                intent, encourage open communication, and remember that not
                everyone in the room will share your views.
              </p>

              <p className="mt-6">
                Constructive critique should stay focused on the goal, whether
                that&apos;s making a better film with your teammates or helping
                us put on a better event.
              </p>
            </>
          ),
        },

        {
          title: "Make improvements, not excuses",
          content: (
            <>
              <p>
                Everyone covered by this Code of Conduct is expected to take
                responsibility in the event of a breach of our Release of
                Liability or Code of Conduct.
              </p>

              <p className="mt-6">
                In most instances, depending on the circumstances of the
                breach, consequences will take the form of a warning rather
                than a formal ban or other tangible action.
              </p>

              <p className="mt-6">
                We encourage everyone to take responsibility early and work with
                us to resolve issues before a situation escalates.
              </p>
            </>
          ),
        },

        {
          title: "Safeguarding",
          content: (
            <>
              <p>
                Limelight Creatives operates under a duty-of-care approach,
                with our event processes and culture designed as preventative
                measures to reduce the chance of harm before it occurs and to
                respond efficiently when a concern is raised.
              </p>

              <p className="mt-6">
                Full details of our safeguarding approach are outlined in our{" "}
                <a
                  href="/safeguarding-policy"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  Safeguarding Policy
                </a>
                .
              </p>
            </>
          ),
        },

        {
          title: "Privacy",
          content: (
            <>
              <p>
                We collect as little personal information as possible, only
                what is genuinely needed to run our programs safely. We do not,
                and will never, sell anyone&apos;s personal information.
              </p>

              <p className="mt-6">
                Further details are outlined in our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <p className="mt-6">
                You, or for those aged under 18, your designated parent or
                guardian, have the right to access, correct, delete, or
                restrict how we use your personal information.
              </p>

              <p className="mt-6">
                To exercise these rights, please complete the designated form
                or contact us using the details below.
              </p>
            </>
          ),
        },

        {
          title: "Contact and reporting",
          content: (
            <>
              <p>
                Concerns can be raised at any point before, during, or after an
                event.
              </p>

              <p className="mt-6">
                Reports are treated confidentially and anonymously, and are
                shared only with those who have a genuine need to know, or where
                necessary to keep someone safe or meet a legal obligation.
              </p>

              <div className="mt-10 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="py-4 pr-6 font-display text-xl">
                        Role
                      </th>
                      <th className="py-4 pr-6 font-display text-xl">
                        Name
                      </th>
                      <th className="py-4 pr-6 font-display text-xl">
                        Email
                      </th>
                      <th className="py-4 font-display text-xl">
                        Phone
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-black/20">
                      <td className="py-5 pr-6">Safeguarding Officer</td>
                      <td className="py-5 pr-6">Mr Reza Hossain</td>
                      <td className="py-5 pr-6">
                        <a
                          href="mailto:rezaru2000@yahoo.com"
                          className="underline underline-offset-4 hover:opacity-50"
                        >
                          rezaru2000@yahoo.com
                        </a>
                      </td>
                      <td className="py-5">+61 401 209 543</td>
                    </tr>

                    <tr className="border-b border-black/20">
                      <td className="py-5 pr-6">
                        Deputy Safeguarding Officer
                      </td>
                      <td className="py-5 pr-6">Ontik Reza</td>
                      <td className="py-5 pr-6">
                        <a
                          href="mailto:ontikr@limelightcreatives.org"
                          className="underline underline-offset-4 hover:opacity-50"
                        >
                          ontikr@limelightcreatives.org
                        </a>
                      </td>
                      <td className="py-5">+61 493 686 190</td>
                    </tr>

                    <tr className="border-b border-black/20">
                      <td className="py-5 pr-6">Emergency Services</td>
                      <td className="py-5 pr-6">—</td>
                      <td className="py-5 pr-6">—</td>
                      <td className="py-5">000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },

        {
          title: "Review and updates",
          content: (
            <p>
              This Code of Conduct is still under review as Limelight Creatives
              grows and will continue to be subject to revision.
            </p>
          ),
        },
      ]}
    />
  );
}