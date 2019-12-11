<template>
    <div class="main-body">
        <div class="price-area">
            <h4>Trusted Market Price</h4>
            <v-btn class="primary" @click="getBtcPrice"><font-awesome-icon icon="recycle" id="refresh-icon" /><em>Refresh</em></v-btn>
            <div class="row" id="row">
                <div class="col-md-6">
                    <v-card loading>
                        <v-card-title>
                            <div class="row">
                                <div class="col-md-6">
                                    ${{ this.$store.state.btcPrice }} 
                                </div>
                                <div class="col-md-6">
                                    <strong>BTC</strong>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-subtitle>
                            Bitcoin Price
                        </v-card-subtitle>
                        <v-card-text>
                            Prices are determined directly <br>from the cryptocurrency market analysis
                            <font-awesome-icon icon="chart-bar" id="chartBar-icon" />
                        </v-card-text>
                    </v-card>
                </div>
                <div class="col-md-6">
                    <v-card loading shaped>
                        <v-card-title>
                            <div class="row">
                                <div class="col-md-6">
                                    ${{ this.$store.state.ethPrice }}
                                </div>
                                <div class="col-md-6">
                                    <strong>ETH</strong>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-subtitle>
                            Etherum Price
                        </v-card-subtitle>
                        <v-card-text>
                            Prices are determined directly <br>from the cryptocurrency market analysis
                            <font-awesome-icon icon="chart-bar" id="chartBar-icon" />
                        </v-card-text>
                    </v-card>
                </div>
            </div>
            <div class="row" id="row">
                <div class="col-md-6">
                    <v-card loading shaped>
                        <v-card-title>
                            <div class="row">
                                <div class="col-md-6">
                                    ${{ this.$store.state.bchPrice }} 
                                </div>
                                <div class="col-md-6">
                                    <strong>BCH</strong>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-subtitle>
                            Bitcoin Cash Price
                        </v-card-subtitle>
                        <v-card-text>
                            Prices are determined directly <br>from the cryptocurrency market analysis
                            <font-awesome-icon icon="chart-bar" id="chartBar-icon" />
                        </v-card-text>
                    </v-card>
                </div>
                <div class="col-md-6">
                    <v-card loading>
                        <v-card-title>
                            <div class="row">
                                <div class="col-md-6">
                                    ${{ this.$store.state.xlmPrice }}
                                </div>
                                <div class="col-md-6">
                                    <strong>XLM</strong>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-subtitle>
                            Stellar Price
                        </v-card-subtitle>
                        <v-card-text>
                            Prices are determined directly <br>from the cryptocurrency market analysis
                            <font-awesome-icon icon="chart-bar" id="chartBar-icon" />
                        </v-card-text>
                    </v-card>
                </div>
            </div>
            <p id="designBy">Designed and Developed by <a href="https://kizitotech.000webhostapp.com" style="color: #fff;">Brain.js</a></p>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            bitcoinPrice: this.$store.state.btcPrice,
            etherumPrice: this.$store.state.ethPrice,
            bitcoinCashPrice: this.$store.state.bchPrice,
            stellarPrice: this.$store.state.xlmPrice,
            i: '0'
        }
    },
    created() {
        this.$store.dispatch('getBtcPrice')
        setTimeout(() => {
            this.$store.dispatch('getBtcPrice')
        }, 2000);
    },
    methods: {
        getBtcPrice() {
            this.$store.dispatch('getBtcPrice')
        }
    }
}
</script>

<style scoped>
    .main-body{
        background-image: url('../assets/bg1.jpg');
        background-size: cover;
    }

    .price-area {
        margin-top: 40px;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 33px;
    }

    .price-area> h4 {
        text-align: center;
        color: #fff;
        font-size: 25px;
    }

    #row {
        margin-top: 30px;
    }

    #designBy{
        text-align: center;
        margin-top: 40px;
        color: #fff;
    }

    a {
        color: #fff;
        text-decoration: underline;
    }

    #refresh-icon {
        margin-left: 20px;
    }

    #chartBar-icon {
        color: purple;
        font-size: 20px;
    }

    em {
        font-size: 12px;
    }
</style>