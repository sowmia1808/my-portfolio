export const metadata = {
  title: "Mary Sowmia | Work Experience | Full Stack Developer",
  description:
    "Explore the professional experience of Mary Sowmia 👩‍💻, Full Stack Developer skilled in React, Next.js, Tailwind CSS, Express.js, and MySQL. Available for freelance projects in Dubai and UAE.",
  keywords: [
    "Mary Sowmia Experience",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Work History",
    "Freelance Developer",
    "Dubai",
    "UAE",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Mary Sowmia | Work Experience | Full Stack Developer",
    description:
      "Discover Mary Sowmia's professional background as a Full Stack Developer, with expertise in React, Next.js, and MySQL.",
    url: "https://www.marysowmia.shop/experience",
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
    title: "Mary Sowmia | Work Experience | Full Stack Developer",
    description:
      "Professional background of Mary Sowmia, Full Stack Developer, available for freelance projects in Dubai and UAE.",
    images: ["https://www.marysowmia.shop/images/pp.png"],
    creator: "@MarySowmia",
  },
};
import StructuredData from "@/components/StructuredData"
import ProjectsClient from "./ProjectsClient";

export default function ProjectPage() {
  return (
    <>
      <StructuredData />
      <ProjectsClient/>
    </>
  );
}