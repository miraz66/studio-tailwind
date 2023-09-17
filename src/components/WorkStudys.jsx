export default function WorkStudys() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-5 xl:px-10">
          <h2 className="pb-10 font-display text-2xl font-semibold text-neutral-950">
            Case studies
          </h2>
          <div className="flex flex-col gap-36">
            <article>
              <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <svg
                      className="w-16 h-16"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="15" cy="18" r="15" fill="#0A0A0A" />
                      <path
                        d="M8.5 10H19.5L21.5 12L19.5 14H8.5V10Z"
                        fill="white"
                      />
                      <path
                        d="M8.5 16H15.5L17.5 18L15.5 20H8.5V16Z"
                        fill="white"
                      />
                      <rect x="8.5" y="22" width="4" height="4" fill="white" />
                    </svg>
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      FamilyFund
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      Web development, CMS
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime="2023-01">January 2023</time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <a href="/work/family-fund">
                      Skip the bank, borrow from those you trust
                    </a>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      FamilyFund is a crowdfunding platform for friends and
                      family. Allowing users to take personal loans from their
                      network without a traditional financial institution.
                    </p>
                    <p>
                      We developed a custom CMS to power their blog with and
                      optimised their site to rank higher for the keywords “Gary
                      Vee” and “Tony Robbins”.
                    </p>
                  </div>
                  <div className="mt-8 flex">
                    <a
                      className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                      aria-label="Read case study: FamilyFund"
                      href="/work/family-fund"
                    >
                      <span className="relative top-px">Read case study</span>
                    </a>
                  </div>

                  <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <figure className="text-sm">
                      <blockquote className="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                        <p>
                          Working with Studio, we felt more like a partner than
                          a customer. They really resonated with our mission to
                          change the way people convince their parents to cash
                          out their pensions.
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 font-semibold text-neutral-950">
                        Debra Fiscal, CEO of FamilyFund
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <svg
                      className="w-16 h-16"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 20C1 26.6274 6.37258 32 13 32H29V4H1V20Z"
                        fill="#0A0A0A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 10.5V21.5L22.5 21.5V25.5H11.5C9.29086 25.5 7.5 23.7091 7.5 21.5V10.5H11.5ZM22.5 10.5H18.5V15.5C18.5 16.6046 19.3954 17.5 20.5 17.5C21.6046 17.5 22.5 16.6046 22.5 15.5V10.5Z"
                        fill="white"
                      />
                    </svg>

                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      Unseal
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      Blockchain development
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime="2022-10">October 2022</time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <a href="/work/unseal">Get a hodl of your health</a>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      Unseal is the first NFT platform where users can mint and
                      trade NFTs of their own personal health records, allowing
                      them to take control of their data.
                    </p>
                    <p>
                      We built out the blockchain infrastructure that supports
                      Unseal. Unfortunately, we took a massive loss on this
                      project when Unseal’s cryptocurrency, PlaceboCoin, went to
                      zero.
                    </p>
                  </div>
                  <div className="mt-8 flex">
                    <a
                      className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                      aria-label="Read case study: Unseal"
                      href="/work/unseal"
                    >
                      <span className="relative top-px">Read case study</span>
                    </a>
                  </div>
                  <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <figure className="text-sm">
                      <blockquote className="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                        <p>
                          Studio did an amazing job building out our core
                          blockchain infrastructure and I’m sure once
                          PlaceboCoin rallies they’ll be able to finish the
                          project.
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 font-semibold text-neutral-950">
                        Emily Selman, Head of Engineering at Unseal
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <svg
                      className="w-16 h-16"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.88146 6.03314C6.38837 3.0447 11.9315 3.58464 15 7C18.0685 3.58464 23.6116 3.0447 27.1185 6.03314C30.6254 9.02158 30.9808 14.2129 27.9123 17.6282L16.4877 30.344C15.6931 31.2285 14.3069 31.2285 13.5123 30.344L2.08773 17.6282C-0.98081 14.2129 -0.625447 9.02158 2.88146 6.03314Z"
                        fill="#0A0A0A"
                      />
                      <path
                        d="M11 17V17.5"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 17V17.5"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 23C12 23 12.75 22 15 22C17.25 22 18 23 18 23"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      Phobia
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      App development
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime="2022-06">June 2022</time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <a href="/work/phobia">
                      Overcome your fears, find your match
                    </a>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      Find love in the face of fear — Phobia is a dating app
                      that matches users based on their mutual phobias so they
                      can be scared together.
                    </p>
                    <p>
                      We worked with Phobia to develop a new onboarding flow. A
                      user is shown pictures of common phobias and we use the
                      microphone to detect which ones make them scream, feeding
                      the results into the matching algorithm.
                    </p>
                  </div>
                  <div className="mt-8 flex">
                    <a
                      className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                      aria-label="Read case study: Phobia"
                      href="/work/phobia"
                    >
                      <span className="relative top-px">Read case study</span>
                    </a>
                  </div>
                  <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <figure className="text-sm">
                      <blockquote className="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                        <p>
                          The team at Studio went above and beyond with our
                          onboarding, even finding a way to access the user’s
                          microphone without triggering one of those annoying
                          permission dialogs.
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 font-semibold text-neutral-950">
                        Jenny Wilson, CPO of Phobia
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
