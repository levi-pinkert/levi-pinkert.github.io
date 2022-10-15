import styles from '../styles/ProjectImage.module.css'
import { useContext } from "react";
import { ButtonContext } from "./FancyButton";
import Image from 'next/image';

export default function ProjectImage({ info }){
    const { pressed } = useContext(ButtonContext);

    return <>
        <Image src={pressed ? info.colorImage : info.grayImage} layout='responsive'  width={400} height={300} />
        <Image src={info.colorImage} width={0} height={0} />
    </>;
    //the extra image forces both to load when the page loads
}