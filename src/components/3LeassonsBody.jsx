import { useNavigate } from "react-router-dom";
import BodySvg from "../assets/BodySvg";

export default function LeassonsBody() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mx-5">
            <div className="[&amp;>*]:mx-auto [&amp;>*]:max-w-3xl [&amp;>:first-child]:!mt-0 [&amp;>:last-child]:!mb-0 mt-24 sm:mt-32 lg:mt-40">
              <h2 className="pb-10 text-2xl font-semibold tracking-tighter">
                1. Efficiency is Hard to Measure
              </h2>
              <p>
                Although almost every practical measure of our productivity
                decreased significantly after returning to the office, as a
                management team we felt this incredible uptick in energy. We
                realised that there is an intangible benefit to seeing
                everyone’s screen at all times, that isn’t easily measurable in
                numbers.
              </p>
              <p>
                Sure, we tried to recreate this feeling during our remote days
                with employee monitoring software but we always had this nagging
                doubt that our developers had hacked their way around it.
              </p>
            </div>
            <div className="my-10 pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-950">
                Top tip
              </p>
              <div className="mt-4">
                <p>
                  Getting one of those old-timey punch clocks is a great way to
                  monitor attendance while maintaining a fun atmosphere. Expect
                  to hear things like “Back at the coalface today!”.
                </p>
              </div>
            </div>
          </div>
          <img
            alt=""
            loading="lazy"
            width="2400"
            height="1600"
            decoding="async"
            data-nimg="1"
            className="rounded-[2.5rem] w-full object-cover"
            sizes="(min-width: 768px) 42rem, 100vw"
            src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpunch-clock.0f0ec94a.jpg&w=1080&q=75"
          />

          <div className="mx-5">
            <h2 className="pb-10 pt-32 text-2xl font-semibold tracking-tighter">
              2. Turnover: a Fresh Perspective
            </h2>
            <p>
              We parted ways with almost all of our senior development team
              within the first month of going back to the office, due to some
              irreconcilable differences. Stressed and worried, we decided to
              try turn this into a positive.
            </p>
            <p>
              Luckily for us, it was the same week that CoPilot launched and we
              were able to replace everyone with five bootcamp graduates all
              logged into one Github account.
            </p>
            <p>
              We have been consistently surprised at the fresh energy these new
              grads brought to our organisation and have since vowed to never
              hire anyone with more than 3 months experience again.
            </p>
          </div>
          <div className="group relative">
            <img
              alt=""
              loading="lazy"
              width="2400"
              height="1600"
              decoding="async"
              data-nimg="1"
              className="w-full mt-10 rounded-[2.5rem] object-cover"
              sizes="(min-width: 768px) 42rem, 100vw"
              src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgraduation.137b04f5.jpg&w=1080&q=75"
            />
            <div className="mx-5">
              <h2 className="pb-10 pt-32 text-2xl font-semibold tracking-tighter">
                3. Cost Efficiency
              </h2>
              <p>
                Demand is at an all time low for commercial real-estate, which
                means it’s never been more affordable to cram forty people into
                an open plan office.
              </p>
              <p>
                What’s more, is we’ve found that we can offer extremely low-cost
                perks like a snack cupboard or free beer in-lieu of higher
                salaries. For every foosball table we buy, we find we can offer
                around 5% less salary per job posting. Our full-time barista is
                the highest paid employee, after management.
              </p>
            </div>
            <div className="group relative p">
              <img
                alt=""
                loading="lazy"
                width="2400"
                height="1800"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-[2.5rem] object-cover"
                sizes="(min-width: 768px) 42rem, 100vw"
                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjars.8b4cb929.jpg&w=1080&q=75"
              />
            </div>
          </div>
        </div>

        {/* ----More Article---- */}
        <div className="h-[30rem] mt-40 relative overflow-hidden rounded-t-[3rem] bg-gradient-to-b from-neutral-50">
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
