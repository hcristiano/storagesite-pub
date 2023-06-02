<template>
    <section id="hero">
        <v-parallax src="@/assets/img/home/hero_background.png" height="750">
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="6" xl="8">
                            <h1 class="display-2 font-weight-bold mb-4 " >
                                {{ title }}
                            </h1>
                            <h3 class="font-weight-light">
                                {{ contact.address.address1 }}
                                <br/>
                                {{ contact.address.city }}, {{ contact.address.state }} {{ contact.address.zip }}
                            </h3>
                            <h3 class="font-weight-light">
                                <a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
                            </h3>
                            <h3 class="font-weight-light">
                                <a dark :href="'mailto:' + contact.email">{{ contact.email }}</a>
                            </h3>
                            <v-btn
                                rounded
                                outlined
                                large
                                dark
                                @click="$vuetify.goTo('#contact')"
                                class="mt-5"
                                >
                                    Request a quote today!
                                <v-icon class="ml-2">mdi-arrow-down</v-icon>
                            </v-btn>
                            
                        </v-col>
                        <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <div class="svg-border-waves text-white">
                <v-img src="@/assets/img/home/borderWaves.svg" />
            </div>
        </v-parallax>

        <v-container fluid id="features" class="mt-2">
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="space-around">
                    <v-col cols="12" class="text-center">
                        
                    </v-col>
                    <v-col
                        cols="12"
                        sm="4"
                        class="text-center"
                        v-for="(feature, i) in features"
                        :key="i"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                class="card"
                                shaped
                                :elevation="hover ? 10 : 4"
                                :class="{ up: hover }"
                            >
                                
                                <v-img
                                    :src="feature.img"
                                    max-width="100px"
                                    class="d-block ml-auto mr-auto"
                                    :class="{ 'zoom-efect': hover }"
                                ></v-img>
                                <h1 class="font-weight-regular">{{ feature.title }}</h1>
                                <h4 class="font-weight-regular subtitle-1">
                                {{ feature.text }}
                                </h4>
                            </v-card>
                        </v-hover>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
       
        <div class="svg-border-waves">
            <img src="~@/assets/img/home/wave2.svg" />
        </div>
    </section>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                title: "Storage Times",
                contact: {
                    address: {
                        address1: "444 Short Beach Rd",
                        address2: "",
                        city: "East Haven",
                        state: "CT",
                        zip: "06512"
                    },
                    email: "joash.arduini@att.net",
                    phone: "203-467-2761"
                },
                features: [
                    {
                        img: require("@/assets/icons/home/location.svg"),
                        title: "Convenient Location",
                        text: "Located in the heart of East Haven.",
                    },
                    {
                        img: require("@/assets/icons/home/clock.svg"),
                        title: "24 Hour Access",
                        text: "Open 24 hours a day, 7 days a week!",
                    },
                    {
                        img: require("@/assets/icons/home/warehouse-home.svg"),
                        title: "Various Unit Sizes",
                        text: "We offer 8 different unit sizes.",
                    },
                ],
            };
        },
        watch: {
        
        },
        methods: {
           
        },
    };
</script>

<style lang="scss">
.circle {
    stroke: white;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    -webkit-transition: all 0.5s ease-in-out;
    opacity: 0.3;
    }

</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
