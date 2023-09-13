import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import CultureSection from "../components/CultureSection";
import Employee from "../components/Employee";

function About() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[42rem] xl:h-[48rem] 2xl:h-screen relative">
          <div className="absolute top-56 w-full">
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
      </MainContainer>
    </>
  );
}

export default About;
