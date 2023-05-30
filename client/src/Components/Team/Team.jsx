import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="info-text">
        <h1>MEET OUR TEAM</h1>
        <hr style={{ width: "3%", height:'3px' ,backgroundColor: "red", border:"none" }} />
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>

<div className="team">

<div className="container2">
<img className="image" src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg" alt="sekil" style={{width:'50%'}}/>
  <div className="middle">
    <div className="text">
        <h3>Gonzalez Gina</h3> <br />
        <p>Web Developer</p><br />
        <p>On the other hand, We denounce ut with <br /> righteo indignation and dislike men who <br /> are so beguiled and demoralized.</p>
    </div>
  </div>
</div>

<div className="container2">
<img className="image" src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg" alt="sekil" style={{width:'50%'}}/>
  <div className="middle">
    <div className="text">
        <h3>Gonzalez Gina</h3> <br />
        <p>Web Developer</p><br />
        <p>On the other hand, We denounce ut with <br /> righteo indignation and dislike men who <br /> are so beguiled and demoralized.</p>
    </div>
  </div>
</div>

<div className="container2">
<img className="image" src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg" alt="sekil" style={{width:'50%'}}/>
  <div className="middle">
    <div className="text">
        <h3>Gonzalez Gina</h3> <br />
        <p>Web Developer</p><br />
        <p>On the other hand, We denounce ut with <br /> righteo indignation and dislike men who <br /> are so beguiled and demoralized.</p>
    </div>
  </div>
</div>
</div>

    </>
  );
};

export default Team;
