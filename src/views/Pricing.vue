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
  
  <span v-if="steps.photos==0"> <div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  
  <span v-if="step=='pricing'"><div class="ab p-2 mt-1">Pricing</div></span>
  
  <span v-if="steps.booking==1"> <div class="p-2 mt-1" style="border:1px solid black;"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class="bgbasic p-2 mt-1"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
 
</div>
</div>
			
		</div>
	
</div>
<div class="col-md-6  pb-3 pl-2">
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex align-items-start">
      <h4>Base price</h4>
    </div>
    <div class="col-md-6">
   <label>Nightly pricing</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="price" required>
 </div>
    </div>
    <div class="col-md-6">
    <label for="inputState" class="form-label">currency_code</label>
    <select id="inputState" class="form-select"  v-model="currency_code" required>
       <option value="USD">USD</option>
       <option value="GBR">GBR</option>
       <option value="EUR">EUR</option>
       <option value="AUD">AUD</option>
       <option value="SGD">SGD</option>
       <option value="SEK">SEK</option>
       <option value="DKK">DKK</option>
       <option value="MXN">MXN</option>
    </select>
    </div>

  </div>
  <div class="mt-5">
  </div>
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex align-items-start">
      <h4>Additional Pricing Options</h4>
    </div>
   <div class="col-md-6">
  <label>Cleaning fee</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="cleaning_fee">
 </div>
  <label>Security deposit</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="security_fee">
 </div>
 </div>
    <div class="col-md-6">
    <label>Additional Guest</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="guest_fee">
 </div>
 <label>Weekend pricing</label>
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="weekend_price">
 </div>
 </div>

  </div>
  <div class="d-flex justify-content-between mt-3">


  <div>
    <router-link :to="{ path: '/photo'+this.$route.params.id }" class="btn btn-info mt-4">Back</router-link>
  </div>

  <div>
  <button type="submit" class="btn btn-info mt-4">Next</button>
  </div>


  </div>
</div>

<div class="col-md-2">
<div class="container">
	
</div>
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
      weekend_price:'',
      guest_fee:'',
      security_fee:'',
      cleaning_fee:'',
      currency_code:'',
      price:'',
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
            "/pricing",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.price=res.data.data.pricing.price;
            this.currency_code=res.data.data.pricing.currency_code;
            this.cleaning_fee=res.data.data.pricing.cleaning_fee;
            this.guest_fee=res.data.data.pricing.guest_fee;
            this.weekend_price=res.data.data.pricing.weekend_price;
            this.security_fee=res.data.data.pricing.security_fee;
            console.log(this.steps);
        });
    },
    add() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/pricing",
          
          { 

        price:this.price,
        currency_code:this.currency_code,
        cleaning_fee:this.cleaning_fee,
        guest_fee:this.guest_fee,
        security_fee:this.security_fee,
        weekend_price:this.weekend_price
         
         },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
        res.data
        console.log(res.data);
        this.$router.push(`/booking${res.data.data.id}`);
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