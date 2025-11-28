export default function Section() {
  return (
    <div className="mt-15">
      <h2 className="text-2xl font-bold text-center">What We Do</h2>
      <div className="flex justify-center w-[90%] mx-auto gap-3 m-4">
        <div className=" border border-gray-300 rounded-xl p-6 m-2">
          <h2 className="text-[#1b365d] text-lg font-semibold">
            Domestic Admissions
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Expert guidance for securing admissions in top colleges and
            universities across India.
          </p>
        </div>
        <div className="border border-gray-300 rounded-xl p-6 m-2">
          <h2 className="text-[#1b365d] text-lg font-semibold">Study Abroad</h2>
          <p className="text-gray-600 text-sm mt-2">
            Your complete guide to studying in Germany,UK,Ireland and Austria.
          </p>
        </div>
        <div className="border border-gray-300 rounded-xl p-6 m-2">
          <h2 className="text-[#1b365d] text-lg font-semibold">
            Career Counselling
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Personalized career counselling to help you find the right path for
            your future.
          </p>
        </div>
      </div>
    </div>
  );
}
