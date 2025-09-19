// app/page.js (Home page)

export const metadata = {
  title: "Mary Sowmia | Full Stack Developer & Freelance Web Developer",
  description:
    "Hi, I’m Mary Sowmia 👋. Full Stack Developer, WordPress & SEO Specialist. Available for freelance projects. Experienced in Next.js, React, Tailwind CSS, and building responsive, high-performing websites.",
  keywords: [
    "Mary Sowmia",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "SEO Specialist",
    "Freelance Web Developer",
    "Dubai",
    "UAE"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Mary Sowmia | Full Stack Developer & Freelance Web Developer",
    description:
      "Hi, I’m Mary Sowmia 👋. Full Stack Developer, WordPress & SEO Specialist. Available for freelance projects.",
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
      "Hi, I’m Mary Sowmia 👋. Full Stack Developer, WordPress & SEO Specialist. Available for freelance projects.",
    images: ["https://www.marysowmia.shop/images/pp.png"],
    creator: "@MarySowmia",
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
