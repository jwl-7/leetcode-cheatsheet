import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react'

type Language = 'python' | 'javascript' | 'java' | 'cpp'

interface LanguageContextType {
    selectedLanguage: Language
    setSelectedLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Get the language from localStorage or default to 'python'
    const initialLanguage =
        (localStorage.getItem('selectedLanguage') as Language) || 'python'

    const [selectedLanguage, setSelectedLanguage] =
        useState<Language>(initialLanguage)

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage)
    }, [selectedLanguage])

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
