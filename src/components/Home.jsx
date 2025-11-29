export default function Home() {
  return (
    <div className="relative p-4 m-8 rounded-xl bg-[url('bg1.jpg')] bg-cover w-[90%] mx-auto">
      <div className="absolute inset-0 bg-black/55 rounded-xl"></div>
      <div className="relative text-white flex flex-col gap-3">
        <h1 className="mt-40 text-4xl font-semibold">
          Best Education Consultancy in Calicut
        </h1>
        <p>
          Helping students choose the right colleges and courses with clarity
          and genuine support.
        </p>
        <div className="flex gap-4 m-1">
          <button className="bg-[#1b365d] p-3 rounded-xl text-white font-semibold">
            Book Free Counselling
          </button>
          <button className="bg-white p-3 rounded-xl text-black font-semibold">
            Ask About Courses
          </button>
        </div>
      </div>
    </div>
  );
}
