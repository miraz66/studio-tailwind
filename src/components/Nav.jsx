export default function Nav() {
  return (
    <div>
      <div className="pt-40">
        <div className="">
          <div className="group grid grid-cols-2 text-white border-y">
            <div className="h-40 hover:bg-gray-950 ease-in-out duration-200 border-r flex items-center">
              <div
                style={{ wordSpacing: "-25px" }}
                className="w-2/3 mx-auto pl-5 text-5xl font-mono tracking-tighter font-medium"
              >
                Our Work
              </div>
            </div>
            <div className="h-40 hover:bg-gray-950 ease-in-out duration-200 flex items-center">
              <div
                style={{ wordSpacing: "-25px" }}
                className="w-3/4 mx-auto text-5xl font-mono tracking-tighter font-medium"
              >
                About Us
              </div>
            </div>
          </div>

          <div className="group grid grid-cols-2 text-white border-b">
            <div className="h-40 hover:bg-gray-950 ease-in-out duration-200 border-r flex items-center">
              <div
                style={{ wordSpacing: "-25px" }}
                className="w-2/3 mx-auto pl-5 text-5xl font-mono tracking-tighter font-medium"
              >
                Our Process
              </div>
            </div>
            <div className="h-40 hover:bg-gray-950 ease-in-out duration-200 flex items-center">
              <div
                style={{ wordSpacing: "-25px" }}
                className="w-3/4 mx-auto text-5xl font-mono tracking-tighter font-medium"
              >
                Block
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
