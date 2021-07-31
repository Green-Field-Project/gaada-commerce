import React from "react";
import axios from "axios";
import Create from "./Create.jsx";



export default class Profile extends React.Component {
constructor(){
  super()

  this.delete = this.delete.bind(this)
}

delete(id){
  axios.delete(`/items/${id}`)
  .then((res)=>{
    console.log(res)
  })
}


  render() {
    return (
      <div>
        {/* {console.log('--------------------profile',this.props.users[0])} */}
        <div><img  className="card-image2" src={this.props.users[0].image}/>
        <h5>{this.props.users[0].username}</h5>
        <h3>{this.props.users[0].email}</h3></div>
        <div><br></br>
        <br></br>
        <br></br>
        <Create/>
</div>

<div className="card">
  {
    this.props.items.map((elm,i)=>(
      <div className="container1" key={i}>
          <div className="card1">
    <div className="box1">
      <div className="content1">
      <img className="card-image1" src={elm.imageUrl} alt="item image" />

      <h3>{elm.itemName}</h3>
          <button onClick={()=>this.delete(elm._id)}>Delete </button>
          </div>
          </div>
          </div>
          </div>
    ))
  }
</div>
      </div>
    );
  }
}



























// <Container>
//           <Row>
//             <Col xs={3} md={2}>
//               <Image
//                 src="https://banner2.cleanpng.com/20180615/zgt/kisspng-bootstrap-logo-css3-butta-5b2353942780f2.0412430015290418121618.jpg"
//                 roundedCircle
//                 width={100}
//                 height={120}
//                 alt="100x90"
//               />
//             </Col>
//           </Row>
//           <h4>Name : </h4>
//         </Container>
//         <div>
//             {
//                 this.props.data.map((item,i)=>(
//           <Card style={{ width: "18rem" }} key={i}>
//             <Card.Img variant="top" src={item.imageUrl} />
//             <Card.Body>
//               <Card.Title>{item.itemName}</Card.Title>
//               <Card.Text>
//                 {item.itemDescription}
//               </Card.Text>
//               <Card.Text>
//                 {item.quantity}
//               </Card.Text>
//               <Card.Text>
//                 {item.price}
//               </Card.Text>
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//             ))
//         }
//         </div>