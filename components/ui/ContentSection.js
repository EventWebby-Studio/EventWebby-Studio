export default function ContentSection() {
  return (
    <div id="about" className=" bg-[#F6F1E9] px-6 py-20 sm:py-25 lg:overflow-visible lg:px-0">

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

              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">

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
