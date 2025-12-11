import React, { Component } from 'react'

export default class Newsitem extends Component {


    render() {
        let { title, desc, imageUrl, newsUrl, publishedAt, source} = this.props;
        return (
            <div>
                <div className="card my-4">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex : 1, left : "90%"}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Know More</a>
                        <p className="card-text"><small className="text-body-secondary">Last Updated {publishedAt}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}
