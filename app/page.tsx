import Image from 'next/image'
import styles from '@/app/ui/home.module.css';

export default async function Page() {
    return (
        <main className="container my-20 mx-auto px-4 md:max-w-2xl">
            <h1 className="mb-2 text-5xl font-bold bg-gradient-to-r from-blue-800 to-teal-400 inline-block text-transparent bg-clip-text">Hello, I'm Artem</h1>
            <div className=' mb-24'>I have been crafting beautiful websites for the last 5 years.</div>
            <div className="mb-14">
                <div className="text-xl font-bold mb-2">Objective</div>
                <div>Passionate Front-End Developer building engaging and user-centric web applications. Skilled in HTML, CSS, JavaScript, and React, delivering high-quality and scalable solutions through collaboration and continuous learning.</div>
            </div>

            <div className='mb-14'>
                <div className="flex items-center mb-4">
                    <Image src="/logos/softgamings_logo.webp" alt="Softgamings logo" width={200} height={200} className="w-14 h-14 mr-4 rounded-md" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Frontend Developer</span>
                        <div>Softgamings - April 2021 - Present</div>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>Leveraged Angular to create engaging and user-friendly interfaces for multiple online gaming platforms, including BetBRX, LuckyCrypto, and CatCasino. Increased user engagement and streamlined user experience, contributing to a 20% reduction in bounce rate.</p>
                    <p className='mb-4'>Optimized application performance for maximum speed and scalability.</p>
                    <p className='mb-4'>Collaborated effectively with designers, UI/UX specialists, and backend developers to deliver a seamless user experience.</p>
                    <p className='mb-4'>Provided ongoing maintenance and support for existing websites built with Angular and PHP.</p>
                </div>
            </div>

            <div className='mb-14'>
                <div className="flex items-center mb-4">
                    <Image src="/logos/digitalleague_logo.webp" alt="Digital League logo" width={200} height={200} className="w-14 h-14 mr-4 rounded-md" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Junior Frontend Developer</span>
                        <div>Digital League - Septembeer 2019 - March 2021</div>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>Applied React to build user-friendly web experiences, progressing from Junior to Mid-Level Developer.</p>
                    <p className='mb-4'>Contributed to high-profile projects, including building the frontend for Gazprom, and creating an internal flex office app used by 530 employees.</p>
                </div>
            </div>

            <div className='mb-14'>
                <div className="flex items-center mb-4">
                    <Image src="/logos/ship.webp" alt="Digital League logo" width={200} height={200} className="w-14 h-14 mr-4 rounded-md" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Web Developer</span>
                        <div>Freelance - June 2017 - Septembeer 2019</div>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>Successfully built and launched 14 dynamic websites for various clients as a solo developer, utilizing HTML and CSS to deliver engaging user experiences.</p>
                </div>
            </div>

            <div className="education mt-8">
                <span className="text-xl font-bold">Education</span>
                <div className="mt-2">Voronezh State University - Applied mathematics and computer science, Computer Software Engineering</div>
            </div>

            <section className="container py-16">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <div className="flex flex-col gap-4">
                    <p className="text-gray-600 mb-2">Please feel free to contact me for any enquiries.</p>
                    <a href="mailto:artemtolv@gmail.com" className={styles.cta}>Get In Touch</a>
                </div>
            </section>
        </main>

    )
}
