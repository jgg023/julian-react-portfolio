import React from 'react';
let authorPic = "/assets/images/Julian_150.jpg";
export default function About() {
  return (
    <div>
      <h1>Julian  Graves </h1> 
      <img src={process.env.PUBLIC_URL + authorPic} height="300" width="300" className=" float-left myPic" alt="Julian Graves" />
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
