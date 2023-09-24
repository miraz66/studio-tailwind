import { useNavigate } from "react-router-dom";
import BodySvg from "../assets/BodySvg";

export default function WorkingProcessWebDevelopment() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white">
        <article className="mx-auto max-w-3xl mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-md:mx-5">
              <h2 className="pb-8 text-3xl text-neutral-900 font-semibold tracking-tighter">
                <span className="font-sans">1.</span> AI Assisted Development
              </h2>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                With the launch of Github Copilot in 2022 the industry got its
                first glimpse at what it would look like to have Stack Overflow
                plumbed straight into your IDE. Copilot has given thousands of
                developers what they always longed for: plausible deniability
                over the bugs they write.
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
                  className="w-full object-cover rounded-[2.5rem]"
                  sizes="(min-width: 768px) 42rem, 100vw"
                  src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpilot.139e6ddc.jpg&w=1080&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            <div className="max-md:mx-5">
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                In 2023 we can expect these assistants to become more
                sophisticated and for that to have ripple effects throughout the
                industry.
              </p>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                We predict that traffic to MDN will decline precipitously as
                developers realise they no longer need to look up JS array
                methods. We also expect Stack Overflow’s sister site, Prompt
                Overflow, to become one of the most popular sites on the
                internet in a matter of months.
              </p>

              <h2 className="pb-8 pt-20 text-3xl text-neutral-900 font-semibold tracking-tighter">
                <span className="font-sans">2.</span> Rendering Patterns
              </h2>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                To server render or not to server render? In 2022 the owners of
                the internet, Vercel, decided that instead of making this choice
                once for your whole application, now you will need to decide
                every time you write a new component.
              </p>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                Because front-end development was becoming too easy, the same
                people who write CSS will now need to know how Streaming SSR and
                Progressive Hydration work.
              </p>
            </div>
            <div className="isolate my-10 overflow-hidden rounded-4xl max-sm:-mx-6">
              <img
                alt=""
                loading="lazy"
                width="2400"
                height="1600"
                decoding="async"
                data-nimg="1"
                className="w-full object-cover rounded-[2.5rem]"
                sizes="(min-width: 768px) 42rem, 100vw"
                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserver.5e002a1b.jpg&w=1080&q=75"
                style={{ color: "transparent" }}
              />
            </div>

            <div className="max-md:mx-5">
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                In 2023 we can expect frameworks to adopt increasingly granular
                rendering patterns culminating in per-line rendering (PLR) later
                this year. We can also expect job postings for Rendering
                Reliability Engineers to reach an all time high.
              </p>

              <h2 className="pb-8 pt-20 text-3xl text-neutral-900 font-semibold tracking-tighter">
                <span className="font-sans">3.</span> JS Runtimes
              </h2>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                Because choosing a JS runtime was one of the only areas where a
                developer wasn’t paralysed with choice, in early 2020, the
                creator of Node gave us something new to agonise over. The
                launch of Deno and Bun heralded the final mutation of JavaScript
                into a language that can truly run anywhere it wasn’t intended
                to.
              </p>
              <p className="text-lg font-medium text-neutral-800 tracking-tight">
                These new JS runtimes mean we can now serve HTML faster than
                ever before. For example, we’ve reduced the Time to First Byte
                (TTFB) of this blog to -0.4s. That means it actually loaded
                before you clicked the link.
              </p>
            </div>

            <div className="isolate my-10 overflow-hidden rounded-4xl max-sm:-mx-6">
              <img
                alt=""
                loading="lazy"
                width="2400"
                height="1600"
                decoding="async"
                data-nimg="1"
                className="w-full object-cover rounded-[2.5rem]"
                sizes="(min-width: 768px) 42rem, 100vw"
                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.50d2f342.jpg&w=1080&q=75"
                style={{
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <p className="max-md:mx-5 text-lg font-medium text-neutral-800 tracking-tight">
            In 2023 we can expect even faster and more specialised JS runtimes
            to launch, including the promising Boil, a runtime specifically
            designed to reduce cold boot times on WiFi enabled kettles. All of
            these advancements promise to make the future of botnets a truly
            exciting one.
          </p>
        </article>

        {/* ----More Article---- */}
        <div className="md:h-[30rem] mt-20 md:mt-40 relative overflow-hidden rounded-t-[3rem] bg-gradient-to-b from-neutral-50">
          <BodySvg />
          <div className="top-0 left-0 w-full absolute">
            <div className="max-w-7xl mx-auto px-5 py-40">
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
                          A Short Guide to Component Naming
                        </h3>
                        <time
                          dateTime="2022-12-01"
                          className="order-first text-sm text-neutral-600"
                        >
                          December 1, 2022
                        </time>
                        <p className="mt-2.5 text-base text-neutral-600">
                          As a developer, the most important aspect of your job
                          is naming components. It’s not just about being
                          descriptive and clear, but also about having fun and
                          being creative.
                        </p>
                        <button
                          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                          aria-label="Read more: A Short Guide to Component Naming"
                          onClick={() =>
                            navigate("/blog/a-short-guide-to-component-naming")
                          }
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
                        <button
                          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                          aria-label="Read more: 3 Lessons We Learned Going Back to the Office"
                          onClick={() =>
                            navigate(
                              "/blog/3-lessons-we-learned-going-back-to-the-office"
                            )
                          }
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
