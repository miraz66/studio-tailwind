import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import Footer from "../components/Footer";
import Services from "../components/Services";
import WorkingPeople from "../components/WorkingPeople";

function Home() {
  return (
    <>
      {/* ----MainContainer Section---- */}
      <MainContainer>
        <HomeDisplay css="h-[42rem] xl:h-[48rem] 2xl:h-screen relative">
          <div className="absolute top-52 md:top-60 lg:top-80 w-full">
            <div className="max-w-7xl xl:mx-auton lg:mx-10 mx-5">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-800 font-semibold tracking-tight leading-10 lg:leading-[90px]">
                  Award-winning development studio based in Denmark.
                </h1>

                <p className="lg:text-xl pt-10 leading-8 text-gray-700">
                  We are a development studio working at the intersection of
                  design and technology. It’s a really busy intersection though
                  — a lot of our staff have been involved in hit and runs.
                </p>
              </div>
            </div>
          </div>
        </HomeDisplay>

        {/* ----Company Workar people---- */}
        <WorkingPeople />

        {/* ----Company Services Section---- */}
        <Services />

        {/* ----Footer Section---- */}
        <Footer />
      </MainContainer>
    </>
  );
}

export default Home;
