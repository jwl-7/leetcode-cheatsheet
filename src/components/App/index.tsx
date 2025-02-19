import '@styles/styles.sass'

import React from 'react'
import { LanguageProvider } from '@components/Language/context'
import { SidebarProvider } from '@components/Sidebar/context'

import Background from '@components/Background'
import Appbar from '@/components/Appbar'
import Content from '@components/Content'

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
