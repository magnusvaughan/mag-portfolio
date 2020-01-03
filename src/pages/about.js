import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import compositionSeven from "../../public/img/c7.png";
import hotBackThen from "../../public/img/hbt.png";
import splash from "../../public/img/spl.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col md:flex-row items-center">

      <div class="flex w-1/3 justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full" src={compositionSeven} alt="Composition Seven"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"><a href="https://composition-seven.com" target="_blank">Composition Seven</a></div>
            <p class="text-gray-700 text-base">
              A musical sequencer made with Laravel and React.js
            </p>
          </div>
        </div>
      </div>
      <div class="flex w-1/3 justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full" src={hotBackThen} alt="Hot Back Then" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"><a href="https://hotbackthen.com" target="_blank">Hot Back Then</a></div>
            <p class="text-gray-700 text-base">
              An archive of trending tweets searchable by country and date
            </p>
          </div>
        </div>
      </div>
      <div class="flex w-1/3 justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img class="w-full" src={splash} alt="Splash" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"><a href="https://radiant-atoll-34444.herokuapp.com/" target="_blank">Splash</a></div>
            <p class="text-gray-700 text-base">
              Most-used words/phrases in newspaper headlines made with Python/Django
            </p>
          </div>
        </div>
      </div>




      </section>
    </Layout>
  );
}

export default AboutPage;
