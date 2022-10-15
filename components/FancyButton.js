import React, { useMemo, useState, useRef, useEffect } from 'react'
import { animated, easings } from 'react-spring'
import styles from '../styles/FancyButton.module.css'
import useRevealAnim from '../utils/useRevealAnim';
import useIntersection from '../utils/useIntersection';
import { useCursor } from './CustomCursor';

export const ButtonContext = React.createContext({
    pressed: false
});

export default function FancyButton({children, onClick, clickable}){
    if(clickable == undefined){ clickable = true; }

    const [contextState, setContextState] = useState({ pressed: false });
    const id = useMemo(() => {Math.random().toString()}, []);
    const bboxRef = useRef();
    const visible = useIntersection(bboxRef, '-50px');
    const overlaySize = 200;
    const progress = useRevealAnim(visible, 1, 300, 1000, easings.easeOutQuad)[0];
    const { setCursorVisible } = useCursor();

    useEffect(() => {
        setCursorVisible(!contextState.pressed);
    }, [contextState.pressed]);

    const lineSeparation = 15;
    return <div
        className={clickable ? styles.background : styles.unclickableBackground}
        onMouseEnter={() => setContextState({ ...contextState, pressed: true })}
        onMouseLeave={() => setContextState({ ...contextState, pressed: false })}
        ref={bboxRef}
        onClick={() => {
            if(clickable){
                setCursorVisible(true);
                onClick();
            }
        }}
    >
        <div className={styles.patternBackground}>
            <svg width="100%" height="100%">
                <defs>
                    <pattern id={id + "_linesPattern"} patternUnits="userSpaceOnUse" width={lineSeparation} height={lineSeparation} x="0" y="0" >
                        <rect width="100%" height="100%" x="0" y="0" fill="white" />
                        <path d={`M 0 0 L ${lineSeparation} ${lineSeparation}`} stroke="black" fill="transparent" strokeWidth={7} />
                        <path d={`M ${-lineSeparation} 0 L ${lineSeparation} ${2*lineSeparation}`} stroke="black" fill="transparent" strokeWidth={7} />
                        <path d={`M 0 ${-lineSeparation} L ${2*lineSeparation} ${lineSeparation}`} stroke="black" fill="transparent" strokeWidth={7} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id}_linesPattern)`} stroke="black" strokeWidth={"2px"} />
            </svg>
        </div>
        
        <div className={styles.overlay} >
            <svg width="100%" height="100%">
                <animated.rect width={progress.to(n => ((1-n) * overlaySize).toString() + "%")} transform="skewX(30)" x={progress.to(n => (n * overlaySize - (overlaySize - 100) / 2).toString() + "%")} height={overlaySize + "%"} fill="white" />
            </svg>
        </div>
        <div className={styles.container} >
            <ButtonContext.Provider value={contextState}>
                {children}
            </ButtonContext.Provider>
        </div>
        
    </div>
}