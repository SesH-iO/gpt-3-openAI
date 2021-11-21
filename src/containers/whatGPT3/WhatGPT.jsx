import React from 'react';
import { Feature } from '../../components';

import './whatGPT.css';

const wGpt3 =
  'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.';
const fChatbots = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ';
const fKnowledgebase =
  'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';
const fEducation =
  'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';

const WhatGPT = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text={wGpt3} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text={fChatbots} />
        <Feature title="Knowledgebase" text={fKnowledgebase} />
        <Feature title="Education" text={fEducation} />
      </div>
    </div>
  );
};

export default WhatGPT;
