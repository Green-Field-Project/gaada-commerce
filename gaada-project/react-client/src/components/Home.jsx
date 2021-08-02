import React from "react";

class Home extends React.Component  {


  render(){
  return (
    <div className="card">
    {
    this.props.items.map((elm,i)=>(
      <div className="container1" key={i}>
          <div className="card1">
    <div className="box1">
      <div className="content1">
      <img className="card-image1" src={elm.imageUrl} alt="item image" />

      <h3>{elm.itemName}</h3>
      <h3> {elm.itemType} </h3>
          </div>
          </div>
          </div>
          </div>
    ))
    } 
  </div>
  );
    }
};
export default Home;
