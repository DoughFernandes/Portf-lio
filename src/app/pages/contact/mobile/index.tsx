'use client';

import { container } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import ContatoIcons from '@src/components/Contact';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './mobile.module.scss';

export default function Contact() {
  const { profile } = useProfile();

  return (
    <>
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.contact}>
          <h1>Contate-me</h1>
          <p>Estou disponível para novos desafios e colaborações. Entre em contato comigo pelas minhas redes sociais ou via WhatsApp 😁😉</p>
          <ContatoIcons />
        </section>
      </motion.main>
    </>
  );
}
