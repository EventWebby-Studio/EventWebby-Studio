export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F6F1E9] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            strokeWidth="0"
          />
        </svg>
      </div> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-[#B98A7C]">
                Event operations, reimagined
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#3A2B1F] sm:text-5xl">
                Modern tools for modern events
              </h1>
              <p className="mt-6 text-xl/8 text-[#4A433D]">
                Stop juggling spreadsheets, chats, and tools. EventFlow
                centralizes everything your team needs to plan, manage, and
                execute events — seamlessly.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="-mt-12 -ml-12 -mr-12 sm:ml-0 sm:mr-0 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src="/seats.jpg"
            alt=""
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
              {/* <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p> */}
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  {/* <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-400"
                  >
                    <path
                      d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg> */}
                  <span className="text-[#4A433D]">
                    <strong className="font-semibold text-[#cfa24d]">
                      Digital Invitations, Done Right.
                    </strong>{" "}
                    Skip printing and guessing numbers. Share one simple link
                    with your guests — they get all the event details and RSVP
                    instantly.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-400"
                  >
                    <path
                      d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg> */}
                  <span className="text-[#4A433D]">
                    <strong className="font-semibold text-[#cfa24d]">
                      Built-in RSVP & Guest List.
                    </strong>{" "}
                    All RSVPs are collected automatically in one place. Search
                    guests by name and check them in on event day with a single
                    click.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-400"
                  >
                    <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                    <path
                      d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg> */}
                  <span className="text-[#4A433D]">
                    <strong className="font-semibold text-[#cfa24d]">
                      Custom Website for Your Event.
                    </strong>{" "}
                    Your event, your story, your style. We design a website that
                    matches your theme — whether it’s a wedding, launch, or
                    company event.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-gray-800">
                Traditional event management relies on disconnected tools,
                manual updates, and constant follow-ups. EventFlow replaces that
                with a single source of truth — reducing errors, saving time,
                and keeping everyone on the same page.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#3A2B1F]">
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
    </div>
  );
}
