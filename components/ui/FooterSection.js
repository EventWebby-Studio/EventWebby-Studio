export default function Footer() {
    return (
        <footer className="border-t border-black/10 bg-[#E6C27A]">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Left */}
                    <div className="text-sm text-black/70">
                        © {new Date().getFullYear()} EventWebby. All rights reserved.
                    </div>

                    {/* Right */}
                    <div className="flex gap-6 text-sm">
                        <a
                            href="#"
                            className="text-black/70 hover:text-black transition"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-black/70 hover:text-black transition"
                        >
                            About
                        </a>
                        <a
                            href="#features"
                            className="text-black/70 hover:text-black transition"
                        >
                            Features
                        </a>
                        <a
                            href="#process"
                            className="text-black/70 hover:text-black transition"
                        >
                            Process
                        </a>
                        <a
                            href="#contact"
                            className="text-black/70 hover:text-black transition"
                        >
                            Contact
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
