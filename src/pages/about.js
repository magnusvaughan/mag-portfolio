import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import c7 from "../images/c7.png";
import hbt from "../images/hbt.jpg";
import spl from "../images/spl.png";

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
          <img class="w-full" src={c7} alt="Composition Seven"/>
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
          <img class="w-full" src={hbt} alt="Hot Back Then" />
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
          <img class="w-full" src={spl} alt="Splash" />
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
