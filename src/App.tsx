import { useEffect, useRef, useState } from 'react';
import './App.css';
import './index.css';
import hv from './assets/hv.pdf';

import { HashRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";


import image from "./images/image.png"
import a from "./images/a.png"
import b from "./images/b.png"
import c from "./images/c.png"
import d from "./images/d.png"
import e from "./images/e.png"
import f from "./images/f.png"
import g from "./images/g.png"
import h from "./images/h.png"
import gobit from "./images/gobit.gif"
import todoistd from "./images/todoistd.gif"


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FaBars, FaLinkedinIn } from "react-icons/fa";

import { IoLogoGithub } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Home () {

  return (
    <div className='container-home'> 
      <div className='img-home-container'><img className='image-profile-home' src={image} alt='foto de perfil'/>
      {/* Ojo: este es el ejemplo de Switch */}
      </div>    
      <div className='text-home'>
        <div className='name'>Fernando Camacho</div>
        <div className='container-animacion'>
          <img 
              className='animacion-home'
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&pause=1000&color=EC6142&center=true&random=false&width=333&lines=Desarrollador+junior;Frontend" 
              alt="Typing SVG" 
            />
        </div> 
        <div className='buttons-home'>
          <a href={hv} download="hv.pdf" >
            <button className='btn'>Descargar CV</button>
          </a>
          <a href="mailto:fernando.caamachoo@gmail.com?Subject=Interesado en tus servicios de desarrollo web">
            <button className='btn-diferente'>Contactar</button>
          </a>
        </div> 
        <div className='icon-link'>
            <a href='https://github.com/Feper07' target="_blank" rel="noopener noreferrer"><IoLogoGithub className='icon'/></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='https://www.linkedin.com/in/fernando-camacho-b26368311/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icon'/></a>
            {/*<a href='https://wa.me/573187322647' target="_blank" rel="noopener noreferrer"><FaWhatsapp className='icon'/></a> Link whatsapp*/}
        </div>
      </div>
    </div>
  )
}

function AboutMe () {
  return (
    <div className='container-aboutMe'>    
      <div className='text-aboutMe'>
        <div className='introduccion-aboutMe'>Introducción</div>
        <div className='title-aboutMe'>Sobre mí</div>
        <div className='text-aboutme'>¡Hola! Soy Fernando,<span className='color-diferente-aboutme'> ingeniero mecánico y programador Frontend.</span> Me interesa explorar nuevas tecnologías
         y buscar soluciones creativas a los desafíos que se presentan en el desarrollo web.<br/><br/>
        Cuando no estoy frente a la pantalla, <span className='color-diferente-aboutme'>disfruto pasar tiempo al aire libre y 
        aprender cosas nuevas. Me considero un buen compañero de equipo, siempre dispuesto a colaborar y 
        compartir conocimientos.</span> <br/><br/>
        Estoy comprometido a seguir creciendo y aprendiendo en mi carrera en el campo de la programación.
        </div>
        <div className='button-aboutme'>
          <a href="mailto:fernando.caamachoo@gmail.com?Subject=Interesado en tus servicios de desarrollo web">
            <button className='btn-diferente'>Contactar</button>
          </a>
        </div>
      </div> 
    </div>
  )
}

function Skills () {
  return (
    <div className='container-all-skills'>
      <div className='title-skills-all'>Habilidades</div>
      <div className='container-skills'>    
        <div className='img-skills-container-main'>
          <div className='img-primera-parte-skills'>
            <div className='img-1-skills'>
                  <p className='tooltip-html'>HTML</p>
                  <button className='button-tooltip'>
                  <img className='image-skills-a' src={a} alt='foto de perfil'/>
                  </button>
            </div>
            <div className='img-1-skills'>
                  <p className='tooltip-html'>CSS</p>
                  <button className='button-tooltip'>
                  <img className='image-skills-b' src={b} alt='foto de perfil'/>
                  </button>
            </div>
            <div className='img-1-skills'>
                  <p className='tooltip-html'>JavaScript</p>
                  <button className='button-tooltip'>
                  <img className='image-skills-c' src={c} alt='foto de perfil'/>
                  </button>
            </div>
            <div className='img-1-skills'>
              <p className='tooltip-html'>React</p>
                <button className='button-tooltip'>
                <img className='image-skills-d' src={d} alt='foto de perfil'/>
                </button>
            </div>
          </div>
          <div className='img-segunda-parte-skills'>
            <div className='img-2-skills'>
                 <p className='tooltip-html'>Tailwind</p>
                <button className='button-tooltip'>
                <img className='image-skills-e' src={e} alt='foto de perfil'/>
                </button>
            </div>
            <div className='img-2-skills'>
                <p className='tooltip-html'>TypeScript</p>
                <button className='button-tooltip'>
                <img className='image-skills-f' src={f} alt='foto de perfil'/>
                </button>
            </div>
            <div className='img-2-skills'>
                <p className='tooltip-html'>Bootstrap</p>
                <button className='button-tooltip'>
                <img className='image-skills-g' src={g} alt='foto de perfil'/>
                </button>
            </div>
            <div className='img-2-skills'>
              <p className='tooltip-html'>Git</p>
              <button className='button-tooltip'>
              <img className='image-skills-h' src={h} alt='foto de perfil'/>
              </button>
            </div>
          </div>
        </div>
        <div className='text-skills-container'>
          {/*<div className='title-skills'><span className='mis-skills'>Mis</span><br/><span className='diferente-color-skills-uno'><strong>habilidades</strong></span></div>*/}
          <div className='text-skills'>Estas son las herramientas que he empleado durante<span className='diferente-color-skills'> un año de experiencia práctica en proyectos autónomos</span> como desarrollador junior Frontend.
          </div>
          <div className='button-skills'>
            <a href="mailto:fernando.caamachoo@gmail.com?Subject=Interesado en tus servicios de desarrollo web">
              <button className='btn-diferente'>Contactar</button>
            </a>
          </div>
        </div>  
      </div>
    </div>
    
  )
}

