import styles from './code.module.sass'

import { useEffect, useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from './python'
import clsx from '@utils/clsx'


hljs.registerLanguage('python', python)
hljs.registerLanguage('javascript', javascript)


interface CodeProps {
    code: string
    language: 'python' | 'javascript' | 'cpp' | 'java'
}


export default function Code({ code, language }: CodeProps) {
    const ref = useRef<HTMLPreElement>(null)
    const [selectedLine, setSelectedLine] = useState<string>('')
    const [parsedCode, setParsedCode] = useState<string>('')

    const classes = clsx(
        'hljs',
        language,
        styles.code
    )

    const highlight = () => {
        const element = ref.current

        if (element) {
            const highlighted = code.split('\n').map((line, index) => {
                const highlightedLine = hljs.highlight(line, { language: language }).value
                return `<span class=${styles.line} data-line-number=${index + 1}>${highlightedLine}</span>`
            })
            const parsed = highlighted.join('')
            setParsedCode(parsed)
        }
    }

    const addEventListeners = () => {
        const preElement = ref.current
        const spans = preElement?.querySelectorAll('span[data-line-number]')
        spans?.forEach(span => span.addEventListener('click', handleClick as EventListener))
    }

    const removeEventListeners = () => {
        const preElement = ref.current
        const spans = preElement?.querySelectorAll('span[data-line-number]')
        spans?.forEach(span => span.removeEventListener('click', handleClick as EventListener))
    }

    const removeFocused = () => {
        const preElement = ref.current
        const focusedLine = preElement?.querySelector(`span[data-line-number="${selectedLine}"]`)

        focusedLine?.removeAttribute('focused')
    }

    const handleClick = (event: MouseEvent) => {
        const line = event.currentTarget as HTMLSpanElement
        const lineNumber = line.getAttribute('data-line-number') ?? ''

        removeFocused()

        if (lineNumber === selectedLine) {
            setSelectedLine('')
        } else {
            line.setAttribute('focused', '')
            setSelectedLine(lineNumber)
        }
    }

    useClickOutside(ref, removeFocused)
    useEffect(() => {
        highlight()
        addEventListeners()

        return () => removeEventListeners()
    }, [code, parsedCode, selectedLine])

    return (
        <pre ref={ref}>
            <code className={classes} dangerouslySetInnerHTML={{ __html: parsedCode }} />
        </pre>
    )
}
