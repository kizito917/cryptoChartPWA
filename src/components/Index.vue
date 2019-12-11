<template>
    <div class="main-body">
        <div class="content-area">
             <h5>{{ h5FromState }}</h5>
             <p>Welcome to our chart analysis web app <br> where you can track all prices of Crypto coins</p>
             <div class="row" id="icons-area">
                 <div class="col-md-4">
                     <img src="../assets/btc.png">
                 </div>
                 <div class="col-md-4">
                     <img src="../assets/btcash.png">
                 </div>
                 <div class="col-md-4">
                     <img src="../assets/eth.jpg">
                 </div>
             </div>
             <v-btn class="primary" id="btn"><router-link to="/crypto_price" class="trigger-link">Get started</router-link></v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            h5FromState: this.$store.state.indexPageTitle
        }
    }
}
</script>

<style scoped>
    .main-body{
        background-image: url('../assets/bg1.jpg');
        background-size: cover;
    }

    .content-area {
        margin-top: 200px;
        text-align: center;
        background-color: whitesmoke;
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
        border-radius: 7px;
        margin-bottom: 165px;
    }

    @keyframes test {
        0%{color: green; top: 0px;}
        25%{font-style: italic; color: blue; top: 20px;}
        50%{color: black; top: 40px;}
        75%{color: green; top: 30px;}
        100%{color: blue; top: 20px;}
    }

    h5 {
        font-size: 25px;
        animation-name: test;
        animation-duration: infinite;
        padding-top: 20px;
        letter-spacing: 0.1em;
    }

    #icons-area {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #btn {
        margin-bottom: 20px;
        -webkit-transition: width 2s, height 2s; /* Safari */
        transition: width 2s, height 2s;
    }

    .trigger-link {
        color: #fff;
        text-decoration: none;
    }

    @media screen and (max-width: 780px) {
    .content-area {
        margin-top: 50px;
        text-align: center;
        background-color: whitesmoke;
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        border-radius: 7px;
        margin-bottom: 55px;
    }
}
</style>