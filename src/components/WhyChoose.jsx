import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";
import { LiaLocationArrowSolid } from "react-icons/lia";

export default function WhyChoose() {
  return (
    <div className="mt-10 w-[90%] mx-auto ">
      <h2 className="text-2xl font-semibold text-center m-8">
        Why Choose Sanmarina
      </h2>
      <div className="grid grid-cols-3 gap-6 m-4">
        <div className="flex gap-3 w-full">
          <div className="bg-gray-200 rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <MdOutlineVerified className="text-4xl " />
          </div>
          <div>
            <h2 className="font-medium">Genuine Guidance</h2>
            <p className="text-gray-700">
              We provide honest advice tailored to your unique profile and
              aspirations.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="bg-gray-200 rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <MdOutlineRemoveRedEye className="text-4xl " />
          </div>
          <div>
            <h2 className="font-medium">Transparency</h2>
            <p className="text-gray-700">
              Clear and upfront information about processes, costs, and
              opportunities.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="bg-gray-200 rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <FaRegUser className="text-lg " />
          </div>
          <div>
            <h2 className="font-medium">One-on-one support</h2>
            <p className="text-gray-700">
              Dedicated counsellors to guide every step of your journey.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="bg-gray-200 rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <PiHandshakeLight className="text-4xl " />
          </div>
          <div>
            <h2 className="font-medium">Trusted college connections</h2>
            <p className="text-gray-700">
              Strong partnerships with leading universities and institutions.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="bg-gray-200 rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <LiaLocationArrowSolid className="text-4xl " />
          </div>
          <div>
            <h2 className="font-medium">We guide, not sell</h2>
            <p className="text-gray-700">
              Our priority is your future success, not just admissions.
            </p>
          </div>
        </div>
      </div>
      <h2 className="p-4 mt-20 text-lg text-gray-400 font-medium text-center bg-gray-200 rounded-2xl flex flex-wrap justify-center gap-6">
        <p className="text-black">Germany</p>|<p className="text-black">UK</p>|
        <p className="text-black">Austria</p>|
        <p className="text-black">Ireland</p>
      </h2>
    </div>
  );
}
