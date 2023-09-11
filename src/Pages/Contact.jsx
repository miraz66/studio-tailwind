import Headers from "../components/Headers";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="relative">
        <Headers>
          <h6 className="font-semibold">Contact us</h6>
          <h4 className="my-8 text-neutral-980 text-5xl font-semibold tracking-tight">
            Let’s work together
          </h4>
          <p className="text-xl text-neutral-500">
            {" "}
            We can’t wait to hear from you.
          </p>

          <div className="">hello</div>
        </Headers>
      </div>

      <Footer />
    </>
  );
}
