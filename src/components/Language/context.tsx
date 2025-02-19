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

interface LanguageProviderProps {
    children: ReactNode
}


export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const initialLanguage: Language =
        (localStorage.getItem('selectedLanguage') as Language) || 'python'

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(initialLanguage)

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

export function useLanguage() {
    const context = useContext(LanguageContext)

    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }

    return context as LanguageContextType
}
