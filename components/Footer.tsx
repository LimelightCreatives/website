"use client";

import Image from "next/image";
import Link from "next/link";
import { SiYoutube, SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';


export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-6 pt-24 md:pt-32">
      {/* Footer details */}
      <div className="mx-auto max-w-7xl">
        <div className="border-t-2 border-[var(--border)]" />

        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <Image
              src="../branding/wordmark.svg"
              alt="Limelight Creatives"
              height={64}
              width={256}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-body font-bold">
            <Link
              href="/code-of-conduct"
              className="transition-opacity hover:opacity-50"
            >
              CODE OF CONDUCT
            </Link>

            <Link
              href="/privacy"
              className="transition-opacity hover:opacity-50"
            >
              PRIVACY
            </Link>

            <Link
              href="/safeguarding-policy"
              className="transition-opacity hover:opacity-50"
            >
              SAFEGUARDING POLICY
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="https://www.youtube.com/@LimelightCreatives"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="transition-opacity hover:opacity-50"
            >
              <SiYoutube size={30} />
            </Link>
            <Link
              href="https://www.instagram.com/_limelightcreatives"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-50"
            >
              <SiInstagram size={30} />
            </Link>
            <Link
              href="https://www.tiktok.com/@_limelightcreatives"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-opacity hover:opacity-50"
            >
              <SiTiktok size={30} />
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}