import '@styles/styles.sass'

import React from 'react'
import { SidebarProvider } from '@components/Sidebar/context'

import Background from '@components/Background'
import Appbar from '@/components/Appbar'
import Content from '@components/Content'


export default function App() {
    return (
        <React.StrictMode>
            <SidebarProvider>
                <div className="App">
                    <Background />
                    <Appbar />
                    <Content />
                </div>
            </SidebarProvider>
        </React.StrictMode>

    )
}
