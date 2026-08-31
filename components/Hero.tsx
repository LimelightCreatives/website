import { Button } from "@/components/Button";
import Image from "next/image";

function SparkleBig(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 71 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.0842 5.00024C36.1659 32.3071 39.9734 45.0186 60.8435 53.8204C43.2615 68.9484 37.8959 81.9723 34.0842 111C31.2151 79.9997 26.929 66.1442 9.84351 53.8204C26.7067 45.9754 31.8813 35.3111 34.0842 6.0034"
        stroke="#01995C"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 30 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.7161 18.3907C13.4394 19.5648 13.1153 20.6738 12.734 21.7208C11.1273 26.132 8.57063 29.3408 4.87167 31.7859C8.86388 36.2403 11.6044 40.4724 13.5456 45.2267C14.0249 46.4006 14.4503 47.5998 14.8349 48.8317C15.2256 47.5092 15.6595 46.2165 16.1515 44.9427C18.077 39.9564 20.7891 35.3763 24.6222 30.3476C20.5888 28.3807 17.5663 25.6161 15.2652 21.5672C14.7041 20.5797 14.1914 19.5215 13.7161 18.3907Z"
        fill="#01995C"
        stroke="#01995C"
        strokeWidth="6"
      />
    </svg>
  );
}

function LimelightSquiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 446 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.26807 21.8014C16.5175 18.5837 26.2279 15.0466 32.3074 13.4982C38.3167 11.9677 47.0655 10.0337 50.6578 9.54503C57.7174 8.58462 63.2366 7.28537 67.4642 6.88376C76.4945 6.0259 80.686 8.08859 85.4373 9.61761C89.4862 10.9206 93.0069 12.2789 96.4798 13.5708C101.313 15.3689 107.13 17.4369 113.409 19.6965C117.31 21.1 122.515 22.2756 126.639 22.8489C135.642 24.1008 149.221 22.9336 153.333 22.6893C157.977 22.4133 163.082 21.9659 166.555 21.6417C170.455 21.2776 173.863 20.1949 177.335 19.3046C181.117 18.3351 185.66 16.653 190.165 15.1143C197.588 12.5787 201.584 9.71438 205.824 7.85633C209.841 6.0954 213.397 5.99828 216.608 5.43216C220.459 4.75322 224.686 4.86603 229.052 5.82893C234.503 7.03093 238.547 8.72729 244.449 11.1466C249.021 13.0206 252.408 15.5014 255.881 17.0377C259.644 18.7022 263.189 20.0207 266.535 21.2328C269.474 22.2975 272.691 22.7691 276.414 23.2505C282.35 24.0181 292.697 23.0981 302.446 20.5215C308.193 19.0028 314.505 16.9724 319.792 15.1143C324.271 13.5398 329.66 12.6176 333.656 11.5627C338.16 10.3741 343.274 9.066 346.747 8.25552C351.253 7.20407 357.135 8.08859 360.608 8.73455C364.387 9.4375 367.916 10.5079 372.028 12.4385C375.913 14.2627 380.237 16.3046 385.627 18.8087C389.707 20.7038 392.82 21.9562 396.031 23.328C400.008 25.0272 403.6 26.311 407.32 27.4433C412.988 29.169 416.691 26.4852 420.923 24.7941C427.688 22.0904 430.044 19.5562 434.529 16.249C435.442 15.5159 435.696 15.0369 436.208 14.4708C436.72 13.9047 437.483 13.266 438.268 12.6079"
        stroke="#01995C"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="mt-0 relative min-h-screen overflow-hidden">
      <div className="mx-auto mt-8 relative z-10 flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <h1 className="max-w-5xl text-[3.5rem] md:text-[clamp(3.75rem,6rem,10rem)] font-display leading-[0.8] tracking-[-0.06em] md:tracking-[-0.08em]">
            Your chance to step
          </h1>

          {/* sparkles hidden on mobile */}
          <SparkleBig className="pointer-events-none absolute hidden -top-7 -right-28 h-28 w-[4.5rem] md:block" />
          <SparkleSmall className="pointer-events-none absolute hidden -top-16 -right-16 h-16 w-16 md:block" />
        </div>

        <div className="relative">
          <h1 className="max-w-5xl text-[3.75rem] md:text-[clamp(4rem,6rem,11rem)] font-display font-bold leading-[0.8] tracking-[-0.06em] md:tracking-[-0.08em]">
            into the{" "}
            <span className="relative inline-block text-[var(--ontik-accent)]">
              limelight.
              <LimelightSquiggle className="pointer-events-none absolute left-0 top-full mt-2 h-auto w-full" />
            </span>
          </h1>

          {/* sparkles hidden on mobile */}
          <SparkleBig className="pointer-events-none absolute hidden -bottom-12 -left-28 h-28 w-[4.5rem] md:block" />
          <SparkleSmall className="pointer-events-none absolute hidden -bottom-20 -left-16 h-16 w-16 md:block" />
        </div>

        <p className="mt-10 max-w-xl text-xl font-body font-bold">
          Limelight Creatives run free film-a-thons for high schoolers.
        </p>

        <div className="mt-8 flex gap-4 text-lg">
          <Button href="#apply">REGISTER INTEREST {">"}</Button>
          <Button href="#timeline" variant="secondary">
            WHAT&apos;S NEXT
          </Button>
        </div>

        <a
          className="mt-8"
          href="mailto:inquiries@limelightcreatives.org"
        >
          <u>Interested in sponsoring?</u>
        </a>
      </div>
    </section>
  );
}