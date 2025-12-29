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
    title: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    title: "Push to SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet",
  },
  {
    title: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
  {
    title: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Deploy faster
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>

        {/* below is a list of features */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.ul
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
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-xl"
              >
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                      {/* icon */}
                      <svg
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
                      </svg>
                    </div>
                    {/* heading */}
                    {feature.title}
                  </dt>
                  {/* paragraph text */}
                  <dd className="mt-2 text-base/7 text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
