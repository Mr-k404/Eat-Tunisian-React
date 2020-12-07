import React from "react";
import { Card, CardBody, CardTitle, CardHeader, Button, Form, Media   } from "reactstrap";
import {CircularProgressbar} from "react-circular-progressbar";
import Rating from "../common/Rating"


const Data =[ 
  {title :"Laborum  adipisicing aliquip non sunt ",
   dic:"Occaecat nulla quis qui laborum et veniam laborum duis do aliqua laborum aute reprehenderit.",
   img:"/assets/img/notification-thumb-3.jpg",
  rt :4},

  {title :"Laborum vniam adipisicing aliquip non unt ",
   dic:"Occaecat nulla quis quiborum duis do aliqua laborum aute reprehenderit.",
   img:"/assets/img/petit-gateau-thumb.jpg",
  rt :3},

  {title :"Laborum veniam adipis non sunt ",
   dic:"Occaecat nulla quis qui laborum orum duis do aliqua laborum aute reprehenderit.",
   img:"/assets/img/card-thumb-1.jpg",
  rt :5}

]
 

const RadialProgressCard = ({
  title = "Good Old Fashioned Pancakes",
  disc ="A great, quick and easy recipe for Yorkshire pudding. Everybody loves 'em! ",
  rt = 4,
}) => {
  return (
    
    Data.map(d=>{
      return(
      <Card>
      <CardBody className="d-flex bd-highlight  align-items-center  ">
      <img  width="120" height="120" className="img-thumbnail" src={d.img}></img>
        <div className="p-3  bd-highlight ">
        <CardTitle className="rcpC" >{d.title}</CardTitle>
        <p >{d.dic}</p>
          <Rating  rating={d.rt} interactive={true}/>
        </div>
        <Form  className="action-form ml-auto  bd-highlight" >
        <Button className="m-2 " color="primary"><i className="fas fa-folder-plus p-2"></i> Update</Button>
        <Button color="primary"><i className="fas fa-trash p-2"></i>Delete</Button>
        </Form>
      </CardBody>
    </Card>)
    })

    
  );
};
export default RadialProgressCard;
