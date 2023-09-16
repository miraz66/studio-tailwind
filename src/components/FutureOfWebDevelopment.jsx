import MainContainer from "./MainContainer";
import HomeDisplay from "./HomeDisplay";
import WorkingProcessWebDevelopment from "./WorkingProcessWebDevelopment";

export default function FutureOfWebDevelopment() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[42rem] xl:h-[48rem] 2xl:h-[30rem] relative">
          <div className="absolute top-64 w-full">
            <div className="max-w-7xl mx-auto px-5">
              <div className="text-center">
                <h1>
                  <span className="block font-display text-sm font-semibold text-neutral-950">
                    April 6, 2023
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance] sm:text-5xl">
                    The Future of Web Development: Our Predictions for 2023
                  </span>
                </h1>
                <div className="mt-6 text-base text-neutral-500">
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
      </MainContainer>
    </>
  );
}