function Projects () {
  return (
    <div className='projects-container'>
      <div className='title-projects'>
        <div className='first-title-projects'>Mis <span className='diferente-color'>&nbsp;Trabajos</span></div>
        <div className='second-title-projects'>Proyectos Recientes</div>
      </div>
      <div className='all-videos-projects'>
        <div className='container-uno-projects'>
          <div className='text-video-uno'>
            <div className='title-text-project-one'>Aplicación Web React con TypeScript<br/><span className='strong-project-title'><strong>Todoist</strong></span></div>
            <div className='text-first-project'>Esta aplicación gestiona tareas con etiquetas, fechas y prioridades, facilitando la <span className='color-diferent-text-project'>adición, edición y eliminación 
              mediante props y estados de React,</span>y ofrece vistas según la fecha seleccionada para un mejor seguimiento diario y planificado.
            </div>
          </div>
          <div className='video-uno-add'>
            <img className='gif-projects-uno' src={todoistd} alt='video-projects-uno'/>
          </div>
          <div className='links-container-proyect'>
            <a className='name-link-projects' href='https://github.com/Feper07/clone-todoist-typescript' target="_blank" rel="noopener noreferrer"><button className='btn'> Repositorio</button></a>
            <a className='name-link-projects' href='https://www.linkedin.com/in/fernando-camacho-b26368311/' target="_blank" rel="noopener noreferrer"><button className='btn-diferente'>Ver Demo</button></a>
          </div>
        </div>
        <div className='container-dos-projects'>
          <div className='text-video-dos'>
            <div className='title-text-project-two'>Aplicación Web React con TypeScript<br/><span className='strong-project-title'><strong>Tienda GOBI</strong></span></div>
            <div className='text-second-project'>Esta aplicación es una tienda de ropa en línea donde los usuarios pueden realizar 
            búsquedas <span className='strong-project-title'>aplicando diferentes filtros</span>. El diseño, implementado con <span className='strong-project-title'>CSS Grid</span>, proporciona una experiencia de 
            navegación eficiente y organizada.
            </div>
          </div>
          <div className='video-dos-add'>
            <img className='gif-projects-uno' src={gobit} alt='video-projects-uno'/>
          </div>
          <div className='links-container-proyect'>
            <a className='name-link-projects' href='https://github.com/Feper07/Feper07-shore-gobi-aliexpress-typescript' target="_blank" rel="noopener noreferrer"><button className='btn'> Repositorio</button></a>
            <a className='name-link-projects' href='https://www.linkedin.com/in/fernando-camacho-b26368311/' target="_blank" rel="noopener noreferrer"><button className='btn-diferente'>Ver Demo</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}


function App() {

  // Estado para cambiar la barra a icon despues del responsive
  const [modalOpen, setModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null)

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <Router>
    <div className="App">
        <div className='header-main'>
          <div className='item-container-1' style={{ display: 'flex' }}> {/*El style aqui mantiene siempre visible el "link-name" */}
            <Link to="/Home" className='link-name'>Fernando <span className='diferente-color'>Camacho &lt;/&gt;</span></Link>
          </div>  
          <div className='item-container'>
            <Link to="/Home" className='link'>Home</Link>
          </div>  
          <div className='item-container'>
            <Link to="/AboutMe" className='link'>Sobre mí</Link>
          </div>  
          <div className='item-container'>
            <Link to="/Skills" className='link'>Habilidades&nbsp;&nbsp;&nbsp;</Link>
          </div>  
          <div className='item-container'>
            <Link to="/Projects" className='link'>Proyectos</Link>
          </div>   
          {/*para cambiar la barra a icon despues del responsive */} 
          <div className='menu-icon' onClick={toggleModal}>
              <FaBars />
            </div> 
        </div>
        {/*para cambiar la barra a icon despues del responsive */}
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal" ref={containerRef}>
              <div className='modal-close'><IoClose className='IoClose' onClick={toggleModal} /></div>
              <div className="modal-content">
                <div className='modal-container'><Link to="/Home" className='link' onClick={toggleModal}>Home</Link></div>
                <div className='modal-container'><Link to="/AboutMe" className='link' onClick={toggleModal}>Sobre mí</Link></div>
                <div className='modal-container'><Link to="/Skills" className='link' onClick={toggleModal}>Habilidades</Link></div>
                <div className='modal-container'><Link to="/Projects" className='link' onClick={toggleModal}>Proyectos</Link></div>
              </div>
            </div>
          </div>
        )}
        <div className='routes-container'>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="*" element={<Navigate to="/Home" />} />{/* Cualquier ruta que no coincida con las rutas definidas sea redirigida a /Home */}
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;