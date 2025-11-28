export default function Home() {
  return (
    <div className="relative p-4 m-6 rounded-lg bg-[url('bg1.jpg')] bg-cover">
      <div className="absolute inset-0 bg-black/55 rounded-lg"></div>
      <div className="relative text-white flex flex-col gap-3">
        <h1 className="mt-24 text-2xl">
          Best Education Consultancy in Calicut
        </h1>
        <p>
          Helping students choose the right colleges and courses with clarity
          and genuine support.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-[#1b365d] p-2 rounded-lg text-[#ffffff]">
            Book Free Counselling
          </button>
          <button className="bg-white p-2 rounded-lg text-black">
            Ask About Courses
          </button>
        </div>
      </div>
    </div>
  );
}
