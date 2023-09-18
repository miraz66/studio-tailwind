import CompanyReliability from "../components/CompanyReliability";
import Footer from "../components/Footer";
import HomeDisplay from "../components/HomeDisplay";
import MainContainer from "../components/MainContainer";
import TailUsProject from "../components/TailUsProject";
import WorkingProcess from "../components/WorkingProcess";

export default function Process() {
  return (
    <div>
      <MainContainer>
        {/* ----Home Display---- */}
        <HomeDisplay css="h-[42rem] xl:h-[48rem] 2xl:h-[41rem] relative">
          <div className="absolute top-56 w-full">
            <div className="max-w-7xl mx-auto px-5">
              <div className="">
                <h1>
                  <span className="block font-display text-base font-semibold tracking-tight text-neutral-950">
                    Our process
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block max-w-7xl text-4xl md:text-5xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    How we work
                  </span>
                </h1>
                <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                  <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
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

        {/* ----Company Working Process---- */}
        <WorkingProcess />

        {/* ----Company reliability---- */}
        <CompanyReliability />

        {/* ----Tail us for Project---- */}
        <TailUsProject />

        {/* ----Footer Section---- */}
        <Footer />
      </MainContainer>
    </div>
  );
}
