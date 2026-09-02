import { LegalPage } from "@/components/LegalPage";

export default function Safeguarding() {
  return (
    <LegalPage
      eyebrow="Legal / Safeguarding"
      title="Safeguarding policy."
      intro={
        <>
          Please direct any inquiries to{" "}
          <a
            href="mailto:inquiries@limelightcreatives.org"
            className="underline underline-offset-4 hover:opacity-50"
          >
            inquiries@limelightcreatives.org
          </a>
        </>
      }

      lastUpdated="31 August 2026"
      sections={[
        {
          title: "Purpose",
          content: (
            <>
              <h3 className="font-display text-2xl tracking-[-0.03em]">
                1.1 Abstract
              </h3>

              <p className="mt-4">
                Limelight is a youth-led creative organisation founded by
                teenagers, for teenagers. Our mission is to empower young
                filmmakers to collaborate, create, and tell stories.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                1.2 Overview
              </h3>

              <p className="mt-4">
                The aim of this Safeguarding Policy is to ensure that all
                participants, founders, volunteers, and mentors at Limelight
                are safe, respected, and supported. It reflects the values of
                the Limelight Code of Conduct.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                1.3 Why Safety Matters at Limelight
              </h3>

              <p className="mt-4">
                We take a duty-of-care approach: we actively design our events,
                screening process, and culture to reduce the chance of harm
                happening in the first place.
              </p>

              <p className="mt-6">
                We aim to reduce and identify risks before harm occurs by:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Setting clear reporting mechanisms</li>
                <li>Providing appropriate supervision</li>
                <li>Responding seriously to concerns</li>
                <li>Setting clear behavioural expectations</li>
              </ul>

              <p className="mt-6">
                Safeguarding is a universal responsibility. Every person
                involved with Limelight has a vital role in maintaining a safe
                environment.
              </p>
            </>
          ),
        },

        {
          title: "Scope of policy",
          content: (
            <>
              <h3 className="font-display text-2xl tracking-[-0.03em]">
                2.1 Application
              </h3>

              <p className="mt-4">
                This policy applies to anyone involved with Limelight events
                internally in Sydney, nationally, or globally, including:
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6">
                <li>Participants aged 13–18</li>
                <li>Parents and guardians of participants</li>
                <li>Organisers, event staff, and volunteers</li>
                <li>
                  Mentors, guest speakers, external vendors, sponsors, and
                  venue staff
                </li>
                <li>Any other individual present at an event</li>
              </ul>

              <p className="mt-6">It covers all event locations and activities, including:</p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Film-a-thon venues</li>
                <li>
                  Online activity connected to Limelight, including Discord,
                  Slack, group chats, shared drives, and video calls
                </li>
                <li>
                  Event-related activities, including pre-event activity, the
                  24-hour or 12-hour event, and post-event activity
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "Definitions",
          content: (
            <>
              <p>
                For the purposes of Limelight&apos;s Safeguarding Policy, the
                following definitions apply:
              </p>

              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="font-semibold">
                    Child / Young Person / Participant / Minor
                  </dt>
                  <dd className="mt-2">
                    Any person under the age of 18. For the purposes of
                    Limelight events, this generally refers to participants
                    aged 13–18.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">Confidentiality</dt>
                  <dd className="mt-2">
                    The responsibility to handle personal and safeguarding
                    information carefully and not share it unnecessarily.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">Duty of Care</dt>
                  <dd className="mt-2">
                    The overarching responsibility of Limelight to take
                    reasonable steps to identify foreseeable risks and help
                    protect the safety and wellbeing of people participating.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">Mentor / Volunteer</dt>
                  <dd className="mt-2">
                    An individual above the age of 15 invited by Limelight to
                    provide assistance, education, or support to participants.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">Safeguarding Officer</dt>
                  <dd className="mt-2">
                    The individual responsible for handling concerns and
                    overseeing this policy.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">WWCC</dt>
                  <dd className="mt-2">
                    &quot;Working With Children Check&quot;, a legal screening
                    that assesses suitability to engage in child-related work.
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold">Founders</dt>
                  <dd className="mt-2">
                    The founding team behind Limelight Creatives, responsible
                    for organising and hosting the event.
                  </dd>
                </div>
              </dl>
            </>
          ),
        },

        {
          title: "Policy",
          content: (
            <>
              <ul className="list-disc space-y-4 pl-6">
                <li>
                  Everyone must be treated with respect and equality regardless
                  of background, gender, or personal characteristics.
                </li>
                <li>
                  Everyone must adhere to the Limelight Code of Conduct.
                </li>
                <li>
                  All disputes should be reported through an evaluation of
                  their severity and frequency.
                </li>
                <li>
                  Everyone must follow instructions from staff and mentors
                  regarding equipment handling, venue rules, and safety
                  protocols.
                </li>
                <li>
                  Everyone must avoid behaviour that may put others at risk
                  through unsafe equipment handling or misuse of equipment.
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "Responsibilities",
          content: (
            <>
              <h3 className="font-display text-2xl tracking-[-0.03em]">
                5.1 Founders
              </h3>

              <p className="mt-4">
                Founders must model the behaviour expected of participants and
                uphold the values of Limelight at all times.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                5.2 Safeguarding Officers
              </h3>

              <p className="mt-4">
                Designated staff members or Safeguarding Officers are
                responsible for supporting the implementation of this policy
                during events.
              </p>

              <p className="mt-6">Their responsibilities may include:</p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Acting as a point of contact for safeguarding concerns</li>
                <li>Contacting parents or guardians where appropriate</li>
                <li>Contacting emergency services where required</li>
                <li>
                  Escalating serious concerns to relevant authorities or
                  services where legally required
                </li>
              </ul>

              <p className="mt-6">
                Safeguarding Officers will be clearly identified to participants
                where reasonably possible.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                5.3 Volunteers / Mentors / Organisers
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  Appointed individuals must model the behaviour expected of
                  participants and uphold the values of Limelight at all times.
                </li>
                <li>
                  They must have the legally required WWCC approval for their
                  role.
                </li>
                <li>
                  They must report any concern, disclosure, or breach of this
                  policy to the Safeguarding Officer immediately and must never
                  investigate it themselves.
                </li>
              </ul>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                5.4 Participants
              </h3>

              <p className="mt-4">
                All event participants are expected to follow this safeguarding
                policy and understand that violations may result in
                consequences.
              </p>

              <p className="mt-6">Possible consequences include:</p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>A warning</li>
                <li>Removal from the event</li>
                <li>Contacting parents or guardians</li>
                <li>Suspension from future Limelight events</li>
                <li>Referral to relevant authorities or services</li>
              </ul>

              <p className="mt-6">
                Consequences will aim to be fair and proportional to the
                circumstances and severity of the incident.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                5.5 Parents &amp; Guardians
              </h3>

              <p className="mt-4">
                Parents and guardians must provide appropriate online or
                written consent for participation, emergency contact details,
                media consent, and any relevant medical or support needs on
                behalf of participants who are legal minors.
              </p>
            </>
          ),
        },

        {
          title: "Risk management",
          content: (
            <>
              <h3 className="font-display text-2xl tracking-[-0.03em]">
                6.1 Venue
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  Emergency exits and first-aid kits are identified and
                  communicated to all staff and volunteers at the start of the
                  day.
                </li>
                <li>
                  Access to the venue is controlled. Entry and exit points are
                  clearly marked, and minors need to sign a waiver to exit the
                  venue at any time.
                </li>
                <li>
                  Adult-to-minor ratios are set in advance based on group size
                  and age and are maintained throughout the event.
                </li>
                <li>
                  Any restricted equipment, material, or area is off-limits and
                  clearly signed.
                </li>
                <li>
                  Any venue-specific risks are shared with all staff and
                  volunteers before the event.
                </li>
              </ul>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                6.2 Check-in and Check-out
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  Guardians will provide consent for their child to attend the
                  event through the pre-event check-in forms.
                </li>
                <li>
                  A named staff member or volunteer runs check-in and check-out
                  at a single, clearly marked point.
                </li>
              </ul>

              <p className="mt-6">
                If participants are to leave the venue during an event, they
                must satisfy at least one of the following conditions:
              </p>

              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li>
                  Permission from the guardian signing the relevant waiver has
                  been given pre-emptively for the child to be dismissed early.
                </li>
                <li>
                  In the event of unforeseeable circumstances, verbal
                  permission from the guardian signing the waiver has been
                  given before the child leaves.
                </li>
                <li>
                  The parent or guardian has signed a Leave the Venue form, in
                  which case the child may only leave at the designated time and
                  when accompanied by event staff.
                </li>
                <li>
                  The event is operating under emergency procedures, or the
                  child requires external medical attention.
                </li>
              </ol>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                6.3 Participants / Mentors / Staff
              </h3>

              <p className="mt-4">
                For minors, the information we collect includes:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>School and year</li>
                <li>Contact details, including phone number and email</li>
                <li>
                  Guardian contact details, including phone number,
                  relationship to participant, and email
                </li>
                <li>
                  Emergency contact details, including phone number,
                  relationship to participant, and email
                </li>
                <li>Relevant medical or accessibility needs</li>
                <li>Attendance restrictions, if any</li>
              </ul>

              <p className="mt-6">
                For mentors, volunteers, or other staff over the age of 18, the
                information we collect includes:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>WWCC number and expiry date</li>
                <li>Contact details, including phone number and email</li>
                <li>Emergency contact details</li>
                <li>Relevant medical or accessibility needs</li>
                <li>Relevant certifications</li>
              </ul>

              <p className="mt-6">
                For mentors, volunteers, or other staff between the ages of 15
                and 18, the information we collect includes:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>School and year, if applicable</li>
                <li>Contact details, including phone number and email</li>
                <li>Guardian contact details</li>
                <li>Emergency contact details</li>
                <li>Relevant medical or accessibility needs</li>
                <li>Relevant certifications</li>
              </ul>

              <p className="mt-6">
                This information is stored in a restricted-access system
                (Google Sheets) and never in a publicly accessible system.
              </p>

              <p className="mt-6">
                Only authorised Limelight Creatives staff can access this
                information, and they may only use it for purposes necessary
                for the event and/or the participant&apos;s attendance.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                6.4 Accepted Behaviour
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  Treat everybody at the event with respect. Bullying,
                  harassment, exclusion, discriminatory language, and offensive
                  jokes are not acceptable.
                </li>
                <li>
                  Follow reasonable instructions from staff and mentors,
                  including venue rules, equipment usage rules, and off-limits
                  areas.
                </li>
                <li>
                  No physical aggression, threats, or intimidation, either in
                  person or online, including in event chat channels.
                </li>
                <li>
                  No possession or use of alcohol, drugs, or weapons on-site.
                  No minor is to be under the influence of alcohol or drugs at
                  an event.
                </li>
                <li>
                  Respect others&apos; privacy. Do not film, photograph, or
                  share images of anybody at the event without their consent.
                </li>
                <li>
                  Personal devices and phones must be used respectfully and not
                  to capture inappropriate content.
                </li>
                <li>
                  Anyone who breaches these standards will be spoken to by the
                  Safeguarding Officer, with consequences depending on the
                  severity of the breach.
                </li>
              </ul>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                6.5 Reporting Mechanism
              </h3>

              <p className="mt-4">
                If a minor is in immediate physical danger, call emergency
                services first, then notify the Safeguarding Officer as soon as
                it is safe to do so.
              </p>

              <p className="mt-6">
                Concerns can be reported through Limelight&apos;s{" "}
                <a
                  href="https://docs.google.com/document/d/1NmLRmGygQqmG6ZnJ7AQ7_Q-vLUxzWjGPHSoX3hym9v0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  Guide to Severity Designation &amp; Reporting
                </a>
                .
              </p>
            </>
          ),
        },

        {
          title: "Medical emergency",
          content: (
            <>
              <h3 className="font-display text-2xl tracking-[-0.03em]">
                7.1 First Aid
              </h3>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  Limelight will identify appropriate first-aid resources and
                  personnel before each event.
                </li>
                <li>
                  The location of first-aid equipment will be communicated to
                  relevant volunteers and founders.
                </li>
                <li>
                  Participants should notify a staff member, volunteer, or
                  Safeguarding Officer if they become unwell or are injured.
                </li>
                <li>
                  Limelight aims, wherever reasonably possible, to have a
                  person with appropriate first-aid qualifications on the event
                  campus.
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "Participant welfare",
          content: (
            <>
              <h3 className="font-display text-2xl tracking-[-0.03em]">
                8.1 Reporting Concerns
              </h3>

              <p className="mt-4">
                At the end of every Limelight event, there will be a form
                created solely for feedback and reporting concerns about our
                events.
              </p>

              <p className="mt-6">
                Concerns should always be reported to Safeguarding Officers at
                any time during an event.
              </p>

              <p className="mt-6">
                This form will include rating and scoring our event.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                8.2 Mandated Reporting
              </h3>

              <p className="mt-4">
                Limelight will handle safeguarding information sensitively and
                confidentially.
              </p>

              <p className="mt-6">
                Information will only be shared with individuals who have a
                legitimate need to know, or where disclosure is necessary to
                protect someone&apos;s safety, obtain appropriate assistance,
                or comply with a legal obligation.
              </p>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                8.3 Debriefing
              </h3>

              <p className="mt-4">
                A debrief will be conducted at the conclusion of each event.
              </p>

              <p className="mt-6">
                The debrief will provide organisers and relevant staff with an
                opportunity to review the event in order to:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Identify any incidents or concerns</li>
                <li>Discuss participant welfare</li>
                <li>Identify improvements for future events</li>
                <li>
                  Identify where improvements can be made for the next day, if
                  it is a two-day event
                </li>
              </ul>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
                8.4 Consent from Parents / Guardians
              </h3>

              <p className="mt-4">
                For participants, Limelight will obtain appropriate parent or
                guardian consent before participation where required, including
                for:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Permission to participate in the event</li>
                <li>Emergency contact information</li>
                <li>Relevant medical, accessibility, or support information</li>
                <li>
                  Appropriate media or photography consent, where applicable
                </li>
              </ul>

              <p className="mt-6">
                Parents or guardians should provide Limelight with updated
                information as soon as possible.
              </p>

              <p className="mt-6">
                <a
                  href="#"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  Parent and Guardian Guide
                </a>
              </p>
            </>
          ),
        },

        {
          title: "Review",
          content: (
            <p>
              This document will be reviewed and changed according to
              performance, time, and feedback. It is therefore imperative that
              all organisers, staff, founders, and participants are alerted to
              updates to this policy.
            </p>
          ),
        },

        {
          title: "Key contacts",
          content: (
            <>
              <div className="overflow-x-auto">
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
                      <td className="py-5 pr-6">
                        Safeguarding Officer
                      </td>
                      <td className="py-5 pr-6">Md Reza Hossain</td>
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

              <p className="mt-10 text-sm text-black/60">
                For general enquiries, please contact{" "}
                <a
                  href="mailto:inquiries@limelightcreatives.org"
                  className="underline underline-offset-4 hover:opacity-50"
                >
                  inquiries@limelightcreatives.org
                </a>
                .
              </p>
            </>
          ),
        },
      ]}
    />
  );
}