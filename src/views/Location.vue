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
   <span v-if="steps.basics==1"> <div class=" p-2  mt-1"><router-link :to="{ path: '/basic'+this.$route.params.id }" >Basics</router-link></div></span>
   <span v-else> <div class="bgbasic p-2  mt-1">Basics</div></span>
  <span v-if="steps.description==1"> <div class=" p-2 mt-1"><router-link :to="{ path: '/description'+this.$route.params.id }" >Description</router-link></div></span>
  <span v-else> <div class="bgdescription p-2 mt-1"><router-link :to="{ path: '/description'+this.$route.params.id }" >Description</router-link></div></span>
 <span v-if="step=='location'"><div class="ab p-2 mt-1">Location</div></span>
  <div class="bg p-2 mt-1">Amenities</div>
  <div class="bg p-2 mt-1">Photos</div>
  <div class="bg p-2 mt-1">Pricing</div>
  <div class="bg p-2 mt-1">Bookking</div>
  <div class="bg p-2 mt-1">Calendar</div>
</div>
			</div>
			
		</div>
	
</div>
<div class="col-md-6  pb-3 pl-2">
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex align-items-start">
      <h4>Description</h4>
    </div>
    <div class="mt-3">
   <label class="form-label" for="listingName">
     <h6>Country<span class="text-danger">*</span></h6>
   </label>
   <input type="text" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
    <div class="mt-3">
   <label class="form-label" for="listingName">
     <h6>Address Line 1 <span class="text-danger">*</span></h6>
   </label>
   <input type="text" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
   
    <div class="d-flex flex-row">
    <div class="col-md-5">
    <div>
   <label class="form-label" for="listingName">
     <h6>Address Line 2<span class="text-danger">*</span></h6>
   </label>
   <input type="text" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
    </div>
    <div class="col-md-1">
    </div>
    <div class="col-md-6">
    <div>
   <label class="form-label" for="listingName">
     <h6>City / Town / District <span class="text-danger">*</span></h6>
   </label>
   <input type="text" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
    </div>      
    </div>

<div class="d-flex flex-row">
    <div class="col-md-5">
    <div>
   <label class="form-label" for="listingName">
     <h6>State / Province / County / Region<span class="text-danger">*</span></h6>
   </label>
   <input type="text" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
    </div>
    <div class="col-md-1">
    </div>
    <div class="col-md-6">
    <div>
    
   <label class="form-label" for="listingName">
     <h6>ZIP / Postal Code<span class="text-danger">*</span></h6>
   </label>
   <input type="text" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
    </div>      
    </div>
  </div>
  <div class="d-flex justify-content-between mt-3">
    <div>
      <!-- <button class="btn btn-primary"><a href="/basic:93" style="text-decoration: none;color: white;">Back</a></button> -->
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
     
    step:'',
    steps:'',
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
            "/location",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
           this.step=res.data.data.step,
              this.steps=res.data.data.steps;
            console.log(res.data);
              
        });
    },
//     add() {
//       let user = JSON.parse(localStorage.getItem("user"));
//       axios
//         .post(
//           "https://vrent.techvill.org/vrentapi/api/listing/" +
//             this.$route.params.id +
//             "/description",
          
//           { 
//            name:this.name,
//            summary:this.summary,
//           },
//           {
//             headers: { Authorization: "Bearer " + user.token },
//           }
//         )
//         .then((res) => {
//             res.data
//             this.$router.push(`/location${res.data.data.id}`);
          
       
              
//         });
//     },


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