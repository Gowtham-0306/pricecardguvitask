import React from 'react';

export default function Card(props) {



if(props.Subdomain.availablity){





}



  
var avail =<i class="fa fa-check" aria-hidden="true"></i>;
var notvail = <i class="fa fa-times" aria-hidden="true"></i>;


  return ( 
    <div className="containermain">
      <div className="box">
        <div className="head">
          
          <h5>
         
            {props.ispaid}

            </h5>

          <h3>{props.price}</h3>

          
        </div>
        <div className="bodyy">
          <ul>
            <li style={{color : props.userlimit.availablity ? "black" : "lightgray"}}>{props.userlimit.availablity ?  avail  : notvail}{props.userlimit.value}</li>
            <li style={{color : props.storage.availablity ? "black" : "lightgray"}}>{props.storage.availablity ? (avail ) : notvail} {props.storage.value}</li>
            <li style={{color : props.publicproject.availablity ? "black" : "lightgray"}}> {props.publicproject.availablity ? avail : notvail}{props.publicproject.value}</li>
            <li style={{color : props.Access.availablity ? "black" : "lightgray"}}>{props.Access.availablity ? avail : notvail}{props.Access.value}</li>
            <li style={{color : props.privateproject.availablity ? "black" : "lightgray"}}> {props.privateproject.availablity ? avail : notvail}{props.privateproject.value}</li>
            <li style={{color : props.Phonesupport.availablity ? "black" : "lightgray"}}>{props.Phonesupport.availablity ? avail : notvail}{props.Phonesupport.value}</li>
            <li style={{color : props.Subdomain.availablity ? "black" : "lightgray"}}>{props.Subdomain.availablity ?  avail : notvail}{props.Subdomain.value}</li>
            <li style={{color : props.Monthlystatusreport.availablity ? "black" : "lightgray"}}>{props.Monthlystatusreport.availablity ? avail : notvail}{props.Monthlystatusreport.value}</li>
          </ul>
          <div className="buttonclass">
            <button type="button" className="btn btn-primary">Button</button>
         

         
         
          </div>
        </div>
      </div>
    </div>
  
     );
}
