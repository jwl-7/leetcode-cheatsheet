import styles from './Background.module.sass'

export default function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
        </div>
    )
}
