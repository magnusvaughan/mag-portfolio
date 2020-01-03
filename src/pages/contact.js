import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="text-center">
        <h2 className="font-display font-bold text-gray-800 text-4xl">I'm on <a class="underline" href="https://twitter.com/magnusvaughan" target="_blank">Twitter</a> and <a class="underline" href="https://github.com/magnusvaughan" target="_blank">Github</a></h2>
      </section>
    </Layout>
  );
}

export default ContactPage;
