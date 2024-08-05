'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import { FaLanguage } from 'react-icons/fa';
import styles from './desktop.module.scss';

export default function About() {
  const { profile } = useProfile();

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.about}>
          <motion.figure variants={itemX} className={styles.figure}>
            <img src={profile.foto} alt='foto de perfil' />
          </motion.figure>

          <motion.section variants={item} className={styles.description}>
            <h2>Olá, seja bem vindo</h2>
            <p>{profile.descricao}</p>

            <motion.section variants={itemX} className={styles.idiomas}>
              {profile.idiomas &&
                Object.entries(profile.idiomas).map(([idioma, nivel], index) => (
                  <div key={index} className={styles.idioma}>
                    <FaLanguage />
                    <span>
                      {idioma}: {nivel}
                    </span>
                  </div>
                ))}
            </motion.section>
          </motion.section>
        </section>
      </motion.main>
    </>
  );
}
