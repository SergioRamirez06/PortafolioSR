import { useState, useEffect, useRef } from 'react';
import '../assets/css/homeView.css'

export const HomeView = () => {
  const [toRotate] = useState(["Web Developer", "Full-stack Engineer", "Informatics Student", "Tech Enthusiast"]);
  const [period] = useState(2000);
  const [txt, setTxt] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typewriterRef = useRef(null); // Reemplazo de `$refs` en Vue

  // Funcion que simula el tick del typewriter
  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    setTxt(prevTxt => isDeleting 
      ? fullTxt.substring(0, prevTxt.length - 1) : fullTxt.substring(0, prevTxt.length + 1));

    let delta = 300 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      setIsDeleting(true);
    } else if (isDeleting && txt === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      delta = 500;
    }

    setTimeout(() => {
      tick();
    }, delta);
  };

  // useEffect para iniciar el "typewriter" cuando el componente está montado
  useEffect(() => {
    tick(); // Iniciar el ciclo de escritura
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txt, isDeleting]);


 
  return (
    <main className="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
      <div className="space-y-2 text-center md:text-left px-10">
        <p className="text-amber-200">Hola mundo, soy</p>
        <h1 className="text-4xl font-bold md:text-5xl text-white fadein-up">SergioR.</h1>
        <div className="py-2">
          <h1
            className="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up"
            ref={typewriterRef}
          >
            <span className="wrap">{txt}</span>
          </h1>
        </div>
        <p className="text-white pr-4 fade-in-from-left">Bienvenido a mi sitio web personal. <span className="wave">👋🏼</span></p>
        <br />
        {/* Commented out button */}
        {/* <button className="fadein-bot fade-500 flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-4 h-4">
            <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clip-rule="evenodd"></path>
            <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"></path>
          </svg>
          Download Resume
        </button> */}
      </div>
      <div className="flex justify-center md:justify-start fadein-right">
        <img
          alt="avatar"
          // fetchpriority="high"
          width="300"
          height="300"
          decoding="async"
          className="w-11/11 md:h-auto rounded-full border-4 border-amber-200 pict"
          src="../src/assets/Img/portadas.png"
        />
      </div>
    </main>
  )
}
