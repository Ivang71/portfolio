import Image from 'next/image'
import styles from '@/app/ui/home.module.css'

export default async function Page() {
    return (
        <main className="container my-20 mx-auto px-4 md:max-w-2xl">
            <h1 className={`${styles.headline} mb-8 text-5xl font-bold inline-block text-transparent`}>Hello, I&apos;m Artem</h1>
            <div className="mb-14">
                <div>I'm a passionate Front-End Developer driven by creating engaging and user-centric web applications. I leverage my skills in HTML, CSS, JavaScript, React and Next to deliver high-quality and scalable solutions. Collaboration and continuous learning are at the heart of my approach, ensuring I stay at the forefront of the ever-evolving web development landscape.</div>
            </div>

            <div className="mb-16 flex flex-col space-y-4">
                <span className="text-xl font-bold">Some projects I worked on</span>
                <div className="group relative cursor-pointer">
                    <a href="https://www.catcasino.com" target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src="/portfolio/projects/catcasino.avif"
                            alt="Cat Casino screenshot"
                            width={1023}
                            height={540}
                        />
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-center font-semibold">Cat Casino</p>
                        </div>
                    </a>
                </div>
                <div className="group relative cursor-pointer">
                    <a href="https://buymedia.biz" target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src="/portfolio/projects/buymedia.avif"
                            alt="Buymedia screenshot"
                            width={1023}
                            height={540}
                        />
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-center font-semibold">Buymedia</p>
                        </div>
                    </a>
                </div>
                <div className="group relative cursor-pointer">
                    <a href="https://ivang71.github.io/alan-ai-challenge" target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src="/portfolio/projects/binary-tree.avif"
                            alt="Binary Search Tree screenshot"
                            width={1023}
                            height={540}
                        />
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-center font-semibold">Binary Search Tree</p>
                        </div>
                    </a>
                </div>
                <div className="group relative cursor-pointer">
                    <a href="https://ivang71.github.io/web-tanks" target='blank' rel='noreferrer'>
                        <Image
                            className={`${styles.boxShadow} w-full h-40 object-cover rounded-md`}
                            src="/portfolio/projects/canvas.avif"
                            alt="Canvas Playground screenshot"
                            width={1023}
                            height={540}
                        />
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-center font-semibold">Canvas Playground</p>
                        </div>
                    </a>
                </div>
            </div>

            <span className="text-xl font-bold">Work history</span>

            <div className={`${styles.boxShadow} mt-4 mb-8 rounded-md p-4`}>
                <div className="flex items-center mb-4">
                    <Image src="/portfolio/logos/softgamings_logo.webp" alt="Softgamings logo" width={200} height={200} className="w-14 h-14 mr-4 rounded-md" />
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

            <div className={`${styles.boxShadow} mb-8 rounded-md p-4`}>
                <div className="flex items-center mb-4">
                    <Image src="/portfolio/logos/digitalleague_logo.webp" alt="Digital League logo" width={200} height={200} className="w-14 h-14 mr-4 rounded-md" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Junior Frontend Developer</span>
                        <div>Digital League - September 2019 - March 2021</div>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>Applied React to build user-friendly web experiences, progressing from Junior to Mid-Level Developer.</p>
                    <p className='mb-4'>Contributed to high-profile projects, including building the frontend for Gazprom, and creating an internal flex office app used by 530 employees.</p>
                </div>
            </div>

            <div className={`${styles.boxShadow} mb-14 rounded-md p-4`}>
                <div className="flex items-center mb-4">
                    <Image src="/portfolio/logos/ship.webp" alt="Digital League logo" width={200} height={200} className="w-14 h-14 mr-4 rounded-md" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Web Developer</span>
                        <div>Freelance - June 2017 - September 2019</div>
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

            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="opacity-80 leading-relaxed text-lg">Artem consistently impressed me with his strong technical skills, dedication to quality, and collaborative spirit. He is a highly motivated and dependable individual who consistently delivered high-quality solutions. His eagerness to learn and collaborative approach were invaluable assets to our team.</p>
                        <span className="inline-block h-1 w-10 rounded bg-teal-400 mt-8 mb-6"></span>
                        <h2 className="font-medium title-font tracking-wider text-sm">IVAN KOSTRIKOV</h2>
                        <p className="opacity-60">Team Lead at Digital Economy League</p>
                    </div>
                </div>
            </section>

            <section className="container py-16">
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <div className="flex flex-col gap-4">
                    <p className="mb-4">Please feel free to contact me for any inquiries.</p>
                    <a href="mailto:artemtolv@gmail.com" className={styles.cta}>Get In Touch</a>
                </div>
            </section>
        </main>

    )
}
