import React, { useState } from "react";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section
        className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white-1000"
        id="Projects"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  My Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  Explore a selection of my web development projects, showcasing
                  my skills and creativity in building innovative solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses  bg-black text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-black hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("frontend")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "frontend"
                        ? "activeClasses  bg-black text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-black hover:text-white"
                    }`}
                  >
                    Frontend
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("fullstack")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "fullstack"
                        ? "activeClasses  bg-black text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-black hover:text-white"
                    }`}
                  >
                    Full-stack
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://shorturl.at/JPlDc"
              category="frontend"
              title="Microsoft Clone"
              githubHref="https://github.com/"
              previewHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://shorturl.at/rBSXS"
              category="frontend"
              title="Signature Pad"
              githubHref="https://github.com/NitinSemwal2614/Signature-Pad"
              previewHref="https://nitinsemwal2614.github.io/Signature-Pad/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://shorturl.at/gpQOM"
              category="frontend"
              title="Weather Forecast"
              githubHref="https://github.com/"
              previewHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://sprl.in/mrv2sW2"
              category="frontend"
              title="Password Generator"
              githubHref="https://github.com/"
              previewHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://sprl.in/hcmyqUz"
              category="frontend"
              title="Currency Converter"
              githubHref="https://github.com/NitinSemwal2614/Currency-Calculator"
              previewHref="https://currency-calculator-nine-olive.vercel.app/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://sprl.in/rBlYQya"
              category="frontend"
              title="Speech Recognition"
              githubHref="https://github.com/"
              previewHref="#"
              showCard={showCard}
            />
            {/* <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="fullstack"
              title="Creative Agency"
              githubHref="#"
              previewHref="#"
              showCard={showCard}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  githubHref,
  previewHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-white mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <div className="flex justify-center space-x-2">
              <a
                href={githubHref}
                className="text-body-color dark:text-dark-6 hover:border-white hover:bg-white inline-block rounded-full border border-stroke dark:border-dark-3 py-2 px-3 text-sm font-medium transition hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={previewHref}
                className="text-body-color dark:text-dark-6 hover:border-white hover:bg-white inline-block rounded-full border border-stroke dark:border-dark-3 py-2 px-3 text-sm font-medium transition hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
