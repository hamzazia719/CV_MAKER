import CV1 from "../../assets/CV-1.png";
import CV2 from "../../assets/CV-1.png";
import CV3 from "../../assets/CV-1.png";

const Career = () => {
  return (
    <div className=" bg-gray-100">
      <h1 className=" flex justify-center text-4xl font-bold text-gray-700 pt-12">
        Resume Templates for Every Career Path.
      </h1>
      <div className=" flex justify-center mt-2">
        <div className=" w-40 h-2 rounded-2xl bg-green-400"></div>
      </div>
      <p className=" w-1/2 m-auto text-center mt-8">
        You can pick one of our handcrafted resume templates above. You can
        start building your resume in less than 5 seconds, using predefined
        sections approved by recruiters worldwide. You can also customize it to
        your own needs and personality and hit 'Download'. It's THAT easy to
        use, even if you've never made a resume in your life before!
      </p>
      <div className=" mt-12 flex justify-center gap-8 mx-20">
        <div>
          <img src={CV1} alt="cv" />
          <h1 className=" text-2xl w-4/5 font-bold text-gray-700">
            Creative Resume Template
          </h1>
          <p className=" text-gray-700">
            A resume template as creative as your imagination
          </p>
        </div>
        <div>
          <img src={CV2} alt="cv" />
          <h1 className=" text-2xl w-4/5 font-bold text-gray-700">
            Professional Resume template
          </h1>
          <p className=" text-gray-700">
            Put your best foot forward with a professional resume template
          </p>
        </div>
        <div>
          <img src={CV3} alt="cv" />
          <h1 className=" text-2xl w-4/5 font-bold text-gray-700">
            College Resume Template
          </h1>
          <p className=" text-gray-700">No experience? No problem!</p>
        </div>
      </div>
      <div className=" flex justify-center">
        <button
          className="mt-8 inline-flex items-center justify-center rounded-3xl bg-gray-400 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-gray-500/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          // href="#"
        >
          Discover More Resume Templates
        </button>
      </div>
      <p className=" flex justify-center items-center p-8 text-gray-700 text-3xl">Build Your Resume Fast and Easy.</p>
    </div>
  );
};

export default Career;
