import { useState } from "react";
import { items } from "../data/items";
import '../assets/css/portafolioView.css'


export const PortafolioView = () => {

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
      <article data-page="about">
        <header>
          <div className="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
            <h4>Experiencia pasada en proyectos</h4>
            <h4 className="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
              Explora los proyectos en los que he trabajado hasta ahora
            </h4>
          </div>
        </header>

        <section>
          <div>
            <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
              {items.map((item) => (
                <div key={item.id}>
                  <div className="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5">
                    <div className="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                      <img
                        alt={item.name}
                        className="drop-shadow-xl rounded rounded-xl"
                        src={`../src/assets/Img/${item.imageUrl}.png`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                      <div className="title-text font-medium text-secondary">
                        {item.name}
                      </div>
                      <div className="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                        {item.status}
                      </div>
                      <div className="w-full mt-4 text-normal text-sm text-left text-amber-200">
                        {item.tech}
                      </div>
                      <div className="w-full flex justify-end">
                        <div className="flex cursor-pointer items-end gap-2 text-primary">
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noreferrer"
                              title="View github repository"
                              className="transition-all hover:text-accent"
                            >
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="16"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </a>
                          )}
                          {item.demo && (
                            <a
                              href={item.demo}
                              target="_blank"
                              rel="noreferrer"
                              title="View finished project"
                              className="transition-all hover:text-accent"
                            >
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
