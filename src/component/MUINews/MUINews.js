import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import MUIBreakingNews from '../MUIBreakingNews/MUIBreakingNews';
import './MUINews.css'
const MUINews = () => {
    const [articles,setArcticles] = useState([])
    // useEffect(()=>{
    //     const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2021-06-27&sortBy=publishedAt&apiKey=4809361130c7427a9767ddd9b8b8d1af'
    
    //     fetch(apiUrl)
    //     .then(response=>response.json())
    //     .then(data=>setArcticles(data.articles))
    // },[])
    useEffect(()=>{
    const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2021-06-27&sortBy=publishedAt&apiKey=4809361130c7427a9767ddd9b8b8d1af'
    axios(apiUrl)
    .then(data=>setArcticles(data.data.articles))
    },[])
    return (
        <div className="mui-news-card">
            {
                articles.map((articles,idx)=> <MUIBreakingNews news={articles} key={idx}></MUIBreakingNews>)
            }

        </div>
    );
};

export default MUINews;