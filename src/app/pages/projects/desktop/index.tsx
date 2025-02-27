'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import CursorDot from '@src/components/BolinhaBody';
import Loading from '@src/components/Loading';
import useProfile from '@src/hooks/useProfile';
import { Profile } from '@src/interface/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './desktop.module.scss';

export default function ProjectsDesktop() {
  const { profile } = useProfile() as { profile: Profile };
  const [current, setCurrent] = useState<number>(0);

  if (!profile?.portfolio || profile.portfolio.length === 0) {
    return <Loading />;
  }

  const length = profile.portfolio.length;

  const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  const selectSlide = (index: number) => setCurrent(index);

  const { imagem, titulo, descricao, ferramentas, link } = profile.portfolio[current];

  return (
    <>
      <CursorDot />
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.carousel} aria-label='Carrossel de projetos'>
          <section className={styles.main__Content}>
            <motion.section className={styles.main__Project_Container} variants={item}>
              <button className={styles.arrow__Left} onClick={prevSlide} aria-label='Imagem anterior' aria-controls='project-carousel' tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && prevSlide()}>
                &#9664;
              </button>

              <section className={styles.main__Project_Descriptions}>
                <a href={link} target='_blank' rel='noopener noreferrer' className={styles.main__Image_Container}>
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={current}
                      src={imagem}
                      alt={`Imagem do projeto: ${titulo}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                      className={styles.main__Image}
                    />
                  </AnimatePresence>
                </a>

                <motion.header className={styles.header} key={current} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}>
                  <h1>{titulo}</h1>
                  <p>{descricao}</p>
                  <ul className={styles.tool__List}>
                    {Object.entries(ferramentas).map(([tool, iconUrl]) => (
                      <li key={tool} className={styles.tool__Item}>
                        <img src={iconUrl} alt={`Ícone de ${tool}`} className={styles.tool__Icon} />
                      </li>
                    ))}
                  </ul>
                </motion.header>
              </section>

              <button className={styles.arrow__Right} onClick={nextSlide} aria-label='Próxima imagem' aria-controls='project-carousel' tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && nextSlide()}>
                &#9654;
              </button>
            </motion.section>

            <motion.section className={styles.thumbnail__Container} variants={itemX} role='group' aria-label='Miniaturas de projetos'>
              {profile.portfolio.map((project, index) => (
                <figure key={index} className={styles.thumbnail__Figure}>
                  <motion.img
                    src={project.imagem}
                    alt={`Miniatura do projeto: ${project.titulo}`}
                    onClick={() => selectSlide(index)}
                    className={`${styles.thumbnail} ${index === current ? styles.active : ''}`}
                    role='button'
                    aria-pressed={index === current}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && selectSlide(index)}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: index === current ? 1.1 : 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <figcaption>{project.subtitulo}</figcaption>
                </figure>
              ))}
            </motion.section>
          </section>
        </section>
      </motion.main>
    </>
  );
}
