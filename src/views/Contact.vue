<template>
  <div class="contact" v-responsive>
    <h1>Contact</h1>

<div class="center">
               <h4>Contact me</h4>
               <br />
</div>
<div class="center" v-responsive>

            <a href="tel:2626710703"><img src = "../assets/call.png"></a>
</div>
<div class="center" v-responsive>
            <br />
            <p >Thank you for visiting my site and wanting to discuss more!<br />
              I left a few ways to reach me.
              <br /><br />
              Thank you!
              <br /><br />

              Anthony <br /> <br />

              <br />
               <a href = "https://github.com/aiell016" target="new">Github</a> <br />
               <br />

                <a href = "https://www.linkedin.com/in/anthony-aiello-2021" target = "new">Linkedin</a> <br /><br />
                <a href="mailto:anthony2021@aiello.io" target = "new">Email</a><br /><br />

                </p>
   
             </div>

              
    
  </div>
</template>

<script>

export default {
  
  mounted() {
  let linkedinScript = document.createElement('script')
  linkedinScript.setAttribute('src', 'https://platform.linkedin.com/badges/js/profile.js' )
  document.head.appendChild(linkedinScript)
  }
  
}
</script>

<style scoped>

.center {
    display: flex;
    justify-content: center;
    text-align: left;
}

#center {
    display: flex;
    justify-content: center;
    text-align: left;
}

.left {
    justify-content: left;
    text-align: left;
}

.p {
    display: flex;
    justify-content: left;
}

</style>