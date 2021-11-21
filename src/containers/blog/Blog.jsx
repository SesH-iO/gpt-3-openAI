import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const blogArts = [
  {
    imgUrl: blog02,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imgUrl: blog03,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imgUrl: blog04,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
  {
    imgUrl: blog05,
    date: 'Sep 26, 2021',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogArts.map((item, index) => (
            <Article
              imgUrl={item.imgUrl}
              date={item.date}
              text={item.text}
              key={item.date + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
