import Logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-primary border-gray-200 py-2.5">
      <div className="container flex justify-between items-center mx-auto px-4">
        <a href="#" className="flex items-center">
          <img src={Logo} className="mr-3 h-12" alt="Rentao Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Rentao'
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-primary rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white text-xl"
                aria-current="page"
              >
                Encuentra carros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-xl"
              >
                Como funciona?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-xl"
              >
                Soporte
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 text-xl"
                aria-current="page"
              >
                Inicia sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
