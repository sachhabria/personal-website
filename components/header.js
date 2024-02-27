import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-b border-black sticky top-0 bg-white p-5 z-50">
            <Link href="/" className="text-xl">
                    SNC
            </Link>
            <div>
                <Link href="https://github.com/sachhabria" target="_blank" className="hover:bg-black hover:text-white p-2 mr-4 font-bold">
                    Github
                </Link>
                <Link href="https://www.linkedin.com/in/sachinchhabria" target="_blank" className="hover:bg-black hover:text-white p-2 mr-4 font-bold">
                    LinkedIn
                </Link>
                <Link href="/resume.pdf" target="_blank" className="hover:bg-black hover:text-white p-2 mr-3 font-bold">
                    Resume
                </Link>
            </div>
        </header>
    );
}