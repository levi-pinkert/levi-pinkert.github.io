import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useRef, useEffect, useState, useContext, createContext } from 'react'
import Title from '../components/Title'
import ProjectDisplay from '../components/ProjectDisplay'
import SocialButton from '../components/SocialButton'
import Typewriter from 'typewriter-effect'
import CustomCursor from '../components/CustomCursor'
import Headshot from '../components/Headshot'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import { stealthStartupInfo } from '../content/stealthStartup'
import { rplInfo } from '../content/rpl'
import { portfolioInfo } from '../content/portfolioSite'
import { clumpInfo } from '../content/clump'
import { doOrDieInfo } from '../content/doOrDie'
import { wordItInfo } from '../content/wordit'
import { moreGamesInfo } from '../content/moregames'
import { cppInfo } from '../content/cPlusPlus'
import { javaInfo } from '../content/java'
import { jsTsInfo } from '../content/jsts'
import { reactInfo } from '../content/react'
import { firebaseInfo } from '../content/firebase'
import { codeWarsInfo } from '../content/codewars'
import { codeQuestInfo } from '../content/codequest'

const headerParagraph = "Hello! I'm a second-year student at the University of Southern California studying computer science and game development. Over the summer, I worked for a startup as a web developer. In my free time, I design and engineer video games. Scroll down to see more!";

const ModalContext = createContext();
export const useModal = () => { return useContext(ModalContext) };

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if(modalOpen){
      disablePageScroll();
    }else{
      enablePageScroll();
    }
  }, [modalOpen]);

  return (
    <ModalContext.Provider value={{modalOpen, setModalOpen}}>
      <div className={styles.container}>
        <Head>
          <title>Levi Pinkert</title>
        </Head>
        <CustomCursor>
          <div className={styles.whiteBackground} />
          <div className={styles.topPage}>
            <Title text="Levi Pinkert" size="large" />
            <div className={styles.bio}>
              <Headshot />
              <div className={styles.bar} />
              <div className={styles.bioText}>
                <Typewriter
                  options={{
                    loop: false,
                    delay: 10,
                  }}
                  onInit={(typewriter) => typewriter.pauseFor(3000).typeString(headerParagraph).start()}
                />
              </div>
            </div>
          </div>
          <Title text="Web Development" size="small" />
          <ProjectDisplay info={stealthStartupInfo} />
          <ProjectDisplay info={rplInfo} />
          <ProjectDisplay info={portfolioInfo} />
          <Title text="Games" size="small" />
          <ProjectDisplay info={clumpInfo} />
          <ProjectDisplay info={doOrDieInfo} />
          <ProjectDisplay info={wordItInfo} />
          <ProjectDisplay info={moreGamesInfo} />
          <Title text="Skills" size="small" />
          <ProjectDisplay info={cppInfo} />
          <ProjectDisplay info={javaInfo} />
          <ProjectDisplay info={jsTsInfo} />
          <ProjectDisplay info={reactInfo} />
          <ProjectDisplay info={firebaseInfo} />
          <Title text="Other Accomplishments" size="small" />
          <ProjectDisplay info={codeWarsInfo} />
          <ProjectDisplay info={codeQuestInfo} />
          <div className={styles.footer}>
            © 2022 Levi Pinkert<br/>
            levi.pinkert@gmail.com<br/>
            (303) 807-0346
          </div>
          <div className={styles.socialButtons}>
            <SocialButton size={80} icon="linkedin" link="https://www.linkedin.com/in/levi-pinkert/" />
            <SocialButton size={80} icon="github" link="https://github.com/levi-pinkert/" />
            <SocialButton size={80} icon="resume" link="/Levi-Pinkert-Resume.pdf" />
          </div>
        </CustomCursor>
      </div>
    </ModalContext.Provider>
  )
}
