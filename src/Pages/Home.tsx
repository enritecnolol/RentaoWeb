import Card from "../Components/Card";
import LandingPage from "../Components/LandingPage";
import HowItWorksIcon1 from "../Components/SVGs/HowItWorksIcon1";
import Header from "../Layouts/Header";
import HowItWorksCard from "../Components/HowItWorksCard";
import HowItWorksIcon2 from "../Components/SVGs/HowItWorksIcon2";
import HowItWorksIcon3 from "../Components/SVGs/HowItWorksIcon3";

type brandInfo = {
  name: string;
  img: string;
};

type HowItWorksCardInfo = {
  svg: any;
  title: string;
  description: string;
};

export default function Home() {
  const brandList: brandInfo[] = [
    {
      name: "tesla",
      img: "https://cdn2.dineroenimagen.com/media/dinero/styles/gallerie/public/images/2022/03/cargar-tesla.jpg",
    },
    {
      name: "honda",
      img: "https://www.cnet.com/a/img/resize/f702b25e8c7353c4d70a4adb7e8e0e6bf13add19/hub/2021/01/07/a9cb3648-5bc3-49ed-8bad-4c88b231a4ec/2021-honda-accord-008.jpg?auto=webp&fit=crop&height=775&width=1240",
    },
    {
      name: "toyota",
      img: "https://www.motor.com.co/__export/1649997336077/sites/motor/img/2022/04/14/20220414_103535804_5a1dc359ee48f_r_1511903764676_0-44-1280-684.jpeg_242310155.jpeg",
    },
    {
      name: "jeep",
      img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/11/16575289052169.jpg",
    },
    {
      name: "bmw",
      img: "https://cdn.pocket-lint.com/r/s/1201x/assets/images/131103-cars-review-bmw-m3-review-2014-image1-J6uYiX4nP2.jpg",
    },
  ];

  const HowItWorksCardList: HowItWorksCardInfo[] = [
    {
      svg: <HowItWorksIcon1 />,
      title: "Elige tu coche",
      description:
        "Elija entre una variedad de marcas y modelos por un pago semanal bajo, más millaje. Seguro y mantenimiento incluidos.",
    },
    {
      svg: <HowItWorksIcon2 />,
      title: "Consíguelo",
      description:
        "Haga su pedido para programar el ingreso a su automóvil a la hora y el lugar que prefiera.",
    },
    {
      svg: <HowItWorksIcon3 />,
      title: "Manéjalo",
      description:
        "Conduce tu coche todo el tiempo que quieras. Devuelve tu coche o cámbialo por otro cuando quieras.",
    },
  ];

  return (
    <>
      <Header />
      <LandingPage />
      {/* brand list start */}
      <div className="h-auto mb-8">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="w-full">
            <div className="text-xl mt-5 font-bold text-center sm:text-left">Navegar por marca</div>
            <div className={`mt-5 flex flex-wrap justify-around`}>
              {brandList.map((brand) => {
                return <Card name={brand.name} img={brand.img} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* brand list end */}
      {/* How it Works start */}
      <div className="h-auto bg-primary">
        <div className="container flex flex-wrap mx-auto">
          <div className="w-full mt-6">
            <div className="text-6xl text-center text-white text-bold">
              ¿Cómo funciona?
            </div>
            <div className="w-full">
              <div className="my-10 flex flex-wrap justify-around">
                {HowItWorksCardList.map((HowItWorks) => {
                  return (
                    <HowItWorksCard
                      svg={HowItWorks.svg}
                      title={HowItWorks.title}
                      description={HowItWorks.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How it Works end */}
      <div className="h-auto w-full container flex justify-center mx-auto">
        <div className="my-10 flex flex-wrap md:flex-none w-5/6">
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src="https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg"
              alt="Find perfect car"
              className="w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center p-4 w-full sm:w-1/2">
            <h5 className="mb-2 text-2xl font-bold">
              Encuentre el auto perfecto para{" "}
              <span className="text-secondary">probar antes de comprar</span>
            </h5>
            <p className="mb-3 font-normal">
              Asegúrese de que sus futuras ruedas funcionen bien con su estilo
              de vida tomándose su tiempo en el asiento del conductor.
            </p>
            <button
              type="button"
              className="sm:w-3/4 w-auto text-lg focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 "
            >
              Encuentra tu carro
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
