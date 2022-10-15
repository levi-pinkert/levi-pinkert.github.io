import styles from '../styles/Home.module.css'
import { useSpring, animated, easings } from 'react-spring'
import React, { useEffect, useState, useRef } from 'react'
import useIntersection from '../utils/useIntersection';
import useRevealAnim from '../utils/useRevealAnim';

export default function Title({text, size}) {
    const [key, setKey] = useState(Math.round(Math.random() * 100000).toString());
    const bboxRef = useRef();
    const margin = {
        large: '-300px',
        medium: '-200px',
        small: '-150px'
    }[size];
    const layerSeparation = {
        large: 500,
        medium: 300,
        small: 300
    }[size];
    const layerAnimTime = {
        large: 3000,
        medium: 1500,
        small: 1500
    }[size];
    const visible = useIntersection(bboxRef, margin);
    const progress = useRevealAnim(visible, 4, layerSeparation, layerAnimTime, easings.easeOutQuart).map(p => p.to(n => n*100 + "%"));

    //constants for svg
    const charWidth = {
        large: 110,
        medium: 80,
        small: 60
    }[size];
    const titleWidth = charWidth * (text.length + 2);
    const titleHeight = {
        large: 300,
        medium: 250,
        small: 200
    }[size];
    const textStyle = {
        large: styles.bigText,
        medium: styles.mediumText,
        small: styles.smallText
    }[size];
    const lineSeparation = {
        large: 10,
        medium: 7,
        small: 5
    }[size];
    const outlineStrokeWidth = {
        large: "2",
        medium: "1",
        small: "1"
    }[size];
    const dotSeparation = {
        large: 6,
        medium: 6,
        small: 4
    }[size];
    const dotRadius = {
        large: 2,
        medium: 2,
        small: 4/3
    }[size];

    return (
        <div className={styles.titleContainer}>
            <svg width={titleWidth} height={titleHeight} ref={bboxRef} >
                <defs>
                    <pattern id={key + "_dotsPattern"} patternUnits="userSpaceOnUse" width={dotSeparation} height={dotSeparation} x="0" y="0">
                        <circle cx={dotSeparation/2} cy={dotSeparation/2} r={dotRadius} fill="black" />
                    </pattern>
                    <pattern id={key + "_linesPattern"} patternUnits="userSpaceOnUse" width={lineSeparation} height={lineSeparation} x="0" y="0">
                        <path d={`M 0 ${lineSeparation} L ${lineSeparation} 0`} stroke="black" fill="transparent" />
                        <path d={`M 0 ${2 * lineSeparation} L ${2 * lineSeparation} 0`} stroke="black" fill="transparent" />
                        <path d={`M ${-lineSeparation} ${lineSeparation} L ${lineSeparation} ${-lineSeparation}`} stroke="black" fill="transparent" />
                    </pattern>

                    <mask id={key + "_mask0"}>
                        <rect width={titleWidth} height={titleHeight} fill={"black"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[0]} height={titleHeight} fill={"white"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[1]} height={titleHeight} fill={"black"} />
                    </mask>
                    <mask id={key + "_mask1"}>
                        <rect width={titleWidth} height={titleHeight} fill={"black"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[1]} height={titleHeight} fill={"white"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[2]} height={titleHeight} fill={"black"} />
                    </mask>
                    <mask id={key + "_mask2"}>
                        <rect width={titleWidth} height={titleHeight} fill={"black"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[2]} height={titleHeight} fill={"white"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[3]} height={titleHeight} fill={"black"} />
                    </mask>
                    <mask id={key + "_mask3"}>
                        <rect width={titleWidth} height={titleHeight} fill={"black"} />
                        <animated.rect className={styles.cover} transform='skewX(30)' width={progress[3]} height={titleHeight} fill={"white"} />
                    </mask>
                </defs>
                <text x="50%" y="50%" fill={`url(#${key + "_linesPattern"})`} textAnchor="middle" alignmentBaseline='central' className={textStyle} mask={`url(#${key + "_mask0"})`} >{text}</text>
                <text x="50%" y="50%" fill={`url(#${key + "_dotsPattern"})`} textAnchor="middle" alignmentBaseline='central' className={textStyle} mask={`url(#${key + "_mask1"})`} >{text}</text>
                <text x="50%" y="50%" stroke="black" strokeWidth={outlineStrokeWidth} fill="transparent" textAnchor="middle" alignmentBaseline='central' className={textStyle} mask={`url(#${key + "_mask2"})`} >{text}</text>
                <text x="50%" y="50%" fill="black" textAnchor="middle" alignmentBaseline='central' className={textStyle} mask={`url(#${key + "_mask3"})`} >{text}</text>
            </svg>
        </div>
    )
}