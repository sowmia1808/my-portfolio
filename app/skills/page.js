// app/experience/page.js

export const metadata = {
title: "Freelance Full Stack Web Developer | Mary Sowmia | UAE",
  description:
    "Mary Sowmia 👋 — Full Stack Developer & Freelance Web Developer. Skilled in Next.js, React, Tailwind CSS, WordPress & SEO. Available for projects worldwide, including UAE.",
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
      "Full Stack Developer & Freelance Web Developer. Expert in Next.js, React, Tailwind CSS, WordPress & SEO. Available for projects worldwide, including UAE.",
    url: "https://www.marysowmia.shop",
    siteName: "Mary Sowmia Portfolio",
    images: [
      {
        url: "https://www.marysowmia.shop/images/pp.png",
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
    description:
      "Full Stack Developer & Freelance Web Developer. Skilled in Next.js, React, Tailwind CSS, WordPress & SEO. Available for projects worldwide, including UAE.",
    images: ["https://www.marysowmia.shop/images/pp.png"],
    creator: "@MarySowmia",
    alternates: {
  canonical: "https://www.marysowmia.shop",
},

  },
};


import StructuredData from "@/components/StructuredData";
import SkillsClient from "./SkillsClient"

export default function SkillsPage() {
  return (
    <>
      <StructuredData />
      <SkillsClient/>
    </>
  );
}
