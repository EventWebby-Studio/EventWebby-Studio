"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    // <div id="about" className=" bg-[#F6F1E9] sm:py-25 lg:overflow-visible lg:px-0">

    //     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

    //         {/* Headings and subheadings */}
    //         <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    //             <div className="lg:pr-4">
    //                 <div className="lg:max-w-lg">
    //                     <p className="text-base/7 font-semibold text-[#B98A7C]">
    //                         Event operations, reimagined
    //                     </p>
    //                     <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#3A2B1F] sm:text-5xl">
    //                         Modern tools for modern events
    //                     </h1>
    //                     <p className="mt-6 text-xl/8 text-[#4A433D]">
    //                         Stop juggling spreadsheets, chats, and tools. EventFlow
    //                         centralizes everything your team needs to plan, manage, and
    //                         execute events — seamlessly.
    //                     </p>
    //                     <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#3A2B1F]">
    //                         Why teams switch to EventFlow?
    //                     </h2>
    //                     <p className="mt-6 text-[#4A433D]">
    //                         Spreadsheets, chat threads, and last-minute changes slow events
    //                         down. EventFlow removes friction by unifying event data,
    //                         workflows, and communication — so you can focus on delivering
    //                         great events.
    //                     </p>
    //                 </div>
    //             </div>

    //         </div>

    //         {/* Image*/}
    //         <div className="-mt-12 -ml-12 -mr-12 sm:ml-0 sm:mr-0 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    //             <img
    //                 src="/seats.jpg"
    //                 alt=""
    //                 className="w-full h-full object-contain md:object-cover"
    //             />
    //         </div>

    //     </div>
    // </div>

    <div id="about" className="bg-[#E6C27A]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: Full-height image */}
        <div className="relative h-[60vh] lg:h-auto">
          <img
            src="/seats.jpg"
            alt="Event seating"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT: Content centered */}
        <div className="flex items-center px-6 py-16 lg:px-16">
          <div className="max-w-lg">
            <p className="text-base font-semibold text-[#B98A7C]">
              Event operations, reimagined
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl font-bold"
            >
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#3A2B1F] sm:text-5xl">
                Modern website for modern events
              </h1>
            </motion.div>
            <p className="mt-6 text-xl text-[#4A433D]">
              Stop juggling spreadsheets, chats, and tools. EventFlow
              centralizes everything your team needs to plan, manage, and
              execute events — seamlessly.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-[#3A2B1F]">
              Why teams switch to EventFlow?
            </h2>

            <p className="mt-6 text-[#4A433D]">
              Spreadsheets, chat threads, and last-minute changes slow events
              down. EventFlow removes friction by unifying event data,
              workflows, and communication — so you can focus on delivering
              great events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
