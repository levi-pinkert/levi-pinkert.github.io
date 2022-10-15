import styles from '../styles/ItchGame.module.css'
import { useCursor } from './CustomCursor';

const ItchGame = ({ src, height }) => {
    const { setCursorVisible } = useCursor();

    return <div
        className={styles.gameContainer}
        style={{
            paddingBottom: height
        }}
        onMouseEnter={() => setCursorVisible(false)}
        onMouseLeave={() => setCursorVisible(true)}
    >
        <iframe className={styles.iframe} frameborder="0" src={src} allowfullscreen="" width="100%" height="100%" ><a href="https://fajpaj.itch.io/do-or-die">Play Do or Die! on itch.io</a></iframe>
    </div>
}

export default ItchGame;