import React, { Component } from 'react'
import Newsitem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 20
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = async () => {
        // 1. Prevent fetching if we already loaded everything
        if (this.state.articles.length >= this.state.totalResults && this.state.totalResults !== 0) {
            this.setState({ loading: false });
            return;
        }
        this.setState({ loading: true });

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3fd7e7bde77b44f9a45550d779ba08f9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        })

        //CRITICAL: If we got 0 articles, force stop by matching lengths
    if (parsedData.articles.length === 0) {
        this.setState({ totalResults: this.state.articles.length });
    }
    }
    fetchData = async () => {
        this.setState(
            prevState => ({ page: prevState.page + 1 }),
            () => this.fetchArticles()
        );
    };


    render() {
        return (
            <div className="container my-4">
                <h1 className='text-center my-4' >News HeadLines</h1>

                {this.state.loading && this.state.articles.length === 0 && <Spinner />}

                <InfiniteScroll 
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    className='row'
                    loader={<Spinner />}
                    style={{ overflow: 'hidden' }} // Adds this to prevent horizontal scroll

                >

                    {this.state.articles.map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <Newsitem
                                title={article.title ? article.title.slice(0, 45) + "..." : ""}
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
}
