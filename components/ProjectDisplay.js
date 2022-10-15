import styles from '../styles/ProjectDisplay.module.css'
import React from 'react'
import FancyButton from './FancyButton';
import ProjectImage from './ProjectImage';
import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5'
import ReactMarkdown from 'react-markdown'
import { useModal } from '../pages/index';
import ItchGame from './ItchGame';
import { useCursor } from './CustomCursor';

export default function ProjectDisplay({ info }) {
    const [modalOpen, setModalOpen] = useState(false);
    const context = useModal();
    const clickable = info.markdown != undefined || info.gameSrc != undefined;

    useEffect(() => {
        context.setModalOpen(modalOpen);
    }, [modalOpen]);

    return <>
        <FancyButton clickable={clickable} onClick={() => {
            setModalOpen(true);
        }}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageWrapper}>
                    <ProjectImage info={info} />
                </div>
                <div className={styles.textWrapper}>
                    <h1 >{info.title}</h1>
                    <p1>{info.description}</p1>
                </div>
            </div>
        </FancyButton>
        {!modalOpen ? null : <>
            <div className={styles.modalFade} onClick={() => setModalOpen(false)} />
            <div className={styles.modal}>
                <div className={styles.exitButton}>
                    <FancyButton onClick={() => setModalOpen(false)}>
                        <IoClose size={60} />
                    </FancyButton>
                </div>
                <div className={styles.scroll} >
                    <h1>
                        {info.title}
                    </h1>
                    <ReactMarkdown
                        components={{a: SpecialA}}
                    >
                        {info.markdown}
                    </ReactMarkdown>
                    {(info.gameSrc && info.gameHeight) ? <ItchGame src={info.gameSrc} height={info.gameHeight} /> : null}
                </div>
            </div>
        </>}
    </>;
}

const SpecialA = ({ children, href }) => {
    const { setCursorVisible } = useCursor();

    return <a
        href={href}
        target="_blank"
        onMouseEnter={() => setCursorVisible(false)}
        onMouseLeave={() => setCursorVisible(true)}
        onClick={() => setCursorVisible(true)}
    >
        {children}
    </a>;
}