function Navbar() {
  return (
    <>
      <div className="mb-4">
        <div className="p-4 flex justify-between items-center gap-6">
          <h2 className="text-2xl">Sanmarina</h2>
          <div className="flex items-center gap-6">
            <h4>Home</h4>
            <h4>Services</h4>
            <h4>About Us</h4>
            <h4>Contact</h4>
            <button className="bg-[#1b365d] p-2 rounded-lg text-[#ffffff]">
              Book Counselling
            </button>
          </div>
        </div>
        <hr className="w-[90%] mx-auto" />
      </div>
    </>
  );
}
export default Navbar;
