import React from "react";

class Home extends React.Component  {


  render(){
  return (
    // <div className="container">
    //  {this.props.items.map((item, key)=>(
    //     <div key={key}>
    //     <img src={item.imageUrl} />
    //     <h4> {item.itemName} </h4>
    //     <h5> {item.itemType} </h5>
    //     <h5> {item.price} </h5>
    //     <h5> {item.quantity} </h5>
    //     </div>)
    //   )}
    //   {/* <ItemDetails /> */}
    // </div>
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
