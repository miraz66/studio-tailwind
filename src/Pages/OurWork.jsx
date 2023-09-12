import Footer from "../components/Footer";
import Headers from "../components/Headers";
import WorkStudys from "../components/WorkStudys";

export default function OurWork() {
  return (
    <>
      <Headers>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            Our work
          </span>
          <span className="sr-only"> - </span>
          <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tighter text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Proven solutions for real-world problems.
          </span>
        </h1>
        <div className="mt-6 max-w-3xl text-xl text-neutral-600">
          <p>
            We believe in efficiency and maximizing our resources to provide the
            best value to our clients. The primary way we do that is by re-using
            the same five projects we’ve been developing for the past decade.
          </p>
        </div>
      </Headers>

      <WorkStudys />
      {/* relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px */}

      <div className="relative before:absolute before:left-0 before:top-0 before:bg-neutral-950 before:h-px before:w-6 after:absolute after:top-0 after:right-0 after:left-8 after:bg-neutral-950/10 after:h-px"></div>

      <Footer />
    </>
  );
}
