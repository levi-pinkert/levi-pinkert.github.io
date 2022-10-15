import { useEffect, useState } from 'react'
import {useSpring} from 'react-spring'

const useRevealAnim = (visible, animLayers, layerSeparation, layerAnimTime, layerAnimCurve) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const animProps = {
        config: {
            duration: layerAnimTime,
            easing: layerAnimCurve
        }
    };
    for(let i = 0; i < animLayers; i++){
        animProps["anim" + i.toString()] = activeIndex > i ? 1 : 0;
    }
    const anim = useSpring(animProps);

    //Increase or decrease the activeIndex every second
    useEffect(() => {
        let interval;
        if(visible){
            setActiveIndex(n => Math.min(animLayers, n+1));
            interval = setInterval(() => {
                setActiveIndex(n => Math.min(animLayers, n+1));
            }, layerSeparation);
        }else{
            setActiveIndex(n => Math.max(0, n-1));
            interval = setInterval(() => {
                setActiveIndex(n => Math.max(0, n-1));
            }, layerSeparation);
        }
        return () => clearInterval(interval)
    }, [visible]);

    const progs = [];
    for(let i = 0; i < animLayers; i++){
        progs.push(anim["anim" + i.toString()]);
    }
    return progs;
};

export default useRevealAnim;