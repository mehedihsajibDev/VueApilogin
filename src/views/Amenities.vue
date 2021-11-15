<template>
  
   <form action="form" @submit.prevent="add()">
    <div class="container">
    <div class="mt-5 row">
	<div class="col-md-1">
		
	</div>
	<div class="col-md-3 ">
		<div class="row">
			<div class="col-md-3">
				
			</div>
			<div class="col-md-9">
  <div class="d-flex flex-column mb-3 justify-content-center text-center">
 <span v-if="steps.basics==1">  <div class=" p-2  mt-1" style="border:1px solid black;"> <router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link>
  </div></span>
 <span v-else> <div class="bgbasic p-2  mt-1"><router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link></div></span>
 <span v-if="steps.description==1"><div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
 <span v-else><div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span> 
 <span v-if="steps.location==1"><div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
 <span v-else><div class="bgbasic p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  
  <span v-if="step=='amenities'"><div class="ab p-2 mt-1">Amenities</div></span>
  <span v-if="steps.photos==1"> <div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photos</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photos</router-link></div> </span>
  <span  v-if="steps.pricing==1"><div class=" p-2 mt-1"  style="border:1px solid black;"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>

  <span v-if="steps.booking==1"> <div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  
 
</div>
</div>
</div>
</div>
<div class="col-md-6  pl-2">
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex justify-content-between">
    <div> <h4>Common Amenities</h4></div>

    </div>
    <div class="row">

    <div class="mt-3">
 <div class="form-check" v-for="am in amenities" :key="am.id">
 <div v-if="am.type_id==1">

  <input class="form-check-input" type="checkbox" :value="am.id" v-model="amen" id="flexCheckDefault" name="amenities[]" data-saving="1">
  <label class="form-check-label" for="flexCheckDefault">
    {{am.title}}
  </label>
</div>
</div>
</div>
</div>
<div class="row">
<div><h4>Safety Amenity</h4></div>
<div class="form-check" v-for="am in amenities" :key="am.id">
 <div v-if="am.type_id==2">

  <input class="form-check-input" type="checkbox" :value="am.id" v-model="amen" id="flexCheckDefault" name="amenities[]" data-saving="1">
  <label class="form-check-label" for="flexCheckDefault">
    {{am.title}}
  </label>
</div>
</div>
</div>
</div>
  <div class="d-flex justify-content-between mt-3">
    <div>
      <!--  <router-link :to="{ path: '/basic'+this.$route.params.id }" class="btn btn-primary mt-4">Back</router-link>   <button class="btn btn-primary"><a href="/basic:93" style="text-decoration: none;color: white;">Back</a></button> -->
    </div>
    <div>
   <button type="submit" class="btn btn-primary mt-4">Next</button>
   
    </div>
  </div>
</div>

<div class="col-md-2">
</div>
	
</div>

</div>
    

</form>
</template>
<script>

import axios from "axios";
export default {
  name: "user",
  data() {
    return {
     
      name:"",
      summary:"",
      step:'',
      steps:'',
      amenities:[],
      amen:[],
    
    };
  },
  mounted(){ 
    this.view();
    
  },
 methods: { 

view() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/amenities ",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            console.log(res.data);
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.amenities=res.data.data.amenities;
            //this.amenitiesvmodel=res.data.data.property_amenities;
      
              
        });
    },


    add() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/amenities",
          
          { 
           amenities:this.amen
          },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            res.data
            //this.$router.push(`/location${res.data.data.id}`);
          
       
              
        });
    },
},

}
</script>
<style scoped>
.backgrnd{ 
background-color: #EEEEEE;
padding: 5px;
padding-left: 14px;
}
.RoomsandBeds:hover{ 
background-color: #6C757D;
color:white;
}
.Listings:hover{ 
background-color: #6C757D;
color:white;
}
.bg{ 
background-color: #DFDBD2;
border: 1px solid gray;
}
.ab{
background-color:#74992e;
}
.bg:a{ 
color:#353935;
}
.bg a:hover{
text-decoration:none;
color: white;
}
.bg:hover{
background-color: #6C757D;
color: white;
font-size: 18px;
font-weight: bold;
}
.bgbasic{
background-color: rgb(199, 183, 183);
}
.bgdescription{
background-color: rgb(199, 183, 183);
}
</style>