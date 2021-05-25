<template>

  <div class="home" v-responsive>
    <HelloWorld msg="Welcome" />
    <h1>Welcome</h1>

        <div v-responsive >

          <p> <br />Thank you for visiting my site.
           <br /> This is a portfolio website with a collection of live web-based projects.<br />
          <br />Please take a look around and let me know what you think.
          <br />If you're interested in my work, I left a contact page available that you may use.
          </p>
        </div>

        <div v-responsive>

          <p > <br />This site was developed using <a href = "https://vuejs.org" target = "new" >Vue JS</a> and <a href = "https://vuetifyjs.com" target = "new" >Vuetify</a>  
          with <a href = "https://nodejs.org" target="new">Node JS</a>  
          <br />based on a <b>Model - View - Control</b> structure,
          <br /> with a responsive, mobile-friendly design.<br />
          </p>
        </div>

<div v-responsive>
    <img src="../assets/team2.jpg" height=80% width=80% >
</div>

 </div>


</template>


<style scoped>

.home {
  background-size: auto;
  background-repeat: no-repeat;

}

.imageholder {

 height: 600px;
 width: 1100px;

 background-repeat: no-repeat;
}


.p {
    display: flex;
    justify-content: left;
}

.left {
    display: flex;
    justify-content: left;
    text-align: left;
}

</style>
