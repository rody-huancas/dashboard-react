import { useState } from "react";
import {
  RiDashboard3Line,
  RiEarthLine,
  RiArrowDownSLine,
  RiMessage3Line,
  RiCalendar2Line,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSlackLine,
  RiCheckFill,
} from "react-icons/ri";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#141517]">
        {/* Sidebar */}
        <div
          className={`bg-[#1E1F24] fixed ${
            showMenu ? "-left-0" : "-left-full"
          } lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between transition-all z-50`}
        >
          {/* Menu */}
          <div>
            {/* Logo */}
            <div className="mb-8">
              <h1
                className="text-white uppercase font-bold text-xl tracking-[4px]"
                onClick={handleMenu}
              >
                Mi Logo
              </h1>
            </div>

            {/* Nav */}
            <nav>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
              >
                <RiDashboard3Line /> Analytic
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
              >
                <RiEarthLine />
                <span className="flex-1 flex items-center justify-between">
                  Social Media <RiArrowDownSLine />
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
              >
                <RiMessage3Line /> Message
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
              >
                <RiCalendar2Line /> Schedule
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
              >
                <RiSettings3Line /> Settings
              </a>
            </nav>
          </div>

          {/* Logout */}
          <div className="">
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <RiLogoutCircleRLine /> Logout
            </a>
          </div>
        </div>
        {/* Fin Sidebar */}

        {/* Btn menu mobile */}
        <button
          className="lg:hidden fixed right-4 bottom-4 bg-[#664EFA] text-white ring-4 ring-[#141517] text-xl p-3 rounded-full z-50"
          onClick={handleMenu}
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>

        {/* Content */}
        <main className="lg:pl-80 p-8">
          {/* header */}
          <header className="fixed top-0 left-0 w-full bg-[#141517] p-8 flex justify-end border-b border-gray-500">
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="text-white text-lg">
                  <RiNotification3Line />
                </a>
              </li>
              <li>
                <a href="#" className="flex text-white items-center gap-2">
                  <img
                    src="https://img.freepik.com/foto-gratis/chica-romantica-sonrisa-astuta-blusa-vintage-sentada-cama-tocando-su-barbilla-mano-retrato-mujer-joven-linda-sonadora-flor-peinado-descansando-dormitorio-manana_197531-3187.jpg?w=1060&t=st=1681800672~exp=1681801272~hmac=85deaf842db2c7a2b6597e6371a68bcac10e293490dffff21b0157d0e0b481e2"
                    alt="imagen usuario"
                    className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
                  />
                  Ferra Alexandra
                  <RiArrowDownSLine />
                </a>
              </li>
            </ul>
          </header>
          {/* Main content */}
          <div className="pt-28">
            <h2 className="text-4xl text-gray-300 mb-10">Plan & Precing</h2>
            {/* Plans */}
            <div className="text-gray-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* card 1 */}
              <div className="bg-[#1F1F24] p-8 lg:p-12 rounded-xl mb-10">
                <div className="flex items-center flex-col mb-10">
                  <RiSlackLine className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600" />
                  <h3 className="text-2xl uppercase tracking-[4px]">
                    Personal
                  </h3>
                  <p className="text-gray-500 mb-4">Lorem, ipsum.</p>
                  <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                    Free
                  </h5>
                  <p className="text-gray-500 mb-8">For a lifetime</p>
                  <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                    Current plan
                  </button>
                </div>
                {/* futurs */}
                <ul className="flex flex-col gap-4 text-gray-400">
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              {/* card 2*/}
              <div className="bg-[#664EFA] p-8 lg:p-12 rounded-xl mb-10">
                <div className="flex items-center flex-col mb-10">
                  <RiSlackLine className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600" />
                  <h3 className="text-2xl uppercase tracking-[4px] text-white">
                    Professional
                  </h3>
                  <p className="text-gray-300 mb-4">Lorem, ipsum.</p>
                  <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                    $9.99
                  </h5>
                  <p className="text-gray-300 mb-8">For a lifetime</p>
                  <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                    Current plan
                  </button>
                </div>
                {/* futurs */}
                <ul className="flex flex-col gap-4 text-gray-400">
                  <li className="flex items-center gap-4 text-white">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4 text-white">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4 text-white">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4 text-white">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4 text-white">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
              {/* card 3*/}
              <div className="bg-[#1F1F24] p-8 lg:p-12 rounded-xl mb-10">
                <div className="flex items-center flex-col mb-10">
                  <RiSlackLine className="text-7xl my-6 p-4 bg-purple-50 rounded-full text-purple-600" />
                  <h3 className="text-2xl uppercase tracking-[4px]">
                    Iterprice
                  </h3>
                  <p className="text-gray-500 mb-4">Lorem, ipsum.</p>
                  <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                    $199.99
                  </h5>
                  <p className="text-gray-500 mb-8">For a lifetime</p>
                  <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                    Current plan
                  </button>
                </div>
                {/* futurs */}
                <ul className="flex flex-col gap-4 text-gray-400">
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                  <li className="flex items-center gap-4">
                    <RiCheckFill className="text-green-500 text-2xl" /> Lorem
                    ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
