import styles from '@sections/section.module.sass'

import Tabs from '@components/Tabs/Tabs'

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

import TestKthBitJAVA from '@code/java/bit_manipulation/test_kth_bit.java?raw'
import SetKthBitJAVA from '@code/java/bit_manipulation/set_kth_bit.java?raw'
import ClearKthBitJAVA from '@code/java/bit_manipulation/clear_kth_bit.java?raw'
import ToggleKthBitJAVA from '@code/java/bit_manipulation/toggle_kth_bit.java?raw'
import GetRightmostBitJAVA from '@code/java/bit_manipulation/get_rightmost_bit.java?raw'
import CountSetBitsJAVA from '@code/java/bit_manipulation/count_set_bits.java?raw'
import MultiplyByPowerOfTwoJAVA from '@code/java/bit_manipulation/multiply_power_of_two.java?raw'
import DivideByPowerOfTwoJAVA from '@code/java/bit_manipulation/divide_power_of_two.java?raw'
import CheckPowerOfTwoJAVA from '@code/java/bit_manipulation/check_power_of_two.java?raw'
import SwapVariablesJAVA from '@code/java/bit_manipulation/swap_variables.java?raw'

import TestKthBitCPP from '@code/cpp/bit_manipulation/test_kth_bit.cpp?raw'
import SetKthBitCPP from '@code/cpp/bit_manipulation/set_kth_bit.cpp?raw'
import ClearKthBitCPP from '@code/cpp/bit_manipulation/clear_kth_bit.cpp?raw'
import ToggleKthBitCPP from '@code/cpp/bit_manipulation/toggle_kth_bit.cpp?raw'
import GetRightmostBitCPP from '@code/cpp/bit_manipulation/get_rightmost_bit.cpp?raw'
import CountSetBitsCPP from '@code/cpp/bit_manipulation/count_set_bits.cpp?raw'
import MultiplyByPowerOfTwoCPP from '@code/cpp/bit_manipulation/multiply_power_of_two.cpp?raw'
import DivideByPowerOfTwoCPP from '@code/cpp/bit_manipulation/divide_power_of_two.cpp?raw'
import CheckPowerOfTwoCPP from '@code/cpp/bit_manipulation/check_power_of_two.cpp?raw'
import SwapVariablesCPP from '@code/cpp/bit_manipulation/swap_variables.cpp?raw'

import TestKthBitRuby from '@code/ruby/bit_manipulation/test_kth_bit.rb?raw'
import SetKthBitRuby from '@code/ruby/bit_manipulation/set_kth_bit.rb?raw'
import ClearKthBitRuby from '@code/ruby/bit_manipulation/clear_kth_bit.rb?raw'
import ToggleKthBitRuby from '@code/ruby/bit_manipulation/toggle_kth_bit.rb?raw'
import GetRightmostBitRuby from '@code/ruby/bit_manipulation/get_rightmost_bit.rb?raw'
import CountSetBitsRuby from '@code/ruby/bit_manipulation/count_set_bits.rb?raw'
import MultiplyByPowerOfTwoRuby from '@code/ruby/bit_manipulation/multiply_power_of_two.rb?raw'
import DivideByPowerOfTwoRuby from '@code/ruby/bit_manipulation/divide_power_of_two.rb?raw'
import CheckPowerOfTwoRuby from '@code/ruby/bit_manipulation/check_power_of_two.rb?raw'
import SwapVariablesRuby from '@code/ruby/bit_manipulation/swap_variables.rb?raw'

