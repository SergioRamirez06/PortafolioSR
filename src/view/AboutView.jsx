import { tools } from "../data/tools";
import { tech } from "../data/tech";
import { useState } from 'react';



export const AboutView = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
        <article>
          <header>
            <div className="text-2xl font-bold text-white mb-5 flex items-center">
              Acerca De Mi &nbsp;
              <div className="h-[1px] w-32 bg-amber-200 md:w-96"></div>
            </div>
          </header>
          <section className="text-sm md:text-lg flex flex-col gap-4 md:flex-row md:gap-8 md:items-center">
            <div className="flex justify-center">
              <img className="w-9/12 rounded-full mb-3" src="../src/assets/Img/portada1.png" alt="Foto" />
            </div>
            <div className="md:w-7/12">
              <p className="mb-3 md:mb-7">¡Hola a todos! Mi nombre es Sergio Andrés Ramírez Acosta. Soy desarrollador web de Villanueva, La Guajira, con 1 año de experiencia en desarrollo web back-end. Me especializo en crear sitios web que no solo sean funcionales y fáciles de usar, sino también atractivos y eficientes. Trabajo con tecnologías como JavaScript, React y Node.js para construir aplicaciones interactivas y dinámicas.</p>
              <p className="mb-3">Además, tengo experiencia en bases de datos como PostgreSQL, y domino los fundamentos de HTML y CSS para asegurar que el diseño y la estructura sean impecables. Si está interesado en colaborar conmigo, no dude en ponerse en contacto a través de la información proporcionada. ¡Estoy aquí para ayudarle a hacer realidad sus proyectos web!</p>
            </div>
          </section>
        </article>
      </div>

      <div className="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
        <article>
          <header>
            <div className="text-2xl font-bold text-white mb-5 flex items-center">
              <div className="h-[1px] w-10 bg-amber-200 md:w-20"></div>&nbsp; Skills
            </div>
          </header>
          <section>
            <div>
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
                <li className="mr-2">
                  <button className={`inline-block px-4 py-3 rounded-lg hover:text-white ${activeTab === 1 ? 'text-amber-200 bg-amber-200 bg-opacity-10' : ''}`} onClick={() => setActiveTab(1)}>Tech Stack</button>
                </li>
                <li className="mr-2">
                  <button className={`inline-block px-4 py-3 rounded-lg hover:text-white ${activeTab === 2 ? 'text-amber-200 bg-amber-200 bg-opacity-10' : ''}`} onClick={() => setActiveTab(2)}>Tools</button>
                </li>
              </ul>
            </div>

            {activeTab === 1 && (
              <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tech.map(item => (
                  <div key={item.id}>
                    <div className="item-tech flex items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <img src={item.imageUrl} alt={item.name} className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%]" />
                      </div>
                      <div className="flex items-center">
                        <div className="tech font-medium">{item.name}</div>
                        <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200">{item.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tools.map(item => (
                  <div key={item.id}>
                    <div className="item-tech flex items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <img src={item.imageUrl} alt={item.name} className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%]" />
                      </div>
                      <div className="flex items-center">
                        <div className="tech font-medium">{item.name}</div>
                        <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200">{item.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </article>
      </div>
    </div>
  )
}
