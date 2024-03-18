import '@/app/ui/global.css'
import { Metadata } from 'next'
import { roboto } from '@/app/ui/fonts'

export const metadata: Metadata = {
    title: {
        template: '%s | Artem Tolochkov',
        default: 'Artem Tolochkov',
    },
    description: 'Artem Tolochkov the frontend dev.',
    metadataBase: new URL('https://ivang71.github.io'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>{children}</body>
        </html>
    )
}
