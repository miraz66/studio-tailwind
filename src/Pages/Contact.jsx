import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";

export default function Contact() {
  return (
    <>
      <MainContainer>
        <h6 className="font-semibold">Contact us</h6>
        <h4 className="my-8 text-neutral-980 text-5xl font-semibold tracking-tight">
          Let’s work together
        </h4>
        <p className="text-xl text-neutral-500">
          {" "}
          We can’t wait to hear from you.
        </p>
      </MainContainer>

      <ContactInformation />

      <Footer />
    </>
  );
}
