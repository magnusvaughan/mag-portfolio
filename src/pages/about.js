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

      <section className="flex flex-wrap">
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 px-4 mb-8">
        <a href="https://composition-seven.com" target="_blank">
            <div class="rounded overflow-hidden shadow-lg bg-white">
                <img class="w-full" src={c7} alt="Composition Seven"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-gray-800">Composition Seven</div>
                    <p class="text-gray-700 text-base">
                    A musical sequencer made with Laravel and React.js
                    </p>
                </div>
            </div>
        </a>
        </div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="rounded overflow-hidden shadow-lg bg-white">
                <a href="https://hotbackthen.com" target="_blank">
                    <img class="w-full" src={hbt} alt="Hot Back Then" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray-800">Hot Back Then</div>
                        <p class="text-gray-700 text-base">
                        An archive of trending tweets searchable by country and date
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="rounded overflow-hidden shadow-lg bg-white">
                <a href="https://radiant-atoll-34444.herokuapp.com/" target="_blank">
                    <img class="w-full" src={spl} alt="Splash" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-gray-800">Splash</div>
                        <p class="text-gray-700 text-base">
                        Most-used words/phrases in newspaper headlines made with Python/Django
                        </p>
                    </div>
                </a>
            </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
