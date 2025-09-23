// components/StructuredData.js
"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mary Sowmia",
      "url": "https://www.marysowmia.shop/",
      "sameAs": [
        "https://www.linkedin.com/in/marysowmia",
        "https://github.com/marysowmia"
      ],
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer, WordPress & SEO Specialist. Available for freelance projects in UAE and worldwide. Skilled in Next.js, React, Tailwind CSS, MySQL, and WordPress.",
      "image": "https://www.marysowmia.shop/images/pp.png",
      "knowsAbout": [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "WordPress",
        "SEO",
        "Stripe Integration",
        "MySQL",
        "Express.js"
      ],
      "availableForWork": true,
      "areaServed": [
        {
          "@type": "Country",
          "name": "UAE"
        },
        {
          "@type": "Country",
          "name": "Worldwide"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "UAE"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
