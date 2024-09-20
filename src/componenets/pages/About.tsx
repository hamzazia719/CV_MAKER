import team from "../../assets/teamwork.jpg"
import time from "../../assets/time.avif"
import inde from "../../assets/bussiness.jpg"

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className=" flex justify-center items-center">
        <h1 className=" text-4xl font-bold text-gray-700 mb-4">Our Vision</h1>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Featured In Section */}
        <div className="text-center mb-10">
          <p className="text-lg italic text-gray-700">
            "We ask recruiters what makes a successful resume. Then we take
            those insights and build them into our resume templates. When you
            use our CV Maker, you are giving recruiters exactly what they want."
          </p>
          <p className="mt-4 font-semibold">Featured In:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <img src={time} alt="Time" className="h-40 rounded-lg" />
            <img
              src={inde}
              alt="Business Insider"
              className="h-40 rounded-lg"
            />
            {/* Add more logos as needed */}
          </div>
        </div>

        {/* Origin Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Origin</h2>
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Birth of a project
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            CV Maker began in 2024 when our team noticed a common problem among
            job seekers. Despite having strong skills and experience, many
            struggled to present their achievements in a professional way. So we
            set out to create a web-based tool that could simplify the process
            of building an eye-catching resume.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src={team}
                alt="Team working"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* Idea and Outcome */}
            <div>
              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-2">Idea</h4>
                <p className="text-gray-600">
                  By combining our respective backgrounds in technology,
                  marketing, and design, we developed an intuitive platform to
                  create professional resumes quickly and easily.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                <p className="text-gray-600">
                  After rigorous development and user testing, the platform
                  launched successfully, allowing job seekers to build
                  customized resumes that increased their chances of landing
                  interviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-blue-50 py-12 px-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-center">The Team</h3>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            We believe in the power of collaboration. By involving recruiters
            and real users in the process, we ensure that our CV Maker meets the
            highest standards of functionality and usability. Our team is
            dedicated to helping job seekers succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
