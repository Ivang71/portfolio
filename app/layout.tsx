import '@/app/ui/global.css'
import { Metadata } from 'next'
import { roboto } from '@/app/ui/fonts'

export const metadata: Metadata = {
    title: {
        template: '%s | Artem Tolochkov',
        default: 'Artem Tolochkov',
    },
    description: 'My portfolio website.',
    // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
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
