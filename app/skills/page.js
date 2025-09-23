// app/experience/page.js

export const metadata = {
  title: "Mary Sowmia | Full Stack Developer & Freelance Web Developer",
  description:
    "Mary Sowmia 👋 — Full Stack Developer & Freelance Web Developer. Skilled in Next.js, React, Tailwind CSS, WordPress & SEO. Available for projects worldwide, including UAE.",
  keywords: [
    "Mary Sowmia",
    "Full Stack Developer",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "SEO Specialist",
    "Remote Web Developer",
    "Hire Web Developer Online",
    "Dubai",
    "UAE"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Mary Sowmia | Full Stack Developer & Freelance Web Developer",
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
    title: "Mary Sowmia | Full Stack Developer & Freelance Web Developer",
    description:
      "Full Stack Developer & Freelance Web Developer. Skilled in Next.js, React, Tailwind CSS, WordPress & SEO. Available for projects worldwide, including UAE.",
    images: ["https://www.marysowmia.shop/images/pp.png"],
    creator: "@MarySowmia",
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
