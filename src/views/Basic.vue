<template>
  <div class="container">
<form @submit.prevent="add()">
  <div class="row mt-5">
	<div class="col-md-1">
		
	</div>
	<div class="col-md-3 ">
		<div class="row">
			<div class="col-md-3">
				
			</div>
			<div class="col-md-9">
  <div class="d-flex flex-column mb-3 justify-content-center text-center">
  
  <span v-if="step=='basics'"><div class="p-2  mt-1 ab">Basics</div></span>
 <span v-if="steps.description==1"><div class="stl p-2 mt-1"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
 <span v-else><div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span> 
 
  
  <span v-if="steps.location==1"><div class="stl p-2 mt-1"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-else><div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>

  <span v-if="steps.amenity==1"><div class="stl p-2 mt-1"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-else><div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  
  <span v-if="steps.photos==0"> <div class="stl p-2 mt-1"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>

  <span  v-if="steps.pricing==1"><div class="stl p-2 mt-1"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>

  <span v-if="steps.booking==1"> <div class="stl p-2 mt-1"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
 

  </div>
	</div>
			
	</div>
	
</div>

<div class="col-md-6 border pb-3">
	<div class="row ">
		<div class="roomsandbeds d-flex align-items-start backgrnd"><h4>Rooms and Beds</h4></div>
		<div class="col-md-6">
    
   <label for="inputState" class="form-label">Bedrooms</label>
    <select id="inputState" class="form-select" v-model="totalbedrooms" required>
       <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="4">5</option>
      <option value="5">6</option>
      <option value="6">7</option>
      <option value="7">8</option>
      <option value="8">9</option>
      <option value="9">10</option>
      <option value="10">11</option>
      <option value="12">12</option>
      <option value="12">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16+</option>
      
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Bed</label>
    <select id="inputState" class="form-select" v-model="totalbed" required>
      
      <option value="0.5">0.5</option>
      <option value="1">1</option>
      <option value="1.5">1.5</option>
      <option value="2">2</option>
        <option value="2.5">2.5</option>
      <option value="3">3</option>
      <option value="3.5">3.5</option>
      <option value="4">4</option>
      <option value=".45">4.5</option>
      <option value="5">5</option>
      
    </select>
  </div>
	</div>
	<div class="row">
		<div class="col-md-6">
   <label for="inputState" class="form-label">Bathrooms</label>
    <select id="inputState" class="form-select" v-model="totalbathroom" required  >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
       <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>    
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Bed Type</label>
    <select id="inputState" class="form-select" v-model="bed_type" required>
      <option  selected v-for="(bedtype,index) in bedtypes" 
      :key="bedtype.id" :value="index" >{{bedtype}}</option>     
    </select>
  </div>
	</div>

<!-- This is second row -->
<div class="row mt-5">
		<div class=" Listings d-flex align-items-start backgrnd"><h4>Listings</h4></div>
		<div class="col-md-6">
    <label for="inputState" class="form-label">Property Type</label>
    <select class="form-select p-1"  v-model="property_type" required>
   

    <option  v-for="(propertyviewlist,index) in propertyviewlists" 
      :key="propertyviewlist.id" :value="index" :selected="property_type==propertyviews.property_type_name">{{propertyviewlist}}</option> 
    
   </select>
    
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Room Type</label>
    <select id="inputState" class="form-select" v-model="space_type" required>
      <option  v-for="(room,index) in rooms" 
      :key="room.id" :value="index" >{{room}}</option>
      
    </select>
  </div>
	</div>
	<div class="row">
		<div class="col-md-6">
   <label for="inputState" class="form-label">Accommodates</label>
    <select id="inputState" class="form-select" v-model="accomodates" required>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
       
      
    </select>
  </div>
  
	</div>
<div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary mt-4"    :disabled="loading">   <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>Next</button>
</div>
        
</div>

<div class="col-md-2">
	
</div>
	
</div>


</form>
  </div>
</template>
<script>

import axios from "axios";

import { WebSocketServer } from 'ws';
export default {
  name: "user",
  data() {
    return {
      totalbed:"",
      totalbathroom:"",
      totalbedrooms:"",
      propertyviews:"",
      accomodates:"",
      propertyviewlists:"",

      bedtype:"",
      rooms:"",
      beds:"",

    
      property_type:"",
      space_type:"",
      bed_type:"",
      step:'',
      steps:'',
      bedtypes:'',


      loading: false,
    };
  },
  mounted(){ 
    this.view();
    this.ws();
  },
  methods:{ 
    ws(){ 
var server = new WebSocketServer();
server.on('connection', function (socket) {
  // Do something and then
 
  socket.close(); //quit this connection
});
    },
    
    view() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/basics",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
          this.propertyviews = res.data.data.property;
          this.propertyviewlists = res.data.data.property_type;
          this.rooms = res.data.data.space_type;
          this.bedtypes = res.data.data.bed_type;
          this.accommodates = res.data.data.accommodates;

          this.totalbedrooms = res.data.data.property.bedrooms;
          this.bed_type = res.data.data.property.bed_type;
          this.totalbed = res.data.data.property.beds;
          this.totalbathroom = res.data.data.property.bathrooms;
          this.property_type= res.data.data.property.property_type,
          this.space_type=res.data.data.property.space_type,

         this.step=res.data.data.step
         this.steps=res.data.data.steps;
        });
    },
    add() {
        this.loading = true;
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/basics",
          
          { 
            
        property_type:this.property_type,
        space_type:this.space_type,
        accommodates:this.accomodates,
        bed_type:this.bed_type,
        bathrooms:this.totalbathroom,
        beds:this.totalbed,
        bedrooms:this.totalbedrooms

          },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.loading = false;
            this.$router.push(`/description${res.data.data.id}`);
          
         // this.$router.push('/description');
 
        }).catch((res) => {
          res.data
          this.loading = false         
        });
    },
 

  }
}
</script>

<style scoped>
.stl{ 
border:1px solid black;

}
.bgg{
font-size: 42px;
color:red;
}
.roomsandbeds{ 
background-color:red
}

.backgrnd{ 
background-color: #EEEEEE;
padding: 5px;
padding-left: 14px;
}
.ab{
background-color:#74992e;
}
.bgcolor{
background-color: #DFDBD2;
border: 1px solid gray;

}
.bgcolor a{
color:#353935;
}
.bgcolor a:hover{ 
text-decoration: none;
color: white;
}
.bgcolor:hover{
background-color: #6C757D;
color: white;
font-size: 18px;
font-weight:bold
}
.roomsandbeds:hover{ 
background-color: #6C757D;
color:white;
}
.Listings:hover{
background-color:#6C757D;
color: white;
}
.bgbasic{
background-color: rgb(199, 183, 183);
}
</style>