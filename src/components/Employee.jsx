import image1 from "../assets/EmployeeImages/leslie-alexander1.jpg";
import image2 from "../assets/EmployeeImages/michael-foster2.jpg";
import image3 from "../assets/EmployeeImages/dries-vincent3.jpg";
import image4 from "../assets/EmployeeImages/chelsea-hagon4.jpg";
import image5 from "../assets/EmployeeImages/emma-dorsey5.jpg";
import image6 from "../assets/EmployeeImages/leonard-krasner6.jpg";
import image7 from "../assets/EmployeeImages/blake-reid7.jpg";
import image8 from "../assets/EmployeeImages/kathryn-murphy8.jpg";
import image9 from "../assets/EmployeeImages/whitney-francis9.jpg";
import image10 from "../assets/EmployeeImages/jeffrey-webb10.jpg";
import image11 from "../assets/EmployeeImages/benjamin-russel11.jpg";
import image12 from "../assets/EmployeeImages/angela-fisher12.jpg";

export default function Employee() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="space-y-24"></div>
          <div>
            <div
              className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
              style={{ opacity: 1, transform: "none" }}
            ></div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div style={{ opacity: 1, transform: "none" }}>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Leadership
                </h2>
              </div>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image1}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Leslie Alexander
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Co-Founder / CEO
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image2}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Michael Foster
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Co-Founder / CTO
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image3}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Dries Vincent
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Partner &amp; Business Relations
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div
              className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
              style={{ opacity: 1, transform: "none" }}
            ></div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div style={{ opacity: 1, transform: "none" }}>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Team
                </h2>
              </div>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image4}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Chelsea Hagon
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Senior Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image5}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Emma Dorsey
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Senior Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image6}
                          style={{ color: "transparent" }}
                        />

                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Leonard Krasner
                          </p>
                          <p className="mt-2 text-sm text-white">
                            VP, User Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image7}
                          style={{ color: "transparent" }}
                        />

                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Blake Reid
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Junior Copywriter
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image8}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Kathryn Murphy
                          </p>
                          <p className="mt-2 text-sm text-white">
                            VP, Human Resources
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image9}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Whitney Francis
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Content Specialist
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image10}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Jeffrey Webb
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Account Coordinator
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image11}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Benjamin Russel
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Senior Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                        <img
                          alt=""
                          loading="lazy"
                          width="1800"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          src={image12}
                          style={{ color: "transparent" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            Angela Fisher
                          </p>
                          <p className="mt-2 text-sm text-white">
                            Front-end Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
