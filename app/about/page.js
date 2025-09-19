
// app/about/page.js

export const metadata = {
  title: "About Mary Sowmia | Full Stack Developer & Freelance Web Developer",
  description:
    "Learn about Mary Sowmia 👋, Full Stack Developer and WordPress & SEO Specialist. Available for freelance projects in Dubai and UAE. Skilled in Next.js, React, Tailwind CSS, and MySQL.",
  keywords: [
    "Mary Sowmia",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "SEO Specialist",
    "Freelance Web Developer",
    "Dubai",
    "UAE",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About Mary Sowmia | Full Stack Developer & Freelance Web Developer",
    description:
      "Learn about Mary Sowmia 👋, Full Stack Developer and WordPress & SEO Specialist. Available for freelance projects in Dubai and UAE.",
    url: "https://www.marysowmia.shop/about",
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
    title: "About Mary Sowmia | Full Stack Developer & Freelance Web Developer",
    description:
      "Learn about Mary Sowmia 👋, Full Stack Developer and WordPress & SEO Specialist. Available for freelance projects in Dubai and UAE.",
    images: ["https://www.marysowmia.shop/images/pp.png"],
    creator: "@MarySowmia",
  },
};

// app/about/page.js
import AboutClient from "./AboutClient";
import StructuredData from "@/components/StructuredData";

export default function AboutPage() {
  return (
  <>
  <StructuredData />
 <AboutClient/>
  </>
);         
}
