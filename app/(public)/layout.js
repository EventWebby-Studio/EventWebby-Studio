"use client";
import Link from "next/link";

export default function PublicLayout({ children }) {
  // handles the closing of menu
  const handleNavLinkClick = () => {
    const dialog = document.getElementById("mobile-menu");
    if (!dialog) return;
    const closeBtn = dialog.querySelector('[command="close"]');
    closeBtn?.click();
  };

  return (
    <>
      {/* navigation bar */}
      {/* <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/" className="font-bold text-xl text-black">
            InviteFlow
          </Link>
          <div className="space-x-4 text-black">
            <Link href="/blog">Gallery</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav> */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-end lg:justify-center w-[90%] max-w-5xl px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-xs shadow-lg">
          {/* <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                src="/EventFlow-logo-noBG.png"
                alt="Logo"
                className="h-20 w-auto"
              />
            </a>
          </div> */}

          {/* this is the hamrburger menu icon */}
          <div className="flex lg:hidden">
            <button
              type="button"
              command="show-modal"
              commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3A2B1F"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* this is large screen menu */}
          <div className="hidden lg:flex lg:gap-x-12 ">
            <a href="#" className="text-md/6 font-semibold text-[#3A2B1F] hover:text-[#CFA24D] transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-md/6 font-semibold text-[#3A2B1F] hover:text-[#CFA24D] transition-colors duration-300">
              About
            </a>
            <a href="#features" className="text-md/6 font-semibold text-[#3A2B1F] hover:text-[#CFA24D] transition-colors duration-300">
              Features
            </a>
            <a href="#process" className="text-md/6 font-semibold text-[#3A2B1F] hover:text-[#CFA24D] transition-colors duration-300">
              Process
            </a>
            <a href="#contact" className="text-md/6 font-semibold text-[#3A2B1F] hover:text-[#CFA24D] transition-colors duration-300">
              Contact
            </a>
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div> */}
        </nav>

        {/* Mobile app hamburger menu */}
        <el-dialog>
          <dialog
            id="mobile-menu"
            className="backdrop:bg-transparent lg:hidden"
          >
            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#4a433d] bg-cover p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                <div className="flex items-center justify-between">
                  {/* <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      src="/EventFlow-logo-noBG.png"
                      alt=""
                      className="h-20 w-auto"
                    />
                  </a> */}
                  <button
                    type="button"
                    command="close"
                    commandfor="mobile-menu"
                    className="-m-2.5 rounded-md p-2.5 text-gray-200"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        onClick={handleNavLinkClick}
                      >
                        Home
                      </a>
                      <a
                        href="#about"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        onClick={handleNavLinkClick}
                      >
                        About
                      </a>
                      <a
                        href="#features"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        onClick={handleNavLinkClick}
                      >
                        Features
                      </a>
                      <a
                        href="#process"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        onClick={handleNavLinkClick}
                      >
                        Process
                      </a>
                      <a
                        href="#contact"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        onClick={handleNavLinkClick}
                      >
                        Contact
                      </a>
                    </div>
                    <div className="py-6">
                      <Link
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </header>

      <main>{children}</main>

      <footer className="border-t py-6 text-center text-sm text-gray-500 bg-gray-900">
        © {new Date().getFullYear()} InviteFlow. All rights reserved.
      </footer>
    </>
  );
}
