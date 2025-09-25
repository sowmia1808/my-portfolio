import ContactClient from "./ContactClient";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "Contact Mary Sowmia | Full Stack Developer & Freelance Web Developer",
  description:
    "Get in touch with Mary Sowmia 👋, Full Stack Developer, WordPress & SEO Specialist. Available for freelance projects in Dubai and UAE.",
  keywords: [
    "Mary Sowmia",
    "Contact Mary Sowmia",
    "Full Stack Developer",
    "Freelance Web Developer",
    "WordPress Developer",
    "SEO Specialist",
    "Dubai",
    "UAE",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Contact Mary Sowmia | Full Stack Developer & Freelance Web Developer",
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
    title: "Contact Mary Sowmia | Full Stack Developer & Freelance Web Developer",
    description:
      "Reach out to Mary Sowmia, Full Stack Developer and SEO Specialist, available for freelance projects.",
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
