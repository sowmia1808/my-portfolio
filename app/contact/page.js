import ContactClient from "./ContactClient";
import StructuredData from "@/components/StructuredData";

export const metadata = {
title: "Freelance Full Stack Web Developer | Mary Sowmia | UAE",
  description:
    "Get in touch with Mary Sowmia, Full Stack Developer, WordPress & SEO Specialist. Available for freelance projects in Dubai and UAE.",
 keywords: [
  "Freelance Full Stack Web Developer",
  "Hire Full Stack Developer Dubai",
  "Next.js Freelance Developer UAE",
  "React Web Developer for hire",
  "WordPress Developer Freelance",
  "Remote Web Developer",
  "SEO-friendly Web Developer",
  "Mary Sowmia Portfolio",
  "Dubai Web Developer",
  "UAE Freelance Developer"
],
  robots: "index, follow",
  openGraph: {
title: "Freelance Full Stack Web Developer | Mary Sowmia | UAE",
    description:
      "Reach out to Mary Sowmia, a Full Stack Developer and SEO Specialist, available for freelance projects in Dubai and UAE.",
    url: "https://yourdomain.com/contact",
    siteName: "Mary Sowmia Portfolio",
    images: [
      {
        url: "https://yourdomain.com/images/pp.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
title: "Freelance Full Stack Web Developer | Mary Sowmia | UAE",
    description: "Hire Mary Sowmia — Freelance Full Stack Web Developer. Expert in Next.js, React, Tailwind CSS, WordPress & SEO. Projects worldwide, Dubai/UAE.",
    images: ["https://yourdomain.com/images/pp.png"],
    creator: "@MarySowmia",
  },
  alternates: {
  canonical: "https://www.marysowmia.shop",
},

};

export default function ContactPage() {
  return (
  <>
  <ContactClient />
  <StructuredData/>
  
  </>
  );
}
