"use client"
import { motion } from "framer-motion"


const features = [
    {
        title: "Custom Event Website",
        description:
            "A beautiful, personalized website tailored for your event’s theme and style.",
        icon: "/creativity.svg"
    },
    {
        title: "Built-in RSVP System",
        description:
            "Manage guest lists and RSVPs directly on your website — easy and organized.",
            icon: "/rsvp.svg"
    },
    {
        title: "Fast Turnaround",
        description:
            "Your website will be ready in 2–3 weeks, so you can focus on planning.",
            icon: "/fast.svg"
    },
    {
        title: "Ongoing Support",
        description:
            "We’re here from setup to the end of your event to help you with any issues.",
            icon: "/support.svg"
            
    },
    {
        title: "Mobile-Friendly Design",
        description:
            "Your website looks amazing on phones, tablets, and desktops.",
            icon: "/mobile.svg"
    },
    {
        title: "Secure & Reliable",
        description:
            "Enjoy fast loading times and secure hosting for worry-free event management.",
            icon: "/guard.svg"
    },
];

export default function GridSection() {
    return (
        <div id="features" className="bg-[#F6F1E9] py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-[#CFA24D]">
                    Deploy faster
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-[#3A2B1F] sm:text-5xl">
                    Everything your event needs — in one website
                </p>

                {/* 3 by 2  */}
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

                    {features.map((feature) => (
                        < motion.div whileHover={{ scale: 1.05 }} className="relative">
                            <div className="relative rounded-lg bg-[#7A8B6F]/20 p-6 h-45">
                                <div className="flex flex-col">
                                    {/* Icon */}
                                    <div className="mb-3">
                                        <img src={feature.icon} alt="" className="h-15 w-15" />
                                    </div>

                                    {/* Text */}
                                    <div className="text-left">
                                        <h2 className="text-base font-semibold text-[#3A2B1F]">
                                            {feature.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-[#4A433D]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    ))}

                </div>
            </div>
        </div >
    );
}
