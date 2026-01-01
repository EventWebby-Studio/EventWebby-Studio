"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "Onboard & Discover",
    description:
      "We start with a quick discussion to understand your event, your story, and what you need. We’ll confirm details, requirements, timeline, and proceed once everything is agreed.",
    step: 1,
  },
  {
    title: "Design & Build",
    description:
      "We design and build a custom event website just for you — including event info, story, location, and RSVP form. You’ll receive a preview and one round of revision to make sure it feels right.",
    step: 2,
  },
  {
    title: "Launch & Share",
    description:
      "Once approved, we host and deploy your website live. You can immediately share the link with your guests and start collecting RSVPs.",
    step: 3,
  },
  {
    title: "Event Day & Warranty Support",
    description:
      "On the event day, easily check in guests using the RSVP dashboard. If anything goes wrong, we’re on standby to fix it — covered all the way until your event ends.",
    step: 4,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-[#F6F1E9] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#CFA24D]">
            A simple, stress-free process
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#3A2B1F] sm:text-5xl lg:text-balance">
            From idea to event day — we’ve got you
          </p>
          <p className="mt-6 text-lg/8 text-[#4A433D]">
            No tech knowledge needed. Just tell us about your event — we’ll take
            care of everything from setup to event day support.
          </p>
        </div>

        {/* below is a list of features */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            {features.map((feature) => (
              <motion.li
                key={feature.title}
                variants={item}
                // transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-xl"
              >
                <div className="relative pl-16">
                  <dt className="text-center text-base/7 font-semibold text-[#B98A7C]">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#7A8B6F]">
                      {/* icon */}
                      {/* <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6 text-white"
                      >
                        <path
                          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg> */}
                      <div
                        key={feature.step}
                        className="flex w-10 h-10 items-center justify-center rounded-lg bg-[#7A8B6F] text-white font-bold text-lg"
                      >
                        {feature.step}
                      </div>
                    </div>
                    {/* heading */}
                    {feature.title}
                  </dt>
                  {/* paragraph text */}
                  <dd className="mt-2 text-base/7 text-[#4A433D]">
                    {feature.description}
                  </dd>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <div className="relative rounded-full mt-10 px-3 py-1 text-sm/6 text-[#B98A7C] ring-1 ring-black/10 hover:ring-white/20">
            No printing. No spreadsheets. No stress. Just a smooth, modern way
            to invite and manage your guests.
          </div>
        </div>
      </div>
    </div>
  );
}
