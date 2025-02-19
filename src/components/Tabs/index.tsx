import styles from './tabs.module.sass'

import { Children, ReactElement, ReactNode } from 'react'

import Code from '@components/Code'
import CopyButton from '@components/CopyButton'

import SvgPython from '@icons/Python'
import SvgJavascript from '@/icons/Javascript'
import SvgCpp from '@icons/Cpp'
import SvgJava from '@/icons/Java'
import { useLanguage } from '@components/Language/context'

interface TabsProps {
    title: string
    children: ReactNode
}

interface TabProps {
    code: string
    language: 'python' | 'javascript' | 'java' | 'cpp'
}

const LANGUAGE_ICONS = {
    python: SvgPython,
    javascript: SvgJavascript,
    cpp: SvgCpp,
    java: SvgJava,
}

export default function Tabs({ title, children }: TabsProps) {
    const { selectedLanguage, setSelectedLanguage } = useLanguage()
    const tabs = Children.toArray(children) as ReactElement<TabProps>[]
    const activeIndex = tabs.findIndex(
        (tab) => tab.props.language === selectedLanguage
    )
    const code = tabs[activeIndex].props.code
    const language = tabs[activeIndex].props.language

    const changeTab = (index: number) => {
        setSelectedLanguage(tabs[index].props.language)
    }
    const handleCopy = () => navigator.clipboard.writeText(code)

    const renderTabButtons = () => {
        return tabs.map((tab, index) => {
            const LanguageIcon = LANGUAGE_ICONS[tab.props.language]
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
