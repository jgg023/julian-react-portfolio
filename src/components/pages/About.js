import React from 'react';
let authorPic = "/assets/images/Julian_150.jpg";
export default function About() {
  return (
    <div>
      <h1>Julian  Graves </h1> 
      <img src={process.env.PUBLIC_URL + authorPic} height="300" width="300" className=" float-left myPic" alt="Julian Graves" />
      <p>
        Hello , my name is Julian lets start with the science experiments ! With react you can factor in mulitiple component including UI/UX giving your page the ultimate styling with scripts including .sass .jsx and html respectfully . 
      
      </p>
    </div>
  );
}
