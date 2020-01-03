import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <h2 className="font-display font-bold text-gray-800 text-6xl">I'm a software developer</h2>
        <h3 className="font-display font-bold text-gray-800 text-4xl">working with PHP and JavaScript</h3>
      </section>
    </Layout>
  );
}

export default IndexPage;
