export default function TailUsProject() {
  return (
    <>
      <div className="mt-36 max-w-7xl bg-neutral-950 py-24 px-40 rounded-[60px]">
        <h3 className="pb-8 text-4xl text-neutral-100 font-semibold tracking-tighter">
          Tell us about your project !
        </h3>
        <button className="px-5 py-2 rounded-full bg-neutral-100 font-medium hover:bg-neutral-200 ease-in-out duration-200">
          Say Hei
        </button>

        <div className="h-[1px] w-full my-12 bg-slate-600"></div>

        <div className="flex gap-16">
          <div className="text-gray-100">
            <h2 className="text-xl font-medium tracking-tighter">
              Our offices
            </h2>

            <h3 className="pt-6 pb-1 text-lg tracking-tighter">Copenhagen</h3>
            <div className="text-sm text-gray-300 leading-6">
              <p>1 Carlsberg Gate</p>
              <p>1260, København, Denmark</p>
            </div>
          </div>

          <div className="text-gray-100">
            <h3 className="pt-14 text-lg pb-1 tracking-tighter">Billund</h3>
            <div className="text-sm text-gray-300 leading-6">
              <p>24 Lego Allé</p>
              <p>7190, Billund, Denmark</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
