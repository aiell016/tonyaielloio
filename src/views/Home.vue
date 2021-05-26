<template>

  <div class="home w-5" v-responsive>
    <HelloWorld msg="Welcome" />
    <h1>Welcome</h1>

        <div v-responsive >

          <p> <br />Thank you for visiting my portfolio site.
           <br />There exists a collection of live web-based projects here.<br />
          <br />
          <br />If you're interested in more, feel free to send a message.
          <br />Thank you for your visit!
          <br />- Anthony -
          </p>
          
        </div>


<div class = "w-5" v-responsive>
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
