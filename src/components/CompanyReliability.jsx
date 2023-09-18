import BodySvg from "../assets/BodySvg";

export default function CompanyReliability() {
  return (
    <>
      <div className="bg-white pt-40">
        <div className="relative h-[48rem] rounded-t-[3rem] bg-gradient-to-b from-neutral-50 overflow-hidden">
          <BodySvg />

          <div className="absolute top-0 w-full pt-48">
            <div className="mx-auto max-w-7xl px- lg:px-8 ">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="max-w-3xl">
                  <h2>
                    <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                      Our values
                    </span>
                    <span className="sr-only"> - </span>
                    <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                      Balancing reliability and innovation
                    </span>
                  </h2>
                  <div className="mt-6 text-xl text-neutral-600">
                    <p>
                      We strive to stay at the forefront of emerging trends and
                      technologies, while completely ignoring them and forking
                      that old Rails project we feel comfortable using. We stand
                      by our core values to justify that decision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div>
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                        <div>
                          <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                            <strong className="font-semibold text-neutral-950">
                              Meticulous.
                            </strong>{" "}
                            The first part of any partnership is getting our
                            designer to put your logo in our template. The
                            second step is getting them to do the colors.
                          </div>
                        </div>
                      </li>
                      <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                        <div>
                          <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                            <strong className="font-semibold text-neutral-950">
                              Efficient.
                            </strong>{" "}
                            We pride ourselves on never missing a deadline which
                            is easy because most of the work was done years ago.
                          </div>
                        </div>
                      </li>
                      <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                        <div>
                          <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                            <strong className="font-semibold text-neutral-950">
                              Adaptable.
                            </strong>{" "}
                            Every business has unique needs and our greatest
                            challenge is shoe-horning those needs into something
                            we already built.
                          </div>
                        </div>
                      </li>
                      <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                        <div>
                          <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                            <strong className="font-semibold text-neutral-950">
                              Honest.
                            </strong>{" "}
                            We are transparent about all of our processes,
                            banking on the simple fact our clients never
                            actually read anything.
                          </div>
                        </div>
                      </li>
                      <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                        <div>
                          <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                            <strong className="font-semibold text-neutral-950">
                              Loyal.
                            </strong>{" "}
                            We foster long-term relationships with our clients
                            that go beyond just delivering a product, allowing
                            us to invoice them for decades.
                          </div>
                        </div>
                      </li>
                      <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                        <div>
                          <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                            <strong className="font-semibold text-neutral-950">
                              Innovative.
                            </strong>{" "}
                            The technological landscape is always evolving and
                            so are we. We are constantly on the lookout for new
                            open source projects to clone.
                          </div>
                        </div>
                      </li>
                    </ul>
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
