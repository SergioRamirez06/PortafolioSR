import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/blogView.css'


export const BlogView = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="container mx-auto p-3 md:p-8">
    <div className="flex flex-col-reverse md:flex-row relative">
      <div className="w-full md:w-2/3">
        <div className="flex flex-col gap-4 md:px-20 fade-zoom-up">
          {articles.map((article) => (
            <article key={article.id} className="w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] flex items-center mb-4">
              <Link to={`/read/${article.slug}/${article.id}`} className="flex w-full">
                <div className="w-full pr-4">
                  <div className="text-xs mb-1 text-slate-400 flex items-center italic">
                    <div className="h-[1px] w-20 bg-amber-200 md:w-5 mr-2"></div> {article.date}
                  </div>
                  <h1 className="text-sm md:text-md text-amber-200 font-bold mb-2 paraf">{article.title}</h1>
                  <div className="text-sm hidden md:block paraf">{article.desc}</div>
                </div>
                <div>
                  <div className="w-20 h-20 md:w-28 flex items-center md:h-28">
                    <img src={article.image} className="rounded-lg md:rounded-xl" alt="" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <div className="flex flex-col text-left">
          <div className="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent">
            Let's share experiences, stories, and knowledge together.
          </div>
          <div className="h-[1px] mt-7 mb-7 w-20 bg-amber-200 mr-2"></div>
          <div className="hidden md:block">
            <div className="text-white text-md font-semibold">Topics</div>
            <div className="mt-3 flex flex-wrap gap-1">
              <span className="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">NodeJS</span>
              <span className="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
