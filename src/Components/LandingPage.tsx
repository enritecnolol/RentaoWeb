export default function LandingPage () {
  return (
    <div className="h-[28rem] bg-primary">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="grid grid-cols-2 w-full mt-20">
          <div className="flex justify-center">
            <div className="">
              <span className="text-7xl text-white">
                Tu carro en tus terminos
              </span>
              <div className="flex flex-col justify-items-center mt-10 w-80">
                <span className="text-2xl text-white">Desde $40 dolares por día</span>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full text-lg focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 "
                  >
                    Encuentra tu carro
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://d2uye8zq02lejp.cloudfront.net/web/images/hero.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};
