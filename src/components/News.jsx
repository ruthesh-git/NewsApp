import React, { useEffect, useState } from 'react'
import Newsitem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const apikey = process.env.REACT_APP_NEWS_API;

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {
        fetchArticles();
        //eslint-disable-next-line
    }, [page]);   // empty dependency array = run once (mount only)

    const fetchArticles = async () => {
        // 1. Prevent fetching if we already loaded everything
        if (articles.length >= totalResults && totalResults !== 0) {
            setLoading(false)
            return;
        }
        if (page === 1) props.setProgress(25)
        setLoading(true);

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        if (page === 1) props.setProgress(70)

        setArticles(articles.concat(parsedData.articles));
        setLoading(false)
        setTotalResults(parsedData.totalResults)


        //CRITICAL: If we got 0 articles, force stop by matching lengths
        if (parsedData.articles.length === 0) {
            setTotalResults(articles.length);
        }

        if (page === 1) props.setProgress(100)
    }
    const fetchData = async () => {
        console.log("Loading next page", page + 1);
        setPage(prevPage => prevPage + 1);
    };



    return (
        <div className="container my-4">
            <h1 className='text-center' style={{marginTop : 90}} >News HeadLines</h1>

            {loading && articles.length === 0 && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={articles.length < totalResults}
                className='row'
                loader={<Spinner />}
                style={{ overflow: 'hidden' }} // Adds this to prevent horizontal scroll

            >

                {articles.map((article, index) => (
                    <div className="col-md-4" key={index}>
                        <Newsitem
                            title={article.title ? article.title.slice(0, 90) + "..." : ""}
                            desc={article.description ? article.description.slice(0, 90) + "..." : ""}
                            imageUrl={article.urlToImage}
                            newsUrl={article.url}
                            publishedAt={new Date(article.publishedAt).toUTCString()}
                            source={article.source.name}

                        />
                    </div>
                ))}
            </InfiniteScroll>

        </div>
    )

}

export default News

News.defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 20
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
