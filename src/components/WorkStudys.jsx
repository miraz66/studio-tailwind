export default function WorkStudys() {
  return (
    <>
      <div className="">
        <article>
          <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
              <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                <img
                  alt=""
                  loading="lazy"
                  width="36"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 flex-none"
                  src="/_next/static/media/logomark-dark.4d2947be.svg"
                  style={{ color: "transparent" }}
                />
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
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
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
                      Working with Studio, we felt more like a partner than a
                      customer. They really resonated with our mission to change
                      the way people convince their parents to cash out their
                      pensions.
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
      </div>
    </>
  );
}
