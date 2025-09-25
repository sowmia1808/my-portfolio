// app/page.js (Home page)

export const metadata = {
  title: "Full Stack Developer & Freelance Web Developer | Mary Sowmia",
  description:
    "Mary Sowmia 👋 — Full Stack Developer & Freelance Web Developer. Skilled in Next.js, React, Tailwind CSS, WordPress & SEO. Available for projects worldwide, including UAE.",
  keywords: [
    "Mary Sowmia",
    "Full Stack Developer",
    "Full Stack Developer in UAE",
    "Full Stack Developer in dubai",
    "Full Stack Developer in sharjah",
    "Full Stack Developer in Ras Al Khaimah",
    "Full Stack Developer in Remote",
    "Freelance Web Developer in UAE",
    "Freelance Web Developer in dubai",
    "Freelance Web Developer in sharjah",
    "Freelance Web Developer in Ras Al Khaimah",
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
     title: "Full Stack Developer & Freelance Web Developer | Mary Sowmia",
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
  alternates: {
  canonical: "https://www.marysowmia.shop",
},

};

import StructuredData from "@/components/StructuredData";
import HomeClient from "./HomeClient";

export default function Home() {
  

  return (
    <>
       <StructuredData />
      <HomeClient/>
    </>
  );
}
