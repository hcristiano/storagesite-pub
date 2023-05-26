<template>
    <section class="py-8" id="contact">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row justify="center">
                        <v-col cols="12" sm="5">
                            <h1 class="font-weight-light display-1">Contact Us</h1>
                            <h3 class="font-weight-light mt-3">
                                Interested in renting one of our units? Want to know about the different military and first responder discounts we offer?
                                
                            </h3>
                            <h3 class="font-weight-light mt-3">
                                Contact us today and find out!
                            </h3>
                            <h3 class="font-weight-light mt-3">
                                Phone: <a class="contact--text" :href="'tel:' + contact.phone">{{ contact.phone }}</a>
                            </h3>
                            <h3 class="font-weight-light">
                                Email: <a class="contact--text" :href="'mailto:' + contact.email">{{ contact.email }}</a>
                            </h3>
                        </v-col>
                        <v-col cols="12" sm="7">
                            <GmapMap
                                :center='center'
                                :zoom='12'
                                style='width:100%;  height: 400px;'
                                >
                                <GmapMarker
                                    :key="index"
                                    v-for="(m, index) in markers"
                                    :position="m.position"
                                    @click="center=m.position"
                                />
                            </GmapMap>
                            <!-- <v-form ref="form" v-model="form.valid" :lazy-validation="form.lazy">
                                <v-text-field v-model="form.name" :rules="form.nameRules" label="Name" required></v-text-field>

                                <v-text-field v-model="form.email" :rules="form.emailRules" label="Email" required></v-text-field>

                                <v-textarea v-model="form.textArea" :rules="form.textAreaRules" label="Message" required />

                                <v-btn :disabled="!form.valid" color="primary" :dark="form.valid" rounded block class="mt-3"
                                    @click="submit">
                                    Enviar
                                </v-btn>
                            </v-form> -->
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

export default {
    name: "Contact",
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
                email: "storagetime@outlook.com",
                phone: "203-467-2761"
            },
            form: {
                valid: true,
                name: "",
                nameRules: [
                    (v) => !!v || "Name is required.",
                    (v) => (v && v.length >= 6) || "Name needs 6 or more characters",
                ],
                email: "",
                emailRules: [
                    (v) => !!v || "Email is required.",
                    (v) => /.+@.+\..+/.test(v) || "Provide a valid email.",
                ],
                textArea: "",
                textAreaRules: [
                    (v) => !!v || "Message is required.",
                    (v) => (v && v.length >= 10) || "Minimum of 10 characters",
                ],
                lazy: false
            }
        }
    },
    methods: {
        submit() {
            
        }
    }
};
</script>
