export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lexci",
    url: "https://www.lexci.in",
    logo: "https://www.lexci.in/favicon.ico",
    description:
      "Lexci is an AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities to power the next generation of digital infrastructure.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "lexciinnovation@gmail.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "hr@lexci.in",
        contactType: "human resources",
        availableLanguage: "English",
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500081",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      // Add real social media URLs when available
    ],
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
    },
    knowsAbout: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Cloud Security",
      "Web Development",
      "App Development",
      "Zero Trust Architecture",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lexci",
    url: "https://www.lexci.in",
    description:
      "AI-Powered Security Infrastructure for a Scalable World",
    publisher: {
      "@type": "Organization",
      name: "Lexci",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
