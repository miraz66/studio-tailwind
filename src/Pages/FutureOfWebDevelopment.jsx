import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import WorkingProcessWebDevelopment from "../components/WorkingProcessWebDevelopment";
import TailUsProject from "../components/TailUsProject";
import Footer from "../components/Footer";

export default function FutureOfWebDevelopment() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[35rem] md:h-[42rem] xl:h-[48rem] 2xl:h-[30rem] relative">
          <div className="absolute top-52 md:top-64 w-full">
            <div className="max-w-7xl mx-auto px-5">
              <div className="text-center">
                <h1>
                  <span className="block font-display text-sm font-semibold text-neutral-950">
                    April 6, 2023
                  </span>
                  <span className="sr-only"> - </span>
                  <h1 className="mt-6 text-4xl sm:text-5xl block font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    The Future of Web Development: Our Predictions for 2023
                  </h1>
                </h1>
                <div className="mt-6 text-sm md:text-base text-neutral-500">
                  <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
                    by Chelsea Hagon, Senior Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeDisplay>

        {/* ----Future Of Web-Development---- */}
        <WorkingProcessWebDevelopment />

        {/* ----Tail us for Project---- */}
        <TailUsProject />

        {/* ----Footer Section---- */}
        <Footer />
      </MainContainer>
    </>
  );
}
