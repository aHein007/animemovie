<template>
<div class="search-box container-lg">
    <form @submit.prevent="submit">
        <div class=" container w-100">
        <input type="text" placeholder="Enter movies title" class=" m-auto mb-3 mt-3" v-model="search" >
        <button class="btn btn-success ms-2" >Search</button>
        </div>
    </form>


    
</div>

<div class="movie-list row ">
    <div class="container-md m-3 col-6  col-lg-3  col-md-5 col-sm-5 " v-for="movie in movieData" :key="movie.id">
        <div class="card " style="width:100%;height: 100%;" >
            <img :src="movie.Poster" style="width:100%;height: 150px;object-fit: cover;" class=" card-img-top" alt="...">
            <div class="card-body  rounded-bottom" style="width:100%;height:100%;">
                <h5 class="card-title text-light">{{ movie.Title }}</h5>
                <p class="card-text text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolores </p>
                <router-link :to="{name:'detail'}"  class="btn btn-success">Go somewhere</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'

import getData from "../composable/getData"
export default {
    setup(){
    let search =ref("");
    let {getMovie,error,movieData} =getData()
   
    let submit =()=>{
       getMovie(search.value)
        search.value=""
        
        
    }


    return {
        search,submit,
        getMovie,error,movieData
    }
   }
}
</script>

<style>
input{
    padding: 8px;
    border-radius:10px ;
    border: 1px solid gray;
    width: 50%;
}

img{
    object-fit: cover;
}

.movie-list{
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
   
}

.card-body{
  background-color: rgb(43, 55, 71);
}
</style>