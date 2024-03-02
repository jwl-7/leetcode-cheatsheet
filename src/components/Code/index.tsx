import styles from './code.module.sass'

import { useEffect, useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import clsx from '@utils/clsx'


hljs.registerLanguage('python', python)
hljs.registerLanguage('javascript', javascript)


interface CodeProps {
    code: string
    language: 'python' | 'javascript'
}


export default function Code({ code, language }: CodeProps) {
    const ref = useRef<HTMLPreElement>(null)
    const focused = useRef<string>('')
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
            setParsedCode(highlighted.join('\n'))
        }
    }

    const addEventListeners = () => {
        const spans = document.querySelectorAll(`.${styles.line}`)

        if (spans) {
            spans.forEach(span => span.addEventListener('click', handleClick as EventListener))
        }
    }

    const removeFocused = () => {
        if (focused.current) {
            const focusedLine = `.${styles.line}[data-line-number="${focused.current}"]`
            const focusedElement = document.querySelector(focusedLine)
            focusedElement?.removeAttribute('focused')
        }
    }

    const handleClick = (event: MouseEvent) => {
        const span = event.target as HTMLSpanElement
        const lineNumber = span.getAttribute('data-line-number')

        removeFocused()

        if (!focused.current || lineNumber !== focused.current) {
            span.setAttribute('focused', '')
            focused.current = lineNumber ?? ''
        }

    }

    useClickOutside(ref, removeFocused)
    useEffect(() => {
        highlight()
        addEventListeners()

        return () => {
            const spans = document.querySelectorAll(`.${styles.line}`)
            spans.forEach(span => span.removeEventListener('click', handleClick as EventListener))
        }
    }, [code, parsedCode, focused])

    return (
        <pre ref={ref}>
            <code className={classes} dangerouslySetInnerHTML={{ __html: parsedCode }} />
        </pre>
    )
}
