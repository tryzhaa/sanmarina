export default function Footer() {
  return (
    <div>
      <div className="bg-[#1b365d] w-full">
        <div className="flex flex-wrap justify-between w-[90%] mx-auto gap-3 p-10">
          <div>
            <h2 className="text-white text-2xl font-semibold">Sanmarina</h2>
            <h4 className="text-gray-300  mt-2">Guidance towards growth</h4>
            <p className="text-gray-400 text-sm mt-2">Address</p>
          </div>
          <div>
            <h2 className="text-gray-200 text-lg font-semibold">Contact Us</h2>
            <p className="text-gray-400 text-sm mt-2">Phone</p>
            <p className="text-gray-400 text-sm mt-2">Email</p>
          </div>
          <div>
            <h2 className="text-gray-200 text-lg font-semibold">Follow Us</h2>
            <p className="text-gray-400 text-sm mt-2">Socials</p>
            <p className="text-gray-400 text-sm mt-2"> Whatsapp</p>
          </div>
        </div>
        <hr className="text-gray-500 w-[90%] mx-auto" />
        <div className="text-gray-400 text-xs text-center p-6">
          2025 Sanmarina. All rights reserved.
        </div>
      </div>
    </div>
  );
}
