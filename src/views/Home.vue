<template>

  <div class="home w-5" v-responsive>
    <HelloWorld msg="Welcome" />
    <h1>Welcome</h1>

        <div v-responsive >

          <p> Thank you for visiting!</p>
          <p> <em>∃ P=(p1​,p2​,…,pn​) </em> <br />

           <br />There exists a collection Projects here<br />
          <br />
          <br />If you want to find out how to get started in the exciting field of Computer Science, go here: <br />
          <br />
          <a href="https://www.uwp.edu/learn/programs/computersciencemajor.cfm" target="new">https://www.uwp.edu/learn/programs/computersciencemajor.cfm</a> <br />
          <br />Already have your degree? Consider upgrading your skills to meet today's challenges in Technology! Read more here:<br />
          <br /><a href="https://www.uwp.edu/learn/programs/mscis.cfm" target="new">https://www.uwp.edu/learn/programs/mscis.cfm</a> <br />
          <br />Our region is growing as a technology, AI, and Data Centers are currently being built! <br />
          <br />Earn your degree at UW-Parkside and gain the skills needed for tomorrow's workforce! <br />
          <br />
          <br />If you want to chat, that's cool too. Use the nifty contact form. <br />
          <br />- Anthony -
          </p>
          
        </div>


<div class = "w-5" v-responsive>
    <img src="../assets/study.jpg" height=80% width=80% >
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
