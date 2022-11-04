<template>
<div class="search-box container-lg">
    <form @submit.prevent="submit">
        <div class=" container w-100">
        <input type="text" placeholder="Enter movies title" class=" m-auto mb-3 mt-3" v-model="search" >
        <button class="btn btn-success ms-2" >Search</button>
        </div>
    </form>


    
</div>

<div class="movie-list ">
    <div class="container-md m-3  " v-for="movie in movieData" :key="movie.id">
        <div class="card"  >
            <img :src="movie.Poster"  class="card-img-top" alt="...">
            <div class="type-container">
               <div class="type">
                {{ movie.Type }}
               </div>
            </div>
            <div class="card-body  rounded-bottom" >
                <div class="card-title text-light">{{ movie.Title }}</div>
                <router-link :to="{name:'detail',params:{id:movie.imdbID}}"  class="btn btn-success link">Watch</router-link>
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

.card img{
    object-fit: cover;
    height: 150px;
  
}

.movie-list{
    max-width: 910px;
    display: grid;
   margin: auto;
    grid-template-columns:repeat(auto-fit,minmax(180px,auto));
   
}





.card-body{
height: 150px;
    position: relative;
  background-color: rgb(43, 55, 71);
}

.link{
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin:10px;
}

.type-container{
    position: relative;
    max-width: 20px;
   
    
}

.type{
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 10px 0;
    color: white;
    background-color: #358B77;
    padding: 5px;
}

*{
    scroll-behavior: smooth;
   
}

/* webbit scroll bar start*/

::-webkit-scrollbar{
    display: none;
}
</style>