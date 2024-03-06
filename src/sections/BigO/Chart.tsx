import styles from './bigo.module.sass'


export default function Chart() {
    const colors = {
        red: 'rgba(255, 77, 77, 0.7)',
        orange: 'rgba(255, 161, 22, 0.7)',
        yellow: 'rgba(255, 216, 102, 0.7)',
        oliveGreen: 'rgba(169, 220, 118, 0.7)',
        green: 'rgba(63, 200, 111, 0.7)'
    }

    return (
        <section id="bigo-chart">
            <div className={styles.container}>
                <h3>Big-O Complexity Chart</h3>
                <svg id="chart" viewBox="0 0 800 500">
                    <path d="M50 450 L 50 0 L 800 0 L 800 450 Z" fill={colors.red}></path>
                    <path d="M50 450 L 800 0 L 800 450 Z" fill={colors.orange}></path>
                    <path d="M50 450 L 800 450 L 800 330 Z" fill={colors.yellow}></path>
                    <path d="M50 450 L 800 450 L 800 410 Z" fill={colors.oliveGreen}></path>
                    <path d="M50 450 L 800 450 L 800 440 Z" fill={colors.green}></path>

                    <path d="M50 0 L 50 450 L 800 450" fill="transparent" stroke="black" strokeWidth="2"></path>

                    <path d="M50 448 L 800 448" fill="transparent" stroke="black" strokeWidth="2"></path>
                    <text x="700" y="438" fill="black">O(log n), O(1)</text>

                    <path d="M50 450 L 800 400" fill="transparent" stroke="black" strokeWidth="2"></path>
                    <text x="760" y="390" fill="black">O(n)</text>

                    <path d="M50 450 Q 400 350, 800 150" fill="transparent" stroke="black" strokeWidth="2"></path>
                    <text x="630" y="190" fill="black">O(n log n)</text>

                    <path d="M50 450 Q 180 380, 250 0" fill="transparent" stroke="black" strokeWidth="2"></path>
                    <text x="260" y="30" fill="black">O(n^2)</text>

                    <path d="M50 450 C 100 430, 120 350, 120 0" fill="transparent" stroke="black" strokeWidth="2"></path>
                    <text x="125" y="20" fill="black">O(2^n)</text>

                    <path d="M50 450 C 80 450, 80 350, 80 0" fill="transparent" stroke="black" strokeWidth="2"></path>
                    <text x="80" y="20" fill="black">O(n!)</text>

                    <text className={styles.label} x="0" y="0" transform="translate(30 230) rotate(-90)" fill="black">Operations</text>
                    <text className={styles.label} x="0" y="0" transform="translate(420 470)" fill="black">Elements</text>
                </svg>
            </div>
        </section>
    )
}
