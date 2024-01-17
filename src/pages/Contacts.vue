<script>
import Loading from './Loading.vue';

export default {
  name: "Contacts",
  components:{
    Loading,
  },

  data(){
    return{
      isLoading: true,
    }
  },

  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 1500)
  },


};
</script>

<template>
  <Loading v-if="isLoading" />
  <div class="cont_titles">
    <h5>Contact Us</h5>
    <h1>How to Reach Us</h1>
    <p>We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
  </div>

  <!-- <div class="shape-">
    <img src="../assets/shape-top.png" alt="##">
  </div> -->
  <div class="big_cont">


    <div class="conteiner_wrapper">

      <div class="container_left">

        <div class="contenitore_comp_scheda">
          <h1>Reach us directly!</h1>
          <div class="contenitore_schede">
            <div class="scheda">
              <div class="cont_loghi">
                <img src="../assets//map.png" alt="">
              </div>
              <div class="estremi">
                <h5>Address</h5>
                <p>9464 Royal Ln. Mesa, New Jersey 45463</p>
              </div>
            </div>
          </div>

          <div class="contenitore_schede">
            <div class="scheda">
              <div class="cont_loghi">
                <img src="../assets//email.png" alt="">
              </div>
              <div class="estremi">
                <h5>Email</h5>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="contenitore_schede">
            <div class="scheda">
              <div class="cont_loghi">
                <img src="../assets//phone.png" alt="">
              </div>
              <div class="estremi">
                <h5>Phone:</h5>
                <p>{406} 555-0120</p>
              </div>
            </div>
          </div>
          <div class="mod_hr">
            <hr>
          </div>
          <h4>Follow us</h4>

          <div class="menu">
          
          <div class="menu__social">
            <div><i class="fa-brands fa-facebook"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>  
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-whatsapp"></i></div>           
          </div>
  
        </div>
        </div>

        

        
      </div>

      <div class="container_right">

      </div>
    </div>

    
  </div>
  <!-- <div class="shape-">
    <img src="../assets/shape-bottom.png" alt="##">
  </div> -->
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// stili contenitore titoli
.cont_titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  position: relative;
  height: 100%;
}

.shape- img{
  width: 100%;
}
.cont_titles h5{
  color: $blue;
}
.cont_titles h1{
  color: $darkPurple;
}
.cont_titles p{
  color: $darkPurple;
}
.cont_titles p, h1, h5{
  margin: 10px 0;
}

// stile contenitore grande rosa

.big_cont{
  margin: 0 auto;
  width: 85%;
  height: 800px;
  background-color: #ECE4FC;
}

.conteiner_wrapper{
  display: flex;
}
// stili sottocontenitore wrapper
.container_left{
  width: 50%;
  height: 50px;
  // background-color: blue;
}

.container_right{
  width: 50%;
  height: 50px;
  // background-color: red;
}

// stili schede

.cont_loghi{
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  background-color: #ebe5ff;
  border-radius: 50%;
  margin-right: 15px;
}

.scheda{
  background-color: $white;
  width: 100%;
  padding: 7px;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.estremi, h4{
  color: $purple;
}

.estremi h5{
  font-weight: 650;
}

.estremi p{
  font-weight: 550;
}

.contenitore_comp_scheda:first-child{
  margin-top: 150px;
  margin-left: 15px;
  width: 70%;
}

.mod_hr{
  padding-top: 18px;
}

// mod loghi social

.menu__social{
  display: flex;
}

.menu__social div i{
  color: $darkPurple;
}
.menu{
  display: flex;
  align-items: center;
}

.menu__social div{
  border-radius: 100%;
  border: 1px solid $darkPurple;
  cursor : pointer;
  display: flex;
  padding: 5px;
  margin-inline: 5px;
  &:hover{
    background-color: $orange;
    i{
      color: $white;
    }
  }
}
</style>
