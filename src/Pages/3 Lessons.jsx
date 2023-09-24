import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import LeassonsBody from "../components/3LeassonsBody";
import TailUsProject from "../components/TailUsProject";
import Footer from "../components/Footer";

export default function Lessons() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[36rem] xl:h-[48rem] 2xl:h-[30rem] relative">
          <div className="absolute top-52 md:top-64 w-full">
            <div className="max-w-4xl mx-auto px-5">
              <div className="text-center">
                <h1>
                  <span className="block font-display text-sm font-semibold text-neutral-950">
                    February 18, 2023
                  </span>
                  <span className="sr-only"> - </span>
                  <h1 className="mt-6 text-5xl block font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    3 Lessons We Learned Going Back to the Office
                  </h1>
                </h1>
                <div className="mt-6 text-sm md:text-base text-neutral-500">
                  <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
                    by Leslie Alexander, Co-Founder / CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeDisplay>

        {/* ----Page Body---- */}
        <LeassonsBody />

        {/* ----Tail us for Project---- */}
        <TailUsProject />

        {/* ----Footer Section---- */}
        <Footer />
      </MainContainer>
    </>
  );
}
