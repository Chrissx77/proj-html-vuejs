<script>
import Loading from './Loading.vue';
// import Header from '@/components/Header.vue';

export default {
  name: "Contacts",
  components:{
    Loading,
    // Header,
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
  <!-- <Header /> -->
  <div class="cont_titles">
    <h5>Contact Us</h5>
    <h1>How to Reach Us</h1>
    <p>We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
  </div>

  <div class="big_cont">
    <div class="shape-">
      <img src="../assets/shape-top.png" alt="##">
    </div>


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
                <p>[406] 555-0120</p>
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
        <div class="wrapper_border">

          <div class="wrapper_right">
            <div class="wrapper_us">
              <h1>Contact form</h1>
              <p>Tell us your story and let's make it awesome</p>
            </div>
  
            <div>
              <div class="name">
                <p>NAME</p>
                <input type="text" placeholder="What's your name?">
              </div>
              <div class="email">
                <p>EMAIL</p>
                <input type="email" placeholder="What's your email?">
              </div>
              <div class="number">
                <p>PHONE</p>
                <input type="number" placeholder="your number?">
              </div>
              <div class="message">
                <p>LEAVE A MESSAGE</p>
                <textarea name="message" id="message" cols="10" rows="5" placeholder="Please type your message here..."></textarea>
              </div>
            </div>
          </div>
          <div class="bottone">
            <button type="submit"><b>Request a quote</b></button>
          </div>

        </div>
      </div>
    </div>

    
    <div class="shape-">
      <img src="../assets/shape-bottom.png" alt="##">
    </div>
  </div>

  <!-- creazione sezione (We’re Here to Help) -->

  <div class="menu-container-help">
    <div class="cont_titles">
      <h5>We're Here to Help</h5>
      <h1>Frequently Asked Questions</h1>
      <p>We're always interested in having a chat or discussing your next big project, so drop us a line!</p>
    </div>

    <div class="contenitore_dropdown">
      <h2>How do i know what kind of video i need?</h2>
      <div class="container_plus" onclick="toggleMenu()">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>How long will it take to create an animation video?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>How long do you need for the video creation process?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>Will I take part in the creation process?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>What type / format of animated video can I order?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>What if I don't like what you deliver?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="contenitore_dropdown">
      <h2>Do you currently have career openings?</h2>
      <div class="container_plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  </div>


  <Loading v-if="isLoading" />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

// creazione sezione style (We’re Here to Help)

// .menu-container-help{
//   background-image: url(../assets/circle.png);
//   background-size: cover;
//   height: 100%;
//   width: 100%;
// }

.contenitore_dropdown{
  display: flex ;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contenitore_dropdown h2{
  padding-right: 150px;
  font-size: 25px;
}
.contenitore_dropdown div{
  margin-right: 25px;
}

.container_plus{
  border: solid 1px $purple;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  align-items: center;
  font-size: 25px;
}













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
  height: fit-content;
  background-color: #EBE5FF;
  position: relative;
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
  height:fit-content;
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

// stili input

.name input,
.email input,
.number input,
.message textarea{
  border-radius: 10px;
  height: 50px;
  width: 100%;
  border: solid 2px $lightGray;
  outline: none;
}

.number, .email, .message, .name > p{
  font-weight: 700;
}

.message textarea{
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  border: solid 2px $lightGray;
  outline: none;
}


.name input,
.email input,
.number input{
  margin-bottom: 25px;
}

.wrapper_us{
  margin: 0 auto;
  text-align: center;
  margin-bottom: 25px;
}

.wrapper_right{
  padding-inline: 15px;
}

.wrapper_border{
  border-radius: 30px;
  border: 1px solid $gray;
  margin-right: 10px;
  margin-top: 70px;
  margin-bottom: 15px;
  background-color: #F7F0FE;
}
// stile tasto

.bottone{
  padding: 10px;
  padding-top: 20px;
}

.bottone button{
  width: 100%;
  height: 50px;
  border-radius: 40px;
  border: none;
  background-color: $pink;
  &:hover{
    background-color: #fff;
    border: solid 3px $pink;
  }
}
</style>
