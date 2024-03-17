import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs'

import TestKthBitPY from '@code/python/bit_manipulation/test_kth_bit.py?raw'
import SetKthBitPY from '@code/python/bit_manipulation/set_kth_bit.py?raw'
import ClearKthBitPY from '@code/python/bit_manipulation/clear_kth_bit.py?raw'
import ToggleKthBitPY from '@code/python/bit_manipulation/toggle_kth_bit.py?raw'
import GetRightmostBitPY from '@code/python/bit_manipulation/get_rightmost_bit.py?raw'
import CountSetBitsPY from '@code/python/bit_manipulation/count_set_bits.py?raw'
import MultiplyByPowerOfTwoPY from '@code/python/bit_manipulation/multiply_power_of_two.py?raw'
import DivideByPowerOfTwoPY from '@code/python/bit_manipulation/divide_power_of_two.py?raw'
import CheckPowerOfTwoPY from '@code/python/bit_manipulation/check_power_of_two.py?raw'
import SwapVariablesPY from '@code/python/bit_manipulation/swap_variables.py?raw'

import TestKthBitJS from '@code/javascript/bit_manipulation/test_kth_bit.js?raw'
import SetKthBitJS from '@code/javascript/bit_manipulation/set_kth_bit.js?raw'
import ClearKthBitJS from '@code/javascript/bit_manipulation/clear_kth_bit.js?raw'
import ToggleKthBitJS from '@code/javascript/bit_manipulation/toggle_kth_bit.js?raw'
import GetRightmostBitJS from '@code/javascript/bit_manipulation/get_rightmost_bit.js?raw'
import CountSetBitsJS from '@code/javascript/bit_manipulation/count_set_bits.js?raw'
import MultiplyByPowerOfTwoJS from '@code/javascript/bit_manipulation/multiply_power_of_two.js?raw'
import DivideByPowerOfTwoJS from '@code/javascript/bit_manipulation/divide_power_of_two.js?raw'
import CheckPowerOfTwoJS from '@code/javascript/bit_manipulation/check_power_of_two.js?raw'
import SwapVariablesJS from '@code/javascript/bit_manipulation/swap_variables.js?raw'


export default function BitManipulation() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Bit Manipulation</h2>
            <section id="bitmanipulation-test-kth-bit">
                <Tabs title="test kth-bit">
                    <Tabs.Tab code={TestKthBitPY} language="python" />
                    <Tabs.Tab code={TestKthBitJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-set-kth-bit">
                <Tabs title="set kth bit">
                    <Tabs.Tab code={SetKthBitPY} language="python" />
                    <Tabs.Tab code={SetKthBitJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-clear-kth-bit">
                <Tabs title="clear kth bit">
                    <Tabs.Tab code={ClearKthBitPY} language="python" />
                    <Tabs.Tab code={ClearKthBitJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-toggle-kth-bit">
                <Tabs title="toggle kth bit">
                    <Tabs.Tab code={ToggleKthBitPY} language="python" />
                    <Tabs.Tab code={ToggleKthBitJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-get-rightmost-bit">
                <Tabs title="get rightmost bit">
                    <Tabs.Tab code={GetRightmostBitPY} language="python" />
                    <Tabs.Tab code={GetRightmostBitJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-count-set-bits">
                <Tabs title="count set bits">
                    <Tabs.Tab code={CountSetBitsPY} language="python" />
                    <Tabs.Tab code={CountSetBitsJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-multiply-power-of-two">
                <Tabs title="multiply by 2^k">
                    <Tabs.Tab code={MultiplyByPowerOfTwoPY} language="python" />
                    <Tabs.Tab code={MultiplyByPowerOfTwoJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-divide-power-of-two">
                <Tabs title="divide by 2^k">
                    <Tabs.Tab code={DivideByPowerOfTwoPY} language="python" />
                    <Tabs.Tab code={DivideByPowerOfTwoJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-check-power-of-two">
                <Tabs title="check if number is power of 2">
                    <Tabs.Tab code={CheckPowerOfTwoPY} language="python" />
                    <Tabs.Tab code={CheckPowerOfTwoJS} language="javascript" />
                </Tabs>
            </section>
            <section id="bitmanipulation-swap-variables">
                <Tabs title="swap two variables">
                    <Tabs.Tab code={SwapVariablesPY} language="python" />
                    <Tabs.Tab code={SwapVariablesJS} language="javascript" />
                </Tabs>
            </section>
        </div>
    )
}
