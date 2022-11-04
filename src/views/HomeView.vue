<template>
  <div class="home">
   
    <div class="image-body">
      <ImageBody></ImageBody>
    </div>

    <div class="search">
      <SearchBar></SearchBar>
    </div>

  </div>
</template>

<script>




import SearchBar from '../components/SearchBar'
import ImageBody from '../components/ImageBody'


export default {
  components: {
    
    SearchBar,
    ImageBody,  },
  name: 'HomeView',


  
}
</script>
