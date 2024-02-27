import { useEffect, useState } from 'react';

const MenuItem = ({ href, children, onActive, isActive }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onActive(href);
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <a
            href={href}
            className={`flex items-center gap-2 ${isActive ? 'text-black' : 'text-gray-500'}`}
            onClick={handleClick}
        >
            <span
                className={`block h-1 ${isActive ? 'bg-black w-10' : 'bg-gray-300 w-5'} hover:bg-black`}
            ></span>
            {children}
        </a>
    );
};

export default function Menu() {
    const [activeSection, setActiveSection] = useState('#about');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0.5 }
        );

        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex flex-col hidden lg:block">
            <MenuItem href="#about" onActive={setActiveSection} isActive={activeSection === '#about'}>
                About
            </MenuItem>
            <MenuItem href="#education" onActive={setActiveSection} isActive={activeSection === '#education'}>
                Education
            </MenuItem>
            <MenuItem href="#experience" onActive={setActiveSection} isActive={activeSection === '#experience'}>
                Experience
            </MenuItem>
            <MenuItem href="#projects" onActive={setActiveSection} isActive={activeSection === '#projects'}>
                Projects
            </MenuItem>
        </div>
    );
}
