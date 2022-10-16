import Card from "../Components/Card";
import LandingPage from "../Components/LandingPage";
import Header from "../Layouts/Header";

export default function Home() {
  type brandInfo = {
    name: string;
    img: string;
  };

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
  return (
    <>
      <Header />
      <LandingPage />
      <div className="h-72">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="">
            <div className="text-xl mt-5 font-bold">Navegar por marca</div>
            <div className={`mt-5 grid grid-flow-col auto-cols-max`}>
              {brandList.map((brand) => {
                return <Card name={brand.name} img={brand.img} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
