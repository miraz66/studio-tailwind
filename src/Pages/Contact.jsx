import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";
import HomeDisplay from "../components/HomeDisplay";

export default function Contact() {
  return (
    <>
      <MainContainer>
        <HomeDisplay css="h-[45rem] xl:h-[48rem] 2xl:h-[36rem] rounded-t-[40px] relative bg-white">
          <div className="absolute top-64 w-full">
            <div className="max-w-7xl mx-auto px-5">
              <div className="">
                <h1>
                  <span className="block font-display text-base font-semibold tracking-tight text-neutral-950">
                    Contact us
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mt-6 block max-w-7xl text-4xl md:text-5xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                    Let’s work together
                  </span>
                </h1>
                <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                  <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
                    We can’t wait to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeDisplay>

        <ContactInformation />

        <Footer />
      </MainContainer>
    </>
  );
}
