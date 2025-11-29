function Navbar() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="p-4 flex justify-between items-center gap-6">
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
      </div>
      <hr className="w-[90%] mx-auto" />
    </>
  );
}
export default Navbar;
