<template>
  
   <form action="form" @submit.prevent="add()">
    <div class="container">
     <div class="row">
     <div class="col-md-12">
     <div class="form-group">
      
     <div class="mb-3">


  <input type="file" class="form-control"  @change="previewFiles" >
</div>
<div>
 <button type="submit" class="btn btn-primary mt-4"    >  
                submit</button>
</div>
     </div>
     </div>
     </div>


<div class="col-md-2">
	
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
      image:[],
      summary:"",
      step:'',
      steps:'',
    
    };
  },
  mounted(){ 
    this.view();
    
  },
methods: { 
      previewFiles() {
    this.image = this.$refs.myFiles.image
  },
// view() {
//       let user = JSON.parse(localStorage.getItem("user"));
//       axios
//         .get(
//           "https://vrent.techvill.org/vrentapi/api/listing/" +
//             this.$route.params.id +
//             "/photos",
//           {
//             headers: { Authorization: "Bearer " + user.token },
//           }
//         )
//         .then((res) => {
//             this.step=res.data.data.step;
//             this.steps=res.data.data.steps;
      
              
//         });
//     },
    add() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/photos",
          
          { 
           image:this.image,
         
          },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
        
            this.$router.push(`/basic${res.data.data.steps.property_id}`);
          
       
              
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