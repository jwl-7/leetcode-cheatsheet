import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import CreateCopyPY from '@code/python/matrix/create_copy.py?raw'
import DiagonalsPY from '@code/python/matrix/diagonals.py?raw'
import RotateTransposePY from '@code/python/matrix/rotate_transpose.py?raw'

import CreateCopyJS from '@code/javascript/matrix/create_copy.js?raw'
import DiagonalsJS from '@code/javascript/matrix/diagonals.js?raw'
import RotateTransposeJS from '@code/javascript/matrix/rotate_transpose.js?raw'

import CreateCopyJAVA from '@code/java/matrix/create_copy.java?raw'
import DiagonalsJAVA from '@code/java/matrix/diagonals.java?raw'
import RotateTransposeJAVA from '@code/java/matrix/rotate_transpose.java?raw'

import CreateCopyCPP from '@code/cpp/matrix/create_copy.cpp?raw'
import DiagonalsCPP from '@code/cpp/matrix/diagonals.cpp?raw'
import RotateTransposeCPP from '@code/cpp/matrix/rotate_transpose.cpp?raw'

import CreateCopyRuby from '@code/ruby/matrix/create_copy.rb?raw'
import DiagonalsRuby from '@code/ruby/matrix/diagonals.rb?raw'
import RotateTransposeRuby from '@code/ruby/matrix/rotate_transpose.rb?raw'

export default function Matrix() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Matrix</h2>
            <section id="matrix-create-copy">
                <Tabs title="create / copy">
                    <Tabs.Tab code={CreateCopyPY} language="python" />
                    <Tabs.Tab code={CreateCopyJS} language="javascript" />
                    <Tabs.Tab code={CreateCopyJAVA} language="java" />
                    <Tabs.Tab code={CreateCopyCPP} language="cpp" />
                    <Tabs.Tab code={CreateCopyRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="matrix-diagonals">
                <Tabs title="diagonals / anti-diagonals">
                    <Tabs.Tab code={DiagonalsPY} language="python" />
                    <Tabs.Tab code={DiagonalsJS} language="javascript" />
                    <Tabs.Tab code={DiagonalsJAVA} language="java" />
                    <Tabs.Tab code={DiagonalsCPP} language="cpp" />
                    <Tabs.Tab code={DiagonalsRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="matrix-rotate-transpose">
                <Tabs title="rotate / transpose">
                    <Tabs.Tab code={RotateTransposePY} language="python" />
                    <Tabs.Tab code={RotateTransposeJS} language="javascript" />
                    <Tabs.Tab code={RotateTransposeJAVA} language="java" />
                    <Tabs.Tab code={RotateTransposeCPP} language="cpp" />
                    <Tabs.Tab code={RotateTransposeRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
