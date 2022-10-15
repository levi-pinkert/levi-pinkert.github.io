import styles from '../styles/Headshot.module.css'
import Image from 'next/image'
import { useSpring, animated, easings } from 'react-spring'
import { useRef, useEffect } from 'react'
import { useModal } from '../pages';

const revealHeadshot = "/cropheadshot.png";
const baseHeadshot = "/cropheadshotgrayscale.png";

const Headshot = () => {
    const element = useRef();
    const [{x, y, scale}, api] = useSpring(() => ({ x: 0, y: 0, scale: 0, immediate: true }));
    const { modalOpen } = useModal();

    const setCursorVisible = (visible) => {
        api.start({ scale: visible ? 1 : 0, config: { duration: 600, easing: easings.easeOutQuart } });
    }

    useEffect(() => {
        if(!element.current){ return; }

        const moveCursor = (e) => {
            console.log("hello");
            api.start({ x: e.offsetX, y: e.offsetY, config: { duration: 5 } });
        }

        element.current.addEventListener('mousemove', moveCursor);
        return () => { element.current.removeEventListener('mousemove', moveCursor); }
    }, [element]);

    const lineSeparation = 7;

    return <div
        className={modalOpen ? styles.lowHeadshotContainer : styles.headshotContainer}
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
        ref={element}
    >
        <Image src={baseHeadshot} layout="intrinsic" width="2185" height="2913" />
        <svg className={styles.headshotOverlay}>
            <defs>
                <pattern id={"headshot_linesPattern"} patternUnits="userSpaceOnUse" width={lineSeparation} height={lineSeparation} x="0" y="0">
                    <rect width="100%" height="100%" fill="white" />
                    <path d={`M 0 ${lineSeparation} L ${lineSeparation} 0`} stroke="black" fill="transparent" />
                    <path d={`M 0 ${2 * lineSeparation} L ${2 * lineSeparation} 0`} stroke="black" fill="transparent" />
                    <path d={`M ${-lineSeparation} ${lineSeparation} L ${lineSeparation} ${-lineSeparation}`} stroke="black" fill="transparent" />
                </pattern>
                <mask id="headshotmask">
                    <rect width="100%" height="100%" fill="black" />
                    <animated.circle cx={x} cy={y} r={scale.to(n => n*130)} fill="white" />
                </mask>
            </defs>
            <g mask="url(#headshotmask)">
                <foreignObject width="100%" height="100%">
                    <Image src={revealHeadshot} layout="intrinsic" width="2185" height="2913" />
                </foreignObject>
            </g>
        </svg>
    </div>;
}

export default Headshot;