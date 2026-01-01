"use client"
import { motion } from "framer-motion"

export default function BentoGridSection() {
  return (
    <div className="bg-[#F6F1E9] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-[#CFA24D]">
          Deploy faster
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-[#3A2B1F] sm:text-5xl">
          Everything your event needs — in one website
        </p>


        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

          {/* bento 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#7A8B6F]/20 lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-[#3A2B1F] max-lg:text-center">
                  Custom Website for Your Event
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#4A433D] max-lg:text-center">
                  Your event is unique — your website should be too. We design a website that tells your story, shares event details, and reflects the look and feel of your event.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    src="/wedding-app.png"
                    alt=""
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl"></div>
          </motion.div>

          {/* bento 2 */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[#7A8B6F]/20 max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-[#3A2B1F] max-lg:text-center">
                  Fast Turnaround
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#4A433D] max-lg:text-center">
                  Need it quickly? No problem. Your event website will be ready in 2–3 weeks, so you can focus on planning, not waiting.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10">
                <img
                  src="/fast-planning.avif"
                  alt=""
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"></div>
          </motion.div>

          {/* bento 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[#7A8B6F]/20"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-[#3A2B1F] max-lg:text-center">
                  Support Until Your Event Ends
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#4A433D] max-lg:text-center">
                  We don’t disappear after launch. If any issue comes up, we’ll fix it — covered all the way until your event is over.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10">
                <img
                  src="/customer-support.jpg"
                  alt=""
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15"></div>
          </motion.div>

          {/* bento 4 */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#7A8B6F]/20 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-[#3A2B1F] max-lg:text-center">
                  Built-in RSVP Management
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-[#4A433D] max-lg:text-center">
                  No spreadsheets. No paper lists. Guests RSVP online, and you’ll see all registrations in one simple dashboard — searchable and easy to manage.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img
                    src="/RSVP-guest.jpg"
                    alt=""
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          </motion.div>


        </div>
      </div>
    </div>
  );
}
