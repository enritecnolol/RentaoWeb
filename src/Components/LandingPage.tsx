export default function LandingPage() {
  return (
    <div className="h-auto w-full bg-primary">
      <div className="container flex flex-wrap md:flex-none mx-auto py-8">
        <div className="flex justify-center w-full sm:w-1/2">
          <div className="w-auto">
            <div className="text-6xl sm:text-7xl text-white text-center sm:text-left">
              Tu carro en tus terminos
            </div>
            <div className="flex sm:flex-none justify-center sm:justify-start">
              <div className="flex flex-col justify-items-center mt-10 w-80">
                <span className="text-2xl text-white">
                  Desde $40 dolares por día
                </span>
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
        </div>
        <div className="flex justify-center w-full sm:w-1/2 py-6 sm:p-0">
          <img
            src="https://d2uye8zq02lejp.cloudfront.net/web/images/hero.webp"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
