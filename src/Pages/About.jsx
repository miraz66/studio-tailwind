import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import CultureSection from "../components/CultureSection";
import Employee from "../components/Employee";
import BodySvg from "../assets/BodySvg";
import TailUsProject from "../components/TailUsProject";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[50rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-screen relative">
          <div className="absolute top-60 w-full">
            <div className="max-w-7xl mx-auto px-5">
              <div className="">
                <h1>
                  <span className="block font-display text-base font-semibold text-neutral-950">
                    About us
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block max-w-7xl text-4xl sm:text-5xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    Our strength is collaboration
                  </span>
                </h1>
                <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                  <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
                    We believe that our strength lies in our collaborative
                    approach, which puts our clients at the center of everything
                    we do.
                  </p>
                  <p className="text-lg pb-5 text-neutral-600 tracking-tighter leading-8">
                    Studio was started by three friends who noticed that
                    developer studios were charging clients double what an
                    in-house team would cost. Since the beginning, we have been
                    committed to doing things differently by charging triple
                    instead.
                  </p>
                  <p className="text-lg text-neutral-600 tracking-tighter leading-8">
                    At Studio, we’re more than just colleagues — we’re a family.
                    This means we pay very little and expect people to work
                    late. We want our employees to bring their whole selves to
                    work. In return, we just ask that they keep themselves there
                    until at least 6:30pm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeDisplay>

        <CultureSection />

        <Employee />

        <div className="bg-white max-md:pt-28">
          <div className="h-[40rem] relative inset-x-0 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-neutral-50">
            <BodySvg />
            <div className="top-0 left-0 w-full absolute">
              <div className="max-w-7xl mx-auto px-5 py-40">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div
                    className="max-w-2xl"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <h2>
                      <span className="block font-display tracking-tighter [text-wrap:balance] text-2xl font-semibold text-neutral-950">
                        From the blog
                      </span>
                    </h2>
                    <div className="mt-6 text-xl text-neutral-600 tracking-tight">
                      <p>
                        Our team of experienced designers and developers has
                        just one thing on their mind; working on your ideas to
                        draw a smile on the face of your users worldwide. From
                        conducting Brand Sprints to UX Design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-none mt-28">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <article>
                        <div className="relative flex flex-col items-start pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                          <h3 className="mt-6 text-base font-semibold text-neutral-950">
                            The Future of Web Development: Our Predictions for
                            2023
                          </h3>
                          <time
                            dateTime="2023-04-06"
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
                          <a
                            className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                            aria-label="Read more: The Future of Web Development: Our Predictions for 2023"
                            href="/blog/future-of-web-development"
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
                    <div style={{ opacity: 1, transform: "none" }}>
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

        {/* ----Tail us for Project---- */}
        <TailUsProject />

        {/* ----Footer Section---- */}
        <Footer />
      </MainContainer>
    </>
  );
}

export default About;