export default function BitManipulation() {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Bit Manipulation</h2>
            <section id="bitmanipulation-test-kth-bit">
                <Tabs title="test kth-bit">
                    <Tabs.Tab code={TestKthBitPY} language="python" />
                    <Tabs.Tab code={TestKthBitJS} language="javascript" />
                    <Tabs.Tab code={TestKthBitJAVA} language="java" />
                    <Tabs.Tab code={TestKthBitCPP} language="cpp" />
                    <Tabs.Tab code={TestKthBitRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-set-kth-bit">
                <Tabs title="set kth bit">
                    <Tabs.Tab code={SetKthBitPY} language="python" />
                    <Tabs.Tab code={SetKthBitJS} language="javascript" />
                    <Tabs.Tab code={SetKthBitJAVA} language="java" />
                    <Tabs.Tab code={SetKthBitCPP} language="cpp" />
                    <Tabs.Tab code={SetKthBitRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-clear-kth-bit">
                <Tabs title="clear kth bit">
                    <Tabs.Tab code={ClearKthBitPY} language="python" />
                    <Tabs.Tab code={ClearKthBitJS} language="javascript" />
                    <Tabs.Tab code={ClearKthBitJAVA} language="java" />
                    <Tabs.Tab code={ClearKthBitCPP} language="cpp" />
                    <Tabs.Tab code={ClearKthBitRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-toggle-kth-bit">
                <Tabs title="toggle kth bit">
                    <Tabs.Tab code={ToggleKthBitPY} language="python" />
                    <Tabs.Tab code={ToggleKthBitJS} language="javascript" />
                    <Tabs.Tab code={ToggleKthBitJAVA} language="java" />
                    <Tabs.Tab code={ToggleKthBitCPP} language="cpp" />
                    <Tabs.Tab code={ToggleKthBitRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-get-rightmost-bit">
                <Tabs title="get rightmost bit">
                    <Tabs.Tab code={GetRightmostBitPY} language="python" />
                    <Tabs.Tab code={GetRightmostBitJS} language="javascript" />
                    <Tabs.Tab code={GetRightmostBitJAVA} language="java" />
                    <Tabs.Tab code={GetRightmostBitCPP} language="cpp" />
                    <Tabs.Tab code={GetRightmostBitRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-count-set-bits">
                <Tabs title="count set bits">
                    <Tabs.Tab code={CountSetBitsPY} language="python" />
                    <Tabs.Tab code={CountSetBitsJS} language="javascript" />
                    <Tabs.Tab code={CountSetBitsJAVA} language="java" />
                    <Tabs.Tab code={CountSetBitsCPP} language="cpp" />
                    <Tabs.Tab code={CountSetBitsRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-multiply-power-of-two">
                <Tabs title="multiply by 2^k">
                    <Tabs.Tab code={MultiplyByPowerOfTwoPY} language="python" />
                    <Tabs.Tab code={MultiplyByPowerOfTwoJS} language="javascript" />
                    <Tabs.Tab code={MultiplyByPowerOfTwoJAVA} language="java" />
                    <Tabs.Tab code={MultiplyByPowerOfTwoCPP} language="cpp" />
                    <Tabs.Tab code={MultiplyByPowerOfTwoRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-divide-power-of-two">
                <Tabs title="divide by 2^k">
                    <Tabs.Tab code={DivideByPowerOfTwoPY} language="python" />
                    <Tabs.Tab code={DivideByPowerOfTwoJS} language="javascript" />
                    <Tabs.Tab code={DivideByPowerOfTwoJAVA} language="java" />
                    <Tabs.Tab code={DivideByPowerOfTwoCPP} language="cpp" />
                    <Tabs.Tab code={DivideByPowerOfTwoRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-check-power-of-two">
                <Tabs title="check if number is power of 2">
                    <Tabs.Tab code={CheckPowerOfTwoPY} language="python" />
                    <Tabs.Tab code={CheckPowerOfTwoJS} language="javascript" />
                    <Tabs.Tab code={CheckPowerOfTwoJAVA} language="java" />
                    <Tabs.Tab code={CheckPowerOfTwoCPP} language="cpp" />
                    <Tabs.Tab code={CheckPowerOfTwoRuby} language="ruby" />
                </Tabs>
            </section>
            <section id="bitmanipulation-swap-variables">
                <Tabs title="swap two variables">
                    <Tabs.Tab code={SwapVariablesPY} language="python" />
                    <Tabs.Tab code={SwapVariablesJS} language="javascript" />
                    <Tabs.Tab code={SwapVariablesJAVA} language="java" />
                    <Tabs.Tab code={SwapVariablesCPP} language="cpp" />
                    <Tabs.Tab code={SwapVariablesRuby} language="ruby" />
                </Tabs>
            </section>
        </div>
    )
}
