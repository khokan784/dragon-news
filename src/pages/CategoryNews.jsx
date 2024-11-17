import { useLoaderData } from "react-router-dom";
import NewsCard from "../compnents/NewsCard";

const CategoryNews = () => {
    const { data:news } = useLoaderData();
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p>{news.length} new found in this category </p>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;