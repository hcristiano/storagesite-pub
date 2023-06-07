<template>
    <section class="py-8" id="contact">
        <v-container fluid class="p-4">
            <v-row align="center" justify="center" class="py-4 text-center">
                <v-col cols="12">
                    <h1 class="font-weight-light display-1">Contact Us</h1>
                    <h4 class="font-weight-light mt-3">
                        Interested in renting one of our units? Want to know about the different military and first responder discounts we offer?
                        
                    </h4>
                    <h4 class="font-weight-light mt-3">
                        Contact us today and find out!
                    </h4>
                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="py-4">
                <v-col cols="10">
                    <v-row justify="center">
                        <v-col cols="12" sm="5">
                        
                            <contactform/>
                        </v-col>
                        <v-col cols="12" sm="7">
                            <v-row>
                                <v-col cols="12">
                                    <GmapMap
                                        :center='center'
                                        :zoom='12'
                                        style='width: 100%;  height: 400px;'
                                        >
                                        <GmapMarker
                                            :key="index"
                                            v-for="(m, index) in markers"
                                            :position="m.position"
                                            @click="center=m.position"
                                        />
                                    </GmapMap>
                                </v-col>
                            </v-row>
                            <v-row align="start" justify="center" class="text-center">
                                <v-col cols="12" sm="4">
                                    <v-btn
                                        class="ma-2"
                                        color="blue-grey darken-2"
                                        fab
                                        dark 
                                        target="_blank"
                                        :href="'https://www.google.fr/maps/place/' + contact.address.address1 + ', ' + contact.address.city + ', '  + contact.address.state + ', ' + contact.address.zip"
                                        >
                                        <v-icon dark>
                                            mdi-map-marker
                                        </v-icon>
                                    </v-btn>
                                    <p class="font-weight-light">
                                        <a class="contact--text" 
                                        :href="'https://www.google.fr/maps/place/' + contact.address.address1 + ', ' + contact.address.city + ', '  + contact.address.state + ', ' + contact.address.zip"
                                        target="_blank">
                                            444 Short Beach Rd,
                                            <br/>
                                            East Haven, CT 06512
                                        </a>
                                    </p>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-btn
                                        class="ma-2"
                                        fab
                                        color="blue-grey darken-2"
                                        dark
                                        :href="'tel:' + contact.phone"
                                        >
                                        <v-icon dark>
                                            mdi-phone
                                        </v-icon>
                                    </v-btn>
                                    <p class="font-weight-light">
                                        <a class="contact--text" :href="'tel:' + contact.phone">{{ contact.phone }}</a>
                                    </p>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-btn
                                        class="ma-2"
                                        color="blue-grey darken-2"
                                        fab
                                        dark
                                        :href="'mailto:' + contact.email"
                                        >
                                        <v-icon dark>
                                            mdi-email
                                        </v-icon>
                                    </v-btn>
                                    <p class="font-weight-light">
                                        <a class="contact--text" :href="'mailto:' + contact.email">{{ contact.email }}</a>
                                    </p>
                                </v-col>
                            </v-row>
                            
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <div class="svg-border-waves text-white">
            <v-img src="~@/assets/img/borderWavesBlue.svg" />
        </div>
       
    </section>
</template>

<style scoped>
#contact {
    background-color: #f4f7f5;
}

.svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
}
</style>

<script>
// import {db} from '@/main'
import contactform from "./contact/ContactForm.vue"
import emailjs from 'emailjs-com';
export default {
    name: "Contact",
    components: {
        contactform
    },
    data() {
        return {
            center: { 
                lat: 41.265537903, 
                lng: -72.87044635 
            },
            markers: [
                {
                    position: {
                        lat: 41.26553790315802, 
                        lng: -72.87044635122702
                    }
                }
            ],
            places: [],
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
            
        }
    },
    methods: {
        
    }
};
</script>
