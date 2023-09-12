import Headers from "../components/Headers";
import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";

export default function Contact() {
  return (
    <>
      <Headers>
        <h6 className="font-semibold">Contact us</h6>
        <h4 className="my-8 text-neutral-980 text-5xl font-semibold tracking-tight">
          Let’s work together
        </h4>
        <p className="text-xl text-neutral-500">
          {" "}
          We can’t wait to hear from you.
        </p>
      </Headers>

      <ContactInformation />

      <Footer />
    </>
  );
}
