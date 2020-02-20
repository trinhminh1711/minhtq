<template>
  <div id="app">
    <hi></hi>
  <content-home></content-home>

  </div>
</template>

<script>
import content_home from "../src/components/content_home.vue"
import home from "../src/components/home.vue";
import carousel from "../src/components/carousel.vue";
import graptext from "../src/components/graptext.vue";
import animate from "../src/components/animate.vue";



export default {
  data() {
    return {
      message: "Hello World",
      show: false,
      count:10,
      b:1

    };
  },
  components: {
    "content-home":content_home,
    hi: home,
    slide: carousel,
    "grap-text": graptext,
    bounce: animate,

  },
  methods: {
      myFunction(callback007) {


    },

    functioncoutn()
    {
      if(this.count<700)
      {
    this.count= this.count+1;
      }

    },
    test()
    {
      console.log(this.b)

    }
  },

 
};
</script>

<style scoped>
#minh
{
  display: none;
      transition: opacity 1s ease-out;


}
#show {
  display: none;
}
.MyClass {
  display: block;
}
.animated {
  animation-fill-mode: forwards;
  animation-duration: 3s;
  animation-iteration-count: 3;
}
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;


  border: 1px solid black;

 

}
</style>