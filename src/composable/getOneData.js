import env from "@/.env";
import { ref } from "vue"


let oneData =ref([]);
let error =ref("");

let getOneMovie =(id)=>{
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=${env.apikey}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        oneData.value =data
       console.log(oneData.value)
    }).catch((err)=>{
        console.log(err)
        error.value =err
    })
}



let getOneData =()=>{
return {getOneMovie,oneData,error}
}

export default getOneData

