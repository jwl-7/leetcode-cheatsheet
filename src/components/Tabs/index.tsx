import styles from './tabs.module.sass'

import { Children, ReactElement, ReactNode, useState } from 'react'

import Code from '@components/Code'
import CopyButton from '@components/CopyButton'

import SvgPython from '@icons/Python'
import SvgJavascript from '@/icons/Javascript'


interface TabsProps {
    title: string
    children: ReactNode
}

interface TabProps {
    code: string
    language: 'python' | 'javascript'
}


export default function Tabs({ title, children }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const tabs = Children.toArray(children) as ReactElement<TabProps>[]
    const code = tabs[activeIndex].props.code
    const language = tabs[activeIndex].props.language

    const changeTab = (index: number) => setActiveIndex(index)
    const handleCopy = () => navigator.clipboard.writeText(code)

    const renderTabButtons = () => {
        return tabs.map((tab, index) => {
            const LanguageIcon = tab.props.language === 'python'
                ? SvgPython
                : SvgJavascript
            const label = `view ${tab.props.language} code`

            return (
                <button
                    role="tab"
                    aria-label={label}
                    aria-selected={index === activeIndex}
                    className={styles.tabButton}
                    key={index}
                    onClick={() => changeTab(index)}
                >
                    <LanguageIcon />
                </button>
            )
        })
    }

    return (
        <div role="tablist" className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.buttonContainer}>
                <div role="tablist" className={styles.tabButtonContainer}>
                    {renderTabButtons()}
                </div>
                <CopyButton onClick={handleCopy} />
            </div>
            <div role="tabpanel" className="tabs-content">
                <Code code={code} language={language} />
            </div>
        </div>
    )
}


Tabs.Tab = (children: TabProps) => <>{children}</>
