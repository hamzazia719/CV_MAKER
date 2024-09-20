import User from "../../assets/download.jpeg"

const cardData = [
  {
    photo: "https://via.placeholder.com/150",
    name: "John Doe",
    review: 4, // Number of stars
    content: "Content for the first card.",
    company: "Company A",
    position: "Position A",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Jane Smith",
    review: 5, // Number of stars
    content: "Content for the second card.",
    company: "Company B",
    position: "Position B",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    review: 3, // Number of stars
    content: "Content for the third card.",
    company: "Company C",
    position: "Position C",
  },
];

const StarRating = ({ rating }: any) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="flex space-x-1">
      {stars.map((filled, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${filled ? "text-yellow-500" : "text-gray-300"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27l5.18 3.04-1.39-6.07L22 9.24l-6.16-.52L12 2 8.16 8.72 2 9.24l4.21 4.99-1.39 6.07L12 17.27z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

const Review = () => {
  return (
    <div className=" bg-gray-100">
      <div className=" pt-4">
        <h1 className=" flex items-center justify-center text-4xl text-gray-700">What do our users say about CVmaker?</h1>
        <p className=" flex justify-center items-center text-xl text-gray-700 m-4">They all found their dream job, thanks to CVmaker:</p>
      </div>
      <div className=" flex flex-wrap justify-center gap-4 p-4">
        {cardData.map((item, index) => (
          <div
            style={{ width: "18rem" }}
            key={index}
            className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center p-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={User}
                  alt="User Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="flex items-center">
                  <StarRating rating={item.review} />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-4">
              <p>
                {item.content} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam eveniet necessitatibus quisquam
                veritatis quos
              </p>
            </div>
            {/* Footer */}
            <div className="bg-gray-100 p-4">
              <p className="text-gray-800">Company: {item.company}</p>
              <p className="text-gray-800">Position: {item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
