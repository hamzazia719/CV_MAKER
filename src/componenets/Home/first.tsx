import CVW from "../../assets/section_1.webp";
import { GoArrowRight } from "react-icons/go";

const First = () => {
  return (
    <div className=" mx-12">
      <h1 className=" text-4xl mt-8 text-gray-700">
        The online resume builder getting folks hired by BBC, Google, Apple,
        Tesla, and Airbnb.
      </h1>
      <div className=" flex items-center justify-center gap-4">
        <div>
          <p className=" text-2xl text-gray-700">
            Build your brand-new resume in as little as 5 minutes.
          </p>
          <h1 className=" text-3xl font-bold text-gray-800">
            Try it for free.
          </h1>
          <div>
            <a
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-gray-700 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-gray-500/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              href="/templete"
            >
              Build My Resume
              <GoArrowRight className=" text-3xl font-bold ml-2" />
            </a>
            <p className=" mt-2 text-gray-600">No credit card required</p>
          </div>
        </div>
        <div>
          <img src={CVW} width={700} alt="" />
        </div>
      </div>
    </div>
  );
};

export default First;
