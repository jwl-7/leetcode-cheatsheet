import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import CreateCopyPY from '@code/python/matrix/create_copy.py?raw'
import DiagonalsPY from '@code/python/matrix/diagonals.py?raw'
import RotateTransposePY from '@code/python/matrix/rotate_transpose.py?raw'

import CreateCopyJS from '@code/javascript/matrix/create_copy.js?raw'
import DiagonalsJS from '@code/javascript/matrix/diagonals.js?raw'
import RotateTransposeJS from '@code/javascript/matrix/rotate_transpose.js?raw'


export default function Matrix() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Matrix</h2>
            <section id="matrix-create-copy">
                <Tabs title="create / copy">
                    <Tabs.Tab code={CreateCopyPY} language="python" />
                    <Tabs.Tab code={CreateCopyJS} language="javascript" />
                </Tabs>
            </section>
            <section id="matrix-diagonals">
                <Tabs title="diagonals / anti-diagonals">
                    <Tabs.Tab code={DiagonalsPY} language="python" />
                    <Tabs.Tab code={DiagonalsJS} language="javascript" />
                </Tabs>
            </section>
            <section id="matrix-rotate-transpose">
                <Tabs title="rotate / transpose">
                    <Tabs.Tab code={RotateTransposePY} language="python" />
                    <Tabs.Tab code={RotateTransposeJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
