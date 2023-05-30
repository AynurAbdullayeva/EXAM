import React from "react";
import './Blog.css'


const Blog = () => {
  return (
    <>

      <div className="info-text">
        <h1>OUR LATEST BLOG</h1>
        <hr
          style={{
            width: "3%",
            height: "3px",
            backgroundColor: "red",
            border: "none",
          }}
        />{" "}
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>

<div className="center">
<div className="box">
   <div className="community">
        <div className="zoom">
            <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="pics" />
        </div> <br />
        
      </div>
      <div className="txt-b">
            <h3>Playback: Akufo-Addo speaks to business community</h3> <br />
            <h4>Posted by <span style={{color:'red'}}>Posted by admin at 04 Feb, 2017</span> at 04 Feb, 2017</h4> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br /> urna sed accumsan... <span style={{color:'red'}}>Read More</span></p>
        </div>
   </div>

   <div className="box">
   <div className="community">
        <div className="zoom">
            <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="pics" />
        </div> <br />
        
      </div>
      <div className="txt-b">
            <h3>Playback: Akufo-Addo speaks to business community</h3> <br />
            <h4>Posted by <span style={{color:'red'}}>Posted by admin at 04 Feb, 2017</span> at 04 Feb, 2017</h4> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br /> urna sed accumsan... <span style={{color:'red'}}>Read More</span></p>
        </div>
   </div>

   <div className="box">
   <div className="community">
        <div className="zoom">
            <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="pics" />
        </div> <br />
        
      </div>
      <div className="txt-b">
            <h3>Playback: Akufo-Addo speaks to business community</h3> <br />
            <h4>Posted by <span style={{color:'red'}}>Posted by admin at 04 Feb, 2017</span> at 04 Feb, 2017</h4> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br /> urna sed accumsan... <span style={{color:'red'}}>Read More</span></p>
        </div>
   </div>
</div>

    </>
  );
};

export default Blog;
