import { ref } from "vue"
import env from '@/.env';


let error =ref('')
let movieData =ref([])
let getMovie =(search)=>{
    fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search}`).then((response)=>{
        
        return response.json() 
    }).then((data)=>{
       if(search !== ""){
        movieData.value =data.Search
        console.log(movieData.value)
       }
       
    }).catch((err)=>{
        console.log(err)
        error.value =err
    })
}

let getData =()=>{
   return {getMovie,error,movieData}
}

export default getData





