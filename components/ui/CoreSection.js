export default function CoreSection() {
  return (
    <div className="overflow-hidden bg-[#F6F1E9] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#CFA24D]">
                Make RSVP easy and quick
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#3A2B1F] sm:text-5xl">
                Introudcing RSVP Management System
              </p>
              <p className="mt-6 text-lg/8 text-[#4A433D]">
                Our RSVP Management System helps you collect responses, track
                attendance, and manage guests in one simple, organised dashboard
                — so you can focus on the event, not the admin.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[#4A433D] lg:max-w-none">
                {/* core 1 */}
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-[#CFA24D]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5 text-[#7a8b64]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Make Reservation Effortlessly.{" "}
                  </dt>

                  <dd className="inline">
                    Guests can RSVP in seconds through a simple, mobile-friendly
                    flow — no accounts, no friction, just quick and easy
                    responses.
                  </dd>
                </div>

                {/* core 2 */}
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-[#CFA24D]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5 text-[#7a8b64]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Centralized Guest Management.{" "}
                  </dt>
                  <dd className="inline">
                    Manage your entire guest list from one dashboard with
                    real-time RSVP statuses, details, and updates — always
                    organised, always up to date.
                  </dd>
                </div>

                {/* Core 3 */}
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-[#CFA24D]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5 text-[#7a8b64]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Check-In Made Simple{" "}
                  </dt>
                  <dd className="inline">
                    Check in guests quickly and digitally on event day, with
                    instant attendance tracking and no manual lists or delays.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex h-full items-center">
            <img
            width="2432"
            height="1442"
            src="/Guest-RSVP-system.png"
            alt="Product screenshot"
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
}
