import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Services from "../components/Services";
import WorkingPeople from "../components/WorkingPeople";

function Home() {
  return (
    <>
      {/* ----Headers Section---- */}
      <Headers>
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-800 font-semibold tracking-tight leading-10 lg:leading-[90px]">
          Award-winning development studio based in Denmark.
        </h1>

        <p className="lg:text-xl pt-10 leading-8 text-gray-700">
          We are a development studio working at the intersection of design and
          technology. It’s a really busy intersection though — a lot of our
          staff have been involved in hit and runs.
        </p>
      </Headers>

      <WorkingPeople />

      <Services />

      <Footer />
    </>
  );
}

export default Home;
