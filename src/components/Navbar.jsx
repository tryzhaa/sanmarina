import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="p-4 hidden md:flex justify-between items-center gap-6">
          <h2 className="text-2xl font-semibold ml-5">Sanmarina</h2>
          <div className="flex items-center gap-6">
            <h4 className="font-bold">Home</h4>
            <h4 className="text-gray-700 font-medium">Services</h4>
            <h4 className="text-gray-700 font-medium">About Us</h4>
            <h4 className="text-gray-700 font-medium">Contact</h4>
            <button className="bg-[#1b365d] p-2 rounded-lg text-white font-semibold">
              Book Counselling
            </button>
          </div>
        </div>
        <div className="py-4 flex md:hidden flex-col justify-between  shadow-sm rounded-xl transition-all">
          <input id="menu-toggle" type="checkbox" className="peer hidden" />
          <div className="flex justify-between items-center px-4">
            <h2 className="text-2xl font-semibold  text-left">Sanmarina</h2>

            <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
              <FaBarsStaggered />
            </label>
          </div>
          <div className="flex flex-col items-center gap-6 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-64">
            <h4 className="font-bold">Home</h4>
            <h4 className="text-gray-700 font-medium">Services</h4>
            <h4 className="text-gray-700 font-medium">About Us</h4>
            <h4 className="text-gray-700 font-medium">Contact</h4>
            <button className="bg-[#1b365d] p-2 rounded-lg text-white font-semibold">
              Book Counselling
            </button>
          </div>
        </div>
      </div>
      <hr className="w-[80%] mx-auto text-gray-300" />
    </>
  );
}
export default Navbar;
