import React from "react";
import Create from "./Create.jsx";
import axios from "axios";



export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: "",
      user: this.props.user
    }
    this.delete = this.delete.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  
  changeImage(){
    axios.put(`/user/image/${this.state.user.id}`, {image: this.state.image})
    .then(() =>{
      location.reload() 
    })
  }

  delete(id){
    axios.delete(`/items/${id}`)
    .then(()=>{
      location.reload()
    })
  }

  render() {
    return (
      <div>
        <div>
          <span id="disconnectbtn" style={{cursor:"pointer"}} onClick={this.props.disconnect}> Disconnect </span>
          <span id="deleteAccbtn" style={{cursor:"pointer"}} onClick={this.props.deleteAccount}> Delete Account </span>
          <br /><br />
          <div id="userInfo">
          <img className="card-image2" src={this.state.user.image}/>
          <h3>{this.state.user.username}</h3  >
          <h4>{this.state.user.email}</h4>
          </div>
          <div>
            <input id="changeImagebar" type="text" onChange={(e)=>{this.setState({image: e.target.value})}}/>
            <button onClick={this.changeImage} >Change profile picture</button>
          </div>
        </div>
        <br />
        <br />
      <div>
        <Create/>
      </div>   
      </div>
    );
  }
}

