import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import ShortGuideBody from "../components/ShortGuideBody";
import TailUsProject from "../components/TailUsProject";
import Footer from "../components/Footer";

export default function ShortGuide() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[32rem] md:h-[42rem] xl:h-[48rem] 2xl:h-[30rem] relative">
          <div className="absolute top-52 md:top-64 w-full">
            <div className="max-w-5xl mx-auto px-5">
              <div className="text-center">
                <h1>
                  <span className="block font-display text-sm font-semibold text-neutral-950">
                    December 1, 2022
                  </span>
                  <span className="sr-only"> - </span>
                  <h1 className="mt-6 block text-5xl sm:text-5xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    A Short Guide to Component Naming
                  </h1>
                </h1>
                <div className="mt-6 text-base text-neutral-500">
                  <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
                    by Angela Fisher, Front-end Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeDisplay>

        {/* ----Short Guide Body---- */}
        <ShortGuideBody />

        {/* ----Tail us for Project---- */}
        <TailUsProject />

        {/* ----Footer Section---- */}
        <Footer />
      </MainContainer>
    </>
  );
}
