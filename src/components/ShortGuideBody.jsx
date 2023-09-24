import { useState } from "react";
import BodySvg from "../assets/BodySvg";

export default function ShortGuideBody() {
  const navigate = useState()

  return (
    <>
      <div className="bg-white">
        <article className="mx-auto max-w-3xl mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-md:px-5">
              <h2 className="pb-8 text-3xl text-neutral-900 font-semibold tracking-tighter">
                <span className="font-sans">1.</span> Brevity is Key
              </h2>
              <p className="text-lg font-medium text-neutral-700 tracking-tight">
                Time is scarce, don’t waste it typing out long, descriptive
                component names. One approach is to give them short, cryptic
                names that only you will understand.
              </p>
              <p className="pt-5 text-lg font-medium text-neutral-700 tracking-tight">
                Need a button? Call it {"btn"}. A modal? How about {"md"}?
                You’ll save precious minutes per day and you’ll get the added
                benefit of being the only person in the codebase who knows where
                anything is. This is called job security.
              </p>
            </div>
            <div className="group isolate my-10 overflow-hidden rounded-4xl max-sm:-mx-6">
              <div className="group relative">
                <img
                  alt=""
                  loading="lazy"
                  width="2400"
                  height="1600"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-[20rem] md:h-[30rem] object-cover rounded-[5rem] md:rounded-[2.5rem]"
                  sizes="(min-width: 768px) 42rem, 100vw"
                  src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypewriter.bb047a62.jpg&w=1080&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            <div className="max-md:px-5">
              <h2 className="pb-8 pt-20 text-3xl text-neutral-900 font-semibold tracking-tighter">
                <span className="font-sans">2.</span> Rank High in Search
              </h2>
              <p className="text-lg pb-5 font-medium text-neutral-800 tracking-tight">
                When working in large repos with lots of collaborators, it’s
                important that your component ranks high when people search for
                anything.
              </p>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                One way to stand out is to include all the possible search terms
                in your component name. Instead of “SignInButton” you might want
                call it “SignInButtonAuthenticationCookieUserLogIn” which will
                ensure that it is returned in almost any related search result.
              </p>
            </div>

            <div className="isolate my-10 overflow-hidden max-sm:-mx-6">
              <img
                alt=""
                loading="lazy"
                width="2400"
                height="1600"
                decoding="async"
                data-nimg="1"
                className="w-full object-cover rounded-[5rem] md:rounded-[2.5rem]"
                sizes="(min-width: 768px) 42rem, 100vw"
                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserver.5e002a1b.jpg&w=1080&q=75"
                style={{ color: "transparent" }}
              />
            </div>

            <div className="max-md:px-5">
              <h2 className="pb-8 pt-20 text-3xl text-neutral-900 font-semibold tracking-tighter">
                <span className="font-sans">3.</span> Mix Languages
              </h2>
              <p className="pb-5 text-lg font-medium text-neutral-800 tracking-tight">
                If you work remotely, it’s likely you are on a global team and
                yet all your components have English names. This slows down your
                non-english colleagues considerably so you should allow them to
                use their native tongue when naming components.
              </p>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                You can create an index file that maps all the different
                languages within your repo. Need a dropdown? Look for
                “Desplegable”. A form? Search “Форма”. You’ll learn multiple new
                languages while being more inclusive to your colleagues.
              </p>
            </div>

            <div className="isolate my-10 overflow-hidden max-sm:-mx-6">
              <img
                alt=""
                loading="lazy"
                width="2400"
                height="1600"
                decoding="async"
                data-nimg="1"
                className="w-full h-[20rem] md:h-[30rem] object-cover rounded-[2.5rem]"
                sizes="(min-width: 768px) 42rem, 100vw"
                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feveryday-english.d8b8a071.jpg&w=1080&q=75"
                style={{
                  color: "transparent",
                }}
              />
            </div>
          </div>
        </article>

        {/* ----More Article---- */}
        <div className="h-[56rem] md:h-[30rem] mt-20 md:mt-40 relative overflow-hidden rounded-t-[3rem] bg-gradient-to-b from-neutral-50">
          <BodySvg />
          <div className="top-0 left-0 w-full absolute">
            <div className="max-w-7xl mx-auto px-5 pt-28 md:py-40">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-2xl">
                  <h2>
                    <span className="block font-display tracking-tighter [text-wrap:balance] text-2xl font-semibold text-neutral-950">
                      More articles
                    </span>
                  </h2>
                </div>
              </div>

              <div className="mx-auto max-w-2xl lg:max-w-none mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                  <div>
                    <article>
                      <div className="flex flex-col items-start pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <h3 className="mt-6 text-base font-semibold text-neutral-950">
                          The Future of Web Development: Our Predictions for
                          2023
                        </h3>
                        <time
                          dateTime="2023-02-18"
                          className="order-first text-sm text-neutral-600"
                        >
                          April 6, 2023
                        </time>
                        <p className="mt-2.5 text-base text-neutral-600">
                          Let’s explore the latest trends in web development,
                          and regurgitate some predictions we read on Twitter
                          for how they will shape the industry in the coming
                          year.
                        </p>
                        <button
                          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                          aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                          href="/blog/future-of-web-development"
                          onClick={}
                        >
                          Read more
                          <svg
                            viewBox="0 0 24 6"
                            aria-hidden="true"
                            className="w-6 flex-none fill-current"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 3 18 .5v2H0v1h18v2L24 3Z"
                            ></path>
                          </svg>
                          <span className="absolute inset-0"></span>
                        </button>
                      </div>
                    </article>
                  </div>

                  <div>
                    <article>
                      <div className="flex flex-col items-start pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <h3 className="mt-6 text-base font-semibold text-neutral-950">
                          3 Lessons We Learned Going Back to the Office
                        </h3>
                        <time
                          dateTime="2023-02-18"
                          className="order-first text-sm text-neutral-600"
                        >
                          February 18, 2023
                        </time>
                        <p className="mt-2.5 text-base text-neutral-600">
                          Earlier this year we made the bold decision to make
                          everyone come back to the office full-time after two
                          years working from a dressing table in the corner of
                          their bedroom.
                        </p>
                        <a
                          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                          aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                          href="/blog/3-lessons-we-learned-going-back-to-the-office"
                        >
                          Read more
                          <svg
                            viewBox="0 0 24 6"
                            aria-hidden="true"
                            className="w-6 flex-none fill-current"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 3 18 .5v2H0v1h18v2L24 3Z"
                            ></path>
                          </svg>
                          <span className="absolute inset-0"></span>
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
