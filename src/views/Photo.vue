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
  <span v-if="steps.amenity==1"><div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
 <span v-else><div class="bgbasic p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  
  <span v-if="step=='photos'"><div class="ab p-2 mt-1">Photos</div></span>
  <span  v-if="steps.pricing==1"><div class=" p-2 mt-1"  style="border:1px solid black;"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>

  <span v-if="steps.booking==1"> <div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  
 
</div>
</div>
			
		</div>
	
</div>
<div class="col-md-6  pb-3 pl-2">
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex align-items-start">
      <h4>Photos</h4>
    </div>
    <div class="d-flex justify-content-between">

    <div class="mt-3">
<input type="file" class="form-control"  @change="previewFiles" ref="myFiles" >
    </div>
    <div class="mt-3">
    </div>
    
    <div class="d-flex justify-content-between">
  <button type="submit" class="btn btn-primary mt-4"> submit</button>               
    </div>

    </div>

  </div>
  <div class="d-flex justify-content-between mt-3">
    <div>
    <router-link :to="{ path: '/amenities'+this.$route.params.id }" class="btn btn-info mt-4">Back</router-link>
      <!-- <button class="btn btn-primary"><a href="/basic:93" style="text-decoration: none;color: white;">Back</a></button> -->
    </div>
    <div >
   <button type="submit" class="btn btn-info mt-4">Next</button>
   
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
      photos:[],
      summary:"",
      step:'',
      steps:'',
    
    };
  },
  mounted(){ 
    this.view();
    
  },
methods: { 
    previewFiles()
    {
      this.photos[0] = this.$refs.myFiles.photos[0];
    },
view() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/photos",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
      
              console.log(this.steps);
        });
    },
    add() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/photos",
          
          { 

          photos:this.photos[0]
         
         },
          {
            headers: { Authorization: "Bearer " + user.token, "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
        
            this.$router.push(`/price${res.data.data.steps.property_id}`);
          
       
              
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