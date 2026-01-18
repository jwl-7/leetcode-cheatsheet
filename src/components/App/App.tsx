import '@styles/styles.sass'

import React from 'react'
import { LanguageProvider } from '@components/Language/LanguageProvider'
import { SidebarProvider } from '@components/Sidebar/SidebarProvider'

import Background from '@components/Background/Background'
import Appbar from '@/components/AppBar/AppBar'
import Content from '@components/Content/Content'

export default function App() {
    return (
        <React.StrictMode>
            <SidebarProvider>
                <LanguageProvider>
                    <div className="App">
                        <Background />
                        <Appbar />
                        <Content />
                    </div>
                </LanguageProvider>
            </SidebarProvider>
        </React.StrictMode>
    )
}
