import styles from './background.module.sass'


export default function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
        </div>
    )
}
