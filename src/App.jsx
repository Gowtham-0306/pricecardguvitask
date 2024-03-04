import React from 'react';
import Card from './assets/components/card';
import './App.css';
var yes = true;
var no = false;

function App() {
  const datas = [
    {
      isPaid: "FREE",
      price: "$0/Month",
      userlimit: { value : "Single User" , availablity : true} ,
      storage: { value : "50GB Storage" , availablity : true} ,
      publicproject:  { value : "Unlimited public projects" , availablity : true},
      Access:   { value : "Community Access" , availablity : true},
      privateproject:   { value : "Unlimited private project" , availablity : false},
      Phonesupport:  { value : "Dedicated phone support" , availablity : false},
      Subdomain: { value : "Free Subdomain" , availablity : false},
      Monthlystatusreport:  { value : "Monthly Status report" , availablity : false}

    },
    {
      isPaid: "PLUS",
      price: "$9/Month",
      userlimit: { value : "5 users" , availablity : true} ,
      storage: { value : "50GB Storage" , availablity : true} ,
      publicproject:  { value : "Unlimited public projects" , availablity : true},
      Access:   { value : "Community Access" , availablity : true},
      privateproject:   { value : "Unlimited private project" , availablity : true},
      Phonesupport:  { value : "Dedicated phone support" , availablity : false},
      Subdomain: { value : "Free Subdomain" , availablity : true},
      Monthlystatusreport:  { value : "Monthly Status report" , availablity : true}

    },
    {
      isPaid: "PAID",
      price: "$49/Month",
      userlimit: { value : "Single User" , availablity : true} ,
      storage: { value : "50GB Storage" , availablity : true} ,
      publicproject:  { value : "Unlimited public projects" , availablity : false},
      Access:   { value : "Community Access" , availablity : true},
      privateproject:   { value : "Unlimited private project" , availablity : true},
      Phonesupport:  { value : "Dedicated phone support" , availablity : true},
      Subdomain: { value : "Free Subdomain" , availablity : true},
      Monthlystatusreport:  { value : "Monthly Status report" , availablity : false}

    }
  ];

  return (
    <section>
      <div className="background">
        <div className="container">
          <div className="row">
         {


datas.map((elem , index) => (
<div className='col-lg-4 col-sm-6'>
<Card 

ispaid = {elem.isPaid}
price = {elem.price}
userlimit = {elem.userlimit}
storage = {elem.storage}
publicproject={elem.publicproject}
Access={elem.Access}
privateproject={elem.privateproject}
Phonesupport={elem.Phonesupport}
Subdomain={elem.Subdomain}
Monthlystatusreport={elem.Monthlystatusreport}













/>
</div>
))











         }
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
