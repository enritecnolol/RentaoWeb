type brandInfo  ={
    name: string;
    img: string
}
export default function Card({name, img}: brandInfo) {
  return (
    <div className="w-48 bg-white rounded-lg border border-gray-200 shadow-md mx-8">
      <a href="#">
        <img
          className="rounded-t-lg h-36 object-cover"
          src={img}
          alt=""
        />
      </a>
      <div className="p-1">
        <h5 className="text-lg font-bold tracking-tight text-black text-center">
          {name}
        </h5>
      </div>
    </div>
  );
}
