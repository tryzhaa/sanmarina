export default function Approach() {
  return (
    <div className="my-10 w-[90%] mx-auto rounded-md">
      <div className="flex flex-wrap justify-center sm:justify-evenly items-center gap-10">
        <div className="max-w-lg w-full flex flex-col gap-3 p-4">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p className="text-gray-700 mt-4">
            We believe in a structed, student-centric process. Our WHY-HOW-WHAT
            methodology ensures your journey is clear purposely, and successful.
          </p>
          <h2 className="text-xl text-[#1b365d] font-semibold mt-4">WHY</h2>
          <p className="text-gray-700 mt-2">
            We start by understanding your core motivations,passions,and
            long-term goals. This is the foundation of your educational path.
          </p>
          <h2 className="text-xl text-[#1b365d] font-semibold mt-4">HOW</h2>
          <p className="text-gray-700 mt-2">
            We map out a strategic plan, shortlisting the best-fit courses and
            universities, and preparing your applications for maximum impact.
          </p>
          <h2 className="text-xl text-[#1b365d] font-semibold mt-4">WHAT</h2>
          <p className="text-gray-700 mt-2">
            We deliver tangible results: successful admissions, visa assistance,
            and pre-departure support, ensuring a smooth transition to your new
            life.
          </p>
        </div>
        <div className="w-full max-w-lg border border-gray-300 bg-gray-50 rounded-xl p-6 shadow-md">
          <h2 className="text-lg text-center font-semibold m-2">
            Quick Inquiry
          </h2>
          <form name="contact" method="POST" data-netlify="true">
            <div className="flex flex-col gap-2">
              <label htmlFor="form-name">Name</label>
              <input
                type="text"
                name="name"
                id="form-name"
                className="w-full p-1 border border-gray-300 bg-white rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="flex flex-col w-full sm:max-w-[48%]">
                  <label htmlFor="form-phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="form-phone"
                    className="p-1 border border-gray-300 bg-white rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-full sm:max-w-[48%]">
                  <label htmlFor="form-email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="form-email"
                    className="p-1 border border-gray-300 bg-white rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="form-role">I am a </label>
              <select
                name="role"
                id="form-role"
                className="w-full p-2 border border-gray-300 bg-white rounded-lg"
              >
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>
            <div className="mt-2">
              <label htmlFor="form-message">Message</label>
              <textarea
                name="message"
                id="form-message"
                className="w-full p-2 border border-gray-300 bg-white rounded-lg"
              ></textarea>
            </div>
            <div className="mt-4 text-center w-full">
              <button
                type="submit"
                className="max-w-[18rem] w-full p-2 rounded-md bg-[#1b365d] text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
