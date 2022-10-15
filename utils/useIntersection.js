import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            }, { rootMargin }
        );

        if(element.current){
            observer.observe(element.current);
            //return () => observer.unobserve(element.current);
        }
    }, []);

    return isVisible;
};

export default useIntersection;