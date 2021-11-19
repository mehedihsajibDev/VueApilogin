<template>
    <div class="container">
    <div class="row mt-5">
    <div class="">
    </div>
    <div class="col-md-12">
    <div class="row">
    <div class="d-flex justify-content-between py-3" style="background-color:#EEE">
    <h4 class="text-muted">Listing</h4>
    <div class="text-dark">
    Sort By
    <select v-model="status" name="" id="" class="p-2" @change.prevent="alert()"> 
    <option value="1">All</option>
    <option value="2">Not All</option>
    </select>                   
    </div>
    </div>
    </div>
    <div v-for="(item,index) in property_address.data" 
      :key="item.id" :value="index">
    <div class="row border p-2 mt-5">
    <div class="col-md-3" >
  <img :src="item.cover_photo" class="img-fluid  h-100 w-100"  alt="nothing">
    </div>
    <div class="col-md-6 ">
    <div> 
    <h3><router-link :to="{ path: '/singlelist'+item.id }" style="text-decoration:none;">{{item.name}}</router-link></h3>
    <p><i class="fa fa-map-marker p-1"></i>Dhaka,bangladesh</p>
    <div class="d-flex justify-content-between">
    <p><i class="fa fa-star text-success p-1"></i>0(0)</p>
     <h4><i class="fa fa-dollar"></i>200/night</h4>
    </div>
    <div class="d-flex justify-content-start">
    <div>
   <p class="border p-1 px-2"><i class="fa fa-bed text-muted"></i>{{item.beds}}</p>
    </div>
    <div>
    <p class="border p-1 px-2 mx-1"><i class="fa fa-users text-muted"></i>8 Guests</p>
    </div>
    <div>
   <p class="border p-1 px-2"><i class="fa fa-bath text-muted"></i>{{ item.bathrooms }}</p>
    </div>
    </div>
 </div>
    </div>

    <div class="col-md-3">
    <div class="d-flex justify-content-center">
    <div class="form-check form-switch ">
  <input class="form-check-input" type="checkbox"    id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</div>
    </div>
    <div class="d-flex justify-content-end">
    <p><i class="fa fa-edit"></i>Manage Listing and calendar</p>
    </div>
    </div>
    </div>
    </div>

    </div>
    </div>
    <div class="col-md-1">

    </div>
      <pagination :data="property_address" :limit="limit"  @pagination-change-page="getPaginateList">
             <span slot="prev-nav">&lt; Previous</span>
             <span slot="next-nav">Next &gt;</span>
           </pagination>
 
    </div>
    
   
</template>
<script>

import axios from "axios";
export default{
     name:"users",
    data(){ 
        return{ 
       images:"",
       status:"",
       property_address:{},
        };
    },
       props:{
             limit: {
               type: Number,
               default: 2
           }
        },
    mounted(){
        this.view();
        this.getPaginateList();
    },
    methods:{ 
     view() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get("https://vrent.techvill.org/vrentapi/api/properties", {
          headers: {Authorization:"Bearer "+ user.token },
        })
        .then((res) => {
          res.data
          console.log(res.data);
          this.property_address=res.data.data.properties;
          
        });
    },
    getPaginateList(page = 1){
       let user = JSON.parse(localStorage.getItem("user"));
              axios.get('https://vrent.techvill.org/vrentapi/api/properties?page=' + page,{
          headers: {Authorization:"Bearer "+ user.token },
        }).then(response => {
                    response.data
                   this.property_address=response.data.data.properties;
              });
            },
            alert(){
              alert(this.status);
            }
    }
    
}
</script>
<style scoped>

</style>