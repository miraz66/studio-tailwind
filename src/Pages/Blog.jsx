import MainContainer from "../components/MainContainer";
import HomeDisplay from "../components/HomeDisplay";
import BlogArticles from "../components/BlogArticles";
import TailUsProject from "../components/TailUsProject";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <div className="">
        <MainContainer>
          <HomeDisplay css="h-[35rem] md:h-[30rem] lg:h-[25rem] 2xl:h-[28rem] relative">
            <div className="absolute top-52 md:top-56 w-full">
              <div className="max-w-7xl mx-auto px-5">
                <div className="">
                  <h1>
                    <span className="block font-display text-base font-semibold text-neutral-950">
                      Blog
                    </span>
                    <span className="sr-only"> - </span>
                    <span className="mt-6 block max-w-7xl text-5xl md:text-5xl font-display font-semibold tracking-tighter text-neutral-800 [text-wrap:balance]">
                      The latest articles and news
                    </span>
                  </h1>
                  <div className="mt-6 max-w-3xl text-xl text-neutral-600">
                    <p className="pb-10 text-neutral-600 font-medium tracking-tighter leading-8">
                      Stay up-to-date with the latest industry news as our
                      marketing teams finds new ways to re-purpose old CSS
                      tricks articles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HomeDisplay>

          {/* ----Blog Article Section---- */}
          <BlogArticles />

          {/* ----Tail us for Project---- */}
          <TailUsProject />

          {/* ----Footer Section---- */}
          <Footer />
        </MainContainer>
      </div>
    </>
  );
}
