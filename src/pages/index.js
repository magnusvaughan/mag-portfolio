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
        <h2 className="font-display font-bold text-gray-600 text-3xl">I'm a software developer working with PHP and JavaScript</h2>
        <p className="text-xl text-gray-600">I love building projects using Laravel and React</p>
      </section>
    </Layout>
  );
}

export default IndexPage;
