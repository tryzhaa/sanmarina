import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";

export default function CoreValues() {
  return (
    <div className="mt-10 w-[90%] mx-auto text-center">
      <h2 className="text-3xl font-bold m-10">Our Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center">
        <div className="bg-white shadow-xl max-w-88 w-full border border-gray-300 rounded-xl p-10 m-2">
          <div className="bg-[#00c8ff21] text-[#00c1ff] rounded-full p-4 m-4 w-17 h-17 mx-auto">
            <MdOutlineRemoveRedEye className="text-4xl" />
          </div>
          <h2 className="text-[#1b365d] text-lg font-semibold">Transparency</h2>
          <p className="text-gray-600 text-sm mt-2">
            We believe in an open and honest process, ensuring you are fully
            informed at every step of your journey.
          </p>
        </div>

        <div className="bg-white shadow-xl max-w-88 w-full border border-gray-300 rounded-xl p-10 m-2">
          <div className="bg-[#00c8ff21] text-[#00c1ff] rounded-full p-4 m-4 w-17 h-17 mx-auto">
            <LuHeart className="text-4xl " />
          </div>
          <div>
            <h2 className="text-[#1b365d] text-lg font-semibold">Care</h2>
            <p className="text-gray-600 text-sm mt-2">
              Your goals are our goals. We provide personalized support tailored
              to your unique aspirations and needs.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-xl max-w-88 w-full border border-gray-300 rounded-xl p-10 m-2">
          <div className="bg-[#00c8ff21] text-[#00c1ff] rounded-full p-4 m-4 w-17 h-17 mx-auto">
            <MdOutlineVerified className="text-4xl " />
          </div>
          <div>
            <h2 className="text-[#1b365d] text-lg font-semibold">
              Reliability
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              With our expertise and proven track record, you can depend on us
              for accurate and trustworthy guidance.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-xl max-w-88 w-full border border-gray-300 rounded-xl p-10 m-2">
          <div className="bg-[#00c8ff21] text-[#00c1ff] rounded-full p-4 m-4 w-17 h-17 mx-auto">
            <FaArrowTrendUp className="text-4xl " />
          </div>
          <div>
            <h2 className="text-[#1b365d] text-lg font-semibold">Growth</h2>
            <p className="text-gray-600 text-sm mt-2">
              We are committed to fostering your personal and academic
              development, beyond just univeristy admissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
