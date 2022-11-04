<template>
  <div class="container row m-auto" >
    <div class="img-container col-4">
      <img :src="oneData.Poster" alt="">
    </div>
    

    <div class="text-container col-6 text-start">
      <h2 class="title">Title</h2>
      <div class="">Type</div>
      <div class="rating">Rating</div>
      <div class="year">Release year</div>
    </div>
  </div>
</template>

<script>
import getOneData from '@/composable/getOneData';

export default {
  props:[
    "id"
  ],

  setup(props){
    let {getOneMovie,oneData,error}=getOneData()

    getOneMovie(props.id)


    return {getOneData,oneData,error}
  }
}
</script>

<style>
.container{

}

img{

    height: 400px;
}
</style>