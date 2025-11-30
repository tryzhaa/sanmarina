export default function AboutUs() {
  return (
    <div className="mt-10 w-[90%] mx-auto py-10">
      <div className="flex flex-wrap justify-evenly gap-6 bg-white p-8 rounded-md">
        <img
          src="/image.jpg"
          alt="who are we"
          className="max-w-md w-full rounded-md"
        />
        <div className="w-full max-w-md">
          <h6 className="text-xs">OUR STORY</h6>
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="mt-2 text-gray-700">
            Sanmarina was founded with a simple yet powerful mission: to provide
            students in Kerala with transparent, caring, and reliable guidance
            on their education journey.
            <br />
            <br />
            We understand the challenges and oppurtunities that lie ahead, and
            we are dedicated to helping every student find their perfect path to
            growth and success. Our team experienced couselors is passionate
            about education and committed to your future.
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md mt-10">
        <div className="flex flex-wrap justify-evenly gap-3 mt-10">
          <div className="w-full max-w-md shadow-md bg-gray-50 border border-gray-300 rounded-xl p-6 m-2">
            <h2 className="text-[#1b365d] text-lg font-semibold">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              To empower students with personalized, ethical, and comprehensive
              guidance, enabling them to make informed decisiona nd acheive
              best-fit universities worldwide.
            </p>
          </div>
          <div className="w-full max-w-md shadow-md bg-[#1b365d] border border-gray-300 rounded-xl p-6 m-2">
            <h2 className="text-white text-lg font-semibold">Our Vision</h2>
            <p className="text-gray-200 text-sm mt-2">
              To be the most trusted and respected educational consultancy in
              Kerala, recognized for our unwavering commitment to student
              success and our role in shaping future global leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
