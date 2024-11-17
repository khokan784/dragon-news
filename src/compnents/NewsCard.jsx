import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const {news} = props || {}
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden p-4">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full"
          src={news.author.img}
          alt="Author Avatar"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-900">{news.author.name}</p>
          <p className="text-gray-500 text-sm">{news.author.published_date}</p>
        </div>
        <button className="ml-auto text-gray-500">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="px-4 font-bold text-gray-900 text-lg">{news.title}</h2>

      {/* Image */}
      <img
        className="w-full h-48 object-cover mt-2"
        src={news.thumbnail_url}
        alt="Thumbnail"
      />

      {/* Description */}
      <div className="p-4 text-gray-700 text-sm">
        {news.details.slice(0, 100)}...{' '}
        <Link to={`/news/${news._id}`} className="text-blue-500 font-medium cursor-pointer">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between text-gray-600">
        {/* Rating */}
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <span className="ml-1 font-semibold">{news.rating.number}</span>
        </div>
        {/* Views */}
        <div className="flex items-center">
          <FaEye />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
