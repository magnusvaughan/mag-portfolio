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
        <h2 className="font-display font-bold text-gray-600 text-2xl">I'm a software developer working with PHP and JavaScript</h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
