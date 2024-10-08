import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const ArticleView = () => {
  const { id } = useParams(); // obtener el parámetro de la URL
  const [post, setPost] = useState({
    title: '',
    image: '',
    date: '',
    content: '',
  });

  useEffect(() => {
    getDetails();
  }, [id]);

  const getDetails = async () => {
    try {
      const response = await axios.get(`https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all/${id}`);
      setPost({
        title: response.data.title,
        image: response.data.image,
        date: response.data.date,
        content: response.data.content,
      });
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }
  
  return (
    <div className="w-full md:w-3/5 h-20 mx-auto md:mt-5">
      <div className="bg-white rounded-xl mx-3 p-5 md:p-10 md:mx-0">
        <div>
          <h1 className="text-xl md:text-4xl text-black text-left font-bold leading-relaxed">
            {post.title}
          </h1>
          <div className="mt-3 text-left text-gray-800 text-sm">
            Published at <span>{post.date}</span>
          </div>
          <div className="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2"></div>
          <div>
            <div className="relative w-full" style={{ paddingTop: '50%' }}>
              <img
                src={post.image}
                className="absolute top-0 left-0 rounded-lg w-full h-full object-cover"
                alt="Thumbnail"
              />
            </div>
          </div>
          <div
            className="text-left text-black mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  )
}
