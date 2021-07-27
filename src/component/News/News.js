import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BreakingNews from '../BreakingNews/BreakingNews';
import './News.css'

const News = () => {
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2021-06-26&sortBy=publishedAt&apiKey=85cfb74e9203467da3e08446a0000534'
        fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>setArticles(data.articles))
    },[])
    return (
        <div className="news-card">
            {
                articles.map((article,idx)=><BreakingNews news={article} key={idx}></BreakingNews>)
            }
           
        </div>
    );
};

export default News;