import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Services from "../components/Services";
import WorkingPeople from "../components/WorkingPeople";

function Home() {
  return (
    <>
      {/* ----Headers Section---- */}
      <Headers />

      <WorkingPeople />

      <Services />

      <Footer />
    </>
  );
}

export default Home;
