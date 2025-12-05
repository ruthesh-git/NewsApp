import React, { Component } from 'react'
import Newsitem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
    
    
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
    }
    
    componentDidMount() {
    this.fetchArticles();
    }

    fetchArticles = async () => {
        this.setState({loading : true});

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3fd7e7bde77b44f9a45550d779ba08f9&page=${this.state.page}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({articles:parsedData.articles,
                        loading:false,
                        totalResults : parsedData.totalResults
        })
    }

    
    handleNext = async ()=>{
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
            this.setState({page : this.state.page +1},
                this.fetchArticles
            );
        }
    }

    handlePrev = async () =>{
        this.setState({page : this.state.page -1},
            this.fetchArticles
        );
    }

  render() {
    return (
        <div className = "container my-4">
            <h2 className='text-center'>News HeadLines</h2>
            {this.state.loading && <Spinner/>}
            <div className="row my-4">
                {this.state.articles.map((article, index) => (
                    <div className="col-md-4" key={index}>
                        <Newsitem
                            title={article.title?article.title.slice(0,45) + "...": ""}
                            desc={article.description?article.description.slice(0,90) + "..." : ""}
                            imageUrl={article.urlToImage}
                            newsUrl={article.url}
                            
                        />
                    </div>
                ))}
                <div className="container d-flex justify-content-between">
                <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handlePrev}>Previous</button>
                <button 
                    disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
                    type="button" 
                    className="btn btn-dark" 
                    onClick = {this.handleNext}>
                        Next
                </button>
                </div>
            </div>
        </div>
    )
  }
}
