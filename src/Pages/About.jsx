import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";

function About() {
  return (
    <>
      <MainContainer>
        <HomeDisplay>
          <div className="absolute top-64 w-full">
            <div className="max-w-7xl mx-auto px-5">
              <div className="">
                <h1>
                  <span className="block font-display text-base font-semibold text-neutral-950">
                    About us
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block max-w-7xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance] sm:text-5xl">
                    Our strength is collaboration
                  </span>
                </h1>
                <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                  <p>
                    We believe that our strength lies in our collaborative
                    approach, which puts our clients at the center of everything
                    we do.
                  </p>
                  <p>
                    Studio was started by three friends who noticed that
                    developer studios were charging clients double what an
                    in-house team would cost. Since the beginning, we have been
                    committed to doing things differently by charging triple
                    instead.
                  </p>
                  <p>
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
      </MainContainer>
    </>
  );
}

export default About;
