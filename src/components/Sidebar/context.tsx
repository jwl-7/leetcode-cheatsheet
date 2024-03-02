import { createContext, ReactNode, useContext, useState } from 'react'


interface SidebarContextType {
    isSidebarOpen: boolean
    showSidebar: Function
    hideSidebar: Function
    toggleSidebar: Function
}

interface SidebarProviderProps {
    children: ReactNode
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)


export function SidebarProvider ({ children }: SidebarProviderProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const showSidebar = () => setIsSidebarOpen(true)
    const hideSidebar = () => setIsSidebarOpen(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, showSidebar, hideSidebar, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)

    if (context === undefined) {
        throw new Error('useSidebar must be used within SidebarProvider')
    }

    return context as SidebarContextType
}
