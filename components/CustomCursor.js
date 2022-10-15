import { useState, useEffect, useRef, createContext, useContext } from 'react';
import styles from '../styles/CustomCursor.module.css'
import { useSpring, animated, interpolate, easings } from 'react-spring';

const CursorContext = createContext();

const CustomCursor = ({children}) => {
    const [{x, y, scale}, api] = useSpring(() => ({ x: 0, y: 0, scale: 1, immediate: true }));

    useEffect(() => {
        const moveCursor = (e) => {
            api.start({ x: e.clientX, y: e.clientY, config: { duration: 5 } });
        }

        window.addEventListener('mousemove', moveCursor);
        return () => { window.removeEventListener('mousemove', moveCursor); }
    }, []);

    return <>
        <animated.div
            className={styles.cursor}
            style={{
                transform: interpolate([x, y, scale], (x, y, scale) => `translate(${x}px, ${y}px) scale(${scale})`)
            }}
        />
        <CursorContext.Provider value={{setCursorVisible: (newVal) => {
            api.start({ scale: newVal ? 1 : 0, config: { duration: 200, easing: easings.easeOutQuart } })
        }}}>
            {children}
        </CursorContext.Provider>
    </>;
}

export const useCursor = () => {
    return useContext(CursorContext);
}

export default CustomCursor;