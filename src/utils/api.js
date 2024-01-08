import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";


const headers={
    Authorization:"bearer "+ "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGIyZmUzNjRiZDdjODUwNTFlMWVmYzIxODQ3Yjg2YiIsInN1YiI6IjY1OThiMTExODliNTYxMDE0OWFiOWNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwgbMzvWz_1vOouC0KJH15DgIJf3mpngffV5SbdTLnA"
}
export const fetchData=async(url,params)=>{
   try{
      const {data}=await axios.get(BASE_URL+url,{headers,params})
      return data;
   }catch(e){
    console.log(e)
    return e;
   }
}