import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import WorkStudys from "../components/WorkStudys";
import HomeDisplay from "../components/HomeDisplay";
import WorkingCompany from "../components/WorkingCompany";
import TailUsProject from "../components/TailUsProject";

export default function OurWork() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[45rem] xl:h-[48rem] 2xl:h-[40rem] rounded-t-[40px] relative bg-white">
          <div className="absolute top-52 md:top-64 w-full">
            <div className="max-w-7xl mx-auto px-5 xl:px-10">
              <div>
                <h1>
                  <span className="block font-display text-base font-semibold text-neutral-950">
                    Our work
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block max-w-7xl text-5xl sm:text-5xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    Proven solutions for real-world problems.
                  </span>
                </h1>
                <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                  <p>
                    We believe in efficiency and maximizing our resources to
                    provide the best value to our clients. The primary way we do
                    that is by re-using the same five projects we’ve been
                    developing for the past decade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeDisplay>

        <WorkStudys />

        <div className="py-20 md:py-40 bg-white">
          <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32">
            <svg
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
            >
              <rect
                width="100%"
                height="100%"
                fill="url(#:r2c:)"
                strokeWidth="0"
              ></rect>
              <svg
                x="50%"
                y="-256"
                strokeWidth="0"
                className="overflow-visible"
              >
                <path
                  transform="translate(64 160)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(128 320)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(288 480)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(512 320)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(544 640)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(320 800)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
              </svg>
              <defs>
                <pattern
                  id=":r2c:"
                  width="96"
                  height="480"
                  x="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(0 -256)"
                  // eslint-disable-next-line react/no-unknown-property
                  fill="none"
                >
                  <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
                </pattern>
              </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div style={{ opacity: 1, transform: "none" }}>
                  <figure className="mx-auto max-w-4xl">
                    <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                      <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                        We approached <em>Studio</em> because we loved their
                        past work. They delivered something remarkably similar
                        in record time.
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <svg
                        width="184"
                        height="36"
                        viewBox="0 0 184 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="15" cy="18" r="15" fill="#0A0A0A" />
                        <path
                          d="M7 15.154C7 14.7567 7.23519 14.3971 7.59918 14.2379L15 11L22.4008 14.2379C22.7648 14.3971 23 14.7567 23 15.154V21.3944C23 22.3975 22.4943 23.3355 21.5706 23.7267C20.2201 24.2988 17.9607 25 15 25C12.0393 25 9.77993 24.2988 8.42936 23.7267C7.50573 23.3355 7 22.3975 7 21.3944V15.154Z"
                          fill="white"
                        />
                        <path
                          d="M11 18C11 18 12 20.5 15 20.5C18 20.5 19 18 19 18"
                          stroke="#0A0A0A"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M43.6 24H44.928V14.976H44.992L48.96 22.08H49.12L53.088 15.024H53.152V24H54.48V12.8H52.864L49.088 19.632H49.024L45.248 12.8H43.6V24ZM63.8221 12.8H62.1101L57.9981 23.84V24H59.4541L60.5101 21.072H65.4061L66.4621 24H67.9501V23.84L63.8221 12.8ZM60.9581 19.824L62.9261 14.352H62.9901L64.9581 19.824H60.9581ZM71.4644 24H72.8724V12.8H71.4644V24ZM77.5137 24H84.3138V22.72H78.9057V12.8H77.5137V24ZM91.1906 24.144C94.5506 24.144 95.8626 22.704 95.8626 20.704C95.8626 18.512 94.2786 17.664 92.1986 17.232L90.6786 16.912C89.6386 16.688 89.4146 16.304 89.4146 15.872C89.4146 15.408 89.8626 14.896 91.1746 14.896C92.5026 14.896 93.0626 15.568 93.1266 16.304H95.6706C95.6546 14.16 93.7666 12.656 91.2066 12.656C88.5666 12.656 86.8386 13.984 86.8386 15.872C86.8386 18.016 88.3586 18.816 90.2946 19.232L91.9266 19.584C92.9186 19.792 93.2866 20.16 93.2866 20.768C93.2866 21.44 92.7266 21.92 91.1906 21.92C89.9746 21.92 89.1266 21.376 89.0146 20.16H86.4706C86.6146 22.576 88.1986 24.144 91.1906 24.144ZM98.82 24H101.252V16.72H101.316L104.66 22.144H104.82L108.164 16.768H108.228V24H110.66V12.8H107.94L104.788 17.936H104.724L101.572 12.8H98.82V24ZM114.338 24H116.866V12.8H114.338V24ZM127.28 19.744C128.64 19.2 129.488 17.984 129.488 16.368C129.488 14.464 128.048 12.8 125.664 12.8H120.544V24H123.056V20.048H124.624L127.04 24H129.984V23.84L127.28 19.744ZM123.056 15.04H125.536C126.512 15.04 126.912 15.712 126.912 16.384C126.912 17.088 126.544 17.808 125.536 17.808H123.056V15.04ZM137.231 18.176L142.047 12.96V12.8H139.103L135.215 17.04V12.8H132.703V24H135.215V19.36L139.263 24H142.239V23.84L137.231 18.176Z"
                          fill="#0A0A0A"
                        />
                      </svg>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WorkingCompany />

        <TailUsProject />

        <Footer />
      </MainContainer>
    </>
  );
}
