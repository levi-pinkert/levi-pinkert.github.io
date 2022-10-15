import { useEffect, useState } from 'react';
import useRevealAnim from '../utils/useRevealAnim';
import { animated, easings } from 'react-spring';
import styles from '../styles/SocialButton.module.css'
import { useCursor } from './CustomCursor';

export default function SocialButton({size, link, icon}){
    const [hovered, setHovered] = useState(false);
    const [key, setKey] = useState(Math.round(Math.random() * 100000).toString());
    const progress = useRevealAnim(hovered, 3, 250, 600, easings.easeOutQuart).map(p => p.to(n => n*220 + "%"));
    const { setCursorVisible } = useCursor();

    useEffect(() => {
        setCursorVisible(!hovered);
    }, [hovered]);

    let svgSize, svgMargin, pathString;
    let lineSeparation = 2;
    let strokeWidth = .25;
    let outlineWidth = 1;
    if(icon == 'linkedin'){
        svgSize = 48;
        svgMargin = 7;
        pathString = "M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z";
    }else if(icon == 'github'){
        svgSize = 25;
        svgMargin = -1;
        pathString = "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";
        lineSeparation = 1.6;
        strokeWidth = .25;
        outlineWidth = .9;
    }else if(icon == 'resume'){
        svgSize = 620;
        svgMargin = -10;
        pathString = "M553.941,473.344 L418.288,473.344 L418.288,610.633 L553.941,473.344 M553.941,38.164C553.941,17.069,536.872,0,515.777,0H94.855C73.78,0,56.691,17.069,56.691,38.164v534.305 c0,21.095,17.088,38.164,38.164,38.164h284.613V449.395c0-10.548,8.534-19.082,19.082-19.082h155.391V38.164z M114.066,95.625 h191.25v43.031h-191.25V95.625z M114.066,215.156h191.25v43.031h-191.25V215.156z M305.316,497.25h-191.25v-43.031h191.25V497.25z M487.004,377.719H114.066v-43.031h372.938V377.719z M487.004,258.188H367.473V95.625h119.531V258.188z";
        strokeWidth = 6;
        lineSeparation = 38;
        outlineWidth = 20;
    }
    
    return <a
        className={styles.iconContainer}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={link}
        target="_blank"
    >
        <svg
            width={size + "px"}
            height={size + "px"}
            viewBox={`${svgMargin} ${svgMargin} ${svgSize - 2*svgMargin} ${svgSize - 2*svgMargin}`}
        >
            <defs>
                <pattern id={key + "_linesPattern"} patternUnits="userSpaceOnUse" width={lineSeparation} height={lineSeparation} x="0" y="0">
                    <path d={`M 0 ${lineSeparation} L ${lineSeparation} 0`} stroke="black" fill="transparent" strokeWidth={strokeWidth} />
                    <path d={`M 0 ${2 * lineSeparation} L ${2 * lineSeparation} 0`} stroke="black" fill="transparent" strokeWidth={strokeWidth} />
                    <path d={`M ${-lineSeparation} ${lineSeparation} L ${lineSeparation} ${-lineSeparation}`} stroke="black" fill="transparent" strokeWidth={strokeWidth} />
                </pattern>
                <mask id={key + "_mask0"}>
                    <rect width={svgSize} height={svgSize} fill={"white"} />
                    <animated.rect className={styles.cover} transform='skewX(-30)' width={progress[0]} height="150%" fill={"black"} x="-60%" y="-10%" />
                </mask>
                <mask id={key + "_mask1"}>
                    <rect width={svgSize} height={svgSize} fill={"black"} />
                    <animated.rect className={styles.cover} transform='skewX(-30)' width={progress[0]} height="150%" fill={"white"} x="-60%" y="-10%" />
                    <animated.rect className={styles.cover} transform='skewX(-30)' width={progress[1]} height="150%" fill={"black"} x="-60%" y="-10%" />
                </mask>
                <mask id={key + "_mask2"}>
                    <rect width={svgSize} height={svgSize} fill={"black"} />
                    <animated.rect className={styles.cover} transform='skewX(-30)' width={progress[1]} height="150%" fill={"white"} x="-60%" y="-10%" />
                </mask>
            </defs>
            <g id="Icon/Social/linkedin-color" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d={pathString} fill='black' mask={`url(#${key}_mask0)`} />
                <path d={pathString} fill={`url(#${key}_linesPattern)`} mask={`url(#${key}_mask1)`} />
                <path d={pathString} fill='none' stroke="black" strokeWidth={outlineWidth} mask={`url(#${key}_mask2)`} />
            </g>
        </svg>
    </a>
}