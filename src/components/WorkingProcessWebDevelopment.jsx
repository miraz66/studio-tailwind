export default function WorkingProcessWebDevelopment() {
  return (
    <>
      <article className="mx-auto max-w-3xl mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="pb-8 text-3xl text-neutral-900 font-semibold tracking-tighter">
            <span className="font-sans">1.</span> AI Assisted Development
          </h2>
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            With the launch of Github Copilot in 2022 the industry got its first
            glimpse at what it would look like to have Stack Overflow plumbed
            straight into your IDE. Copilot has given thousands of developers
            what they always longed for: plausible deniability over the bugs
            they write.
          </p>
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
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            In 2023 we can expect these assistants to become more sophisticated
            and for that to have ripple effects throughout the industry.
          </p>
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            We predict that traffic to MDN will decline precipitously as
            developers realise they no longer need to look up JS array methods.
            We also expect Stack Overflow’s sister site, Prompt Overflow, to
            become one of the most popular sites on the internet in a matter of
            months.
          </p>

          <h2 className="pb-8 pt-20 text-3xl text-neutral-900 font-semibold tracking-tighter">
            <span className="font-sans">2.</span> Rendering Patterns
          </h2>
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            To server render or not to server render? In 2022 the owners of the
            internet, Vercel, decided that instead of making this choice once
            for your whole application, now you will need to decide every time
            you write a new component.
          </p>
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            Because front-end development was becoming too easy, the same people
            who write CSS will now need to know how Streaming SSR and
            Progressive Hydration work.
          </p>
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

          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            In 2023 we can expect frameworks to adopt increasingly granular
            rendering patterns culminating in per-line rendering (PLR) later
            this year. We can also expect job postings for Rendering Reliability
            Engineers to reach an all time high.
          </p>

          <h2 className="pb-8 pt-20 text-3xl text-neutral-900 font-semibold tracking-tighter">
            <span className="font-sans">3.</span> JS Runtimes
          </h2>
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            Because choosing a JS runtime was one of the only areas where a
            developer wasn’t paralysed with choice, in early 2020, the creator
            of Node gave us something new to agonise over. The launch of Deno
            and Bun heralded the final mutation of JavaScript into a language
            that can truly run anywhere it wasn’t intended to.
          </p>
          <p className="text-lg font-medium text-neutral-800 tracking-tight">
            These new JS runtimes mean we can now serve HTML faster than ever
            before. For example, we’ve reduced the Time to First Byte (TTFB) of
            this blog to -0.4s. That means it actually loaded before you clicked
            the link.
          </p>
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
        <p className="text-lg font-medium text-neutral-800 tracking-tight">
          In 2023 we can expect even faster and more specialised JS runtimes to
          launch, including the promising Boil, a runtime specifically designed
          to reduce cold boot times on WiFi enabled kettles. All of these
          advancements promise to make the future of botnets a truly exciting
          one.
        </p>
      </article>
    </>
  );
}
