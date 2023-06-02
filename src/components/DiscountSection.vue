<template>
    <section id="discounts">
        <v-overlay absolute>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <v-row align="center" justify="center">
                        
                            <v-col cols="12" sm="10" class="white--text text-left">
                                <h1 class="font-weight-light display-2 mb-2">{{title}}</h1>
                                <h1 class="font-weight-light mb-3">
                                    At Storage Times we offer:
                                </h1>
                                <v-row>
                                    <v-col cols="12" 
                                        class="d-flex align-center"
                                        v-for="(deal, i) in deals"
                                        :key="i">
                                    
                                        <p class="text-justify mb-0">
                                            {{ deal }}
                                        </p>
                                    </v-col>
                                </v-row>
                                <v-btn v-bind="size" rounded outlined color="white" class="mt-6" @click="$vuetify.goTo('#contact')">
                                    Request a quote today!
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-overlay>
    </section>
</template>

<script>
export default {
    name: "Discount",
    data() {
        return {
            title: "Ask us about our Special Pricing and Discounts",
            deals: [
                "SPECIAL PRICING with one year rental including OneMonth Free.",
                "Special Discounts for Military, Veterans, & First Responders"
            ]
        }
    }
}
</script>

<style scoped>
#discounts {
  background-image: url("~@/assets/img/home/discounts_background.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}
#discounts .v-overlay__scrim{
    opacity: .9!important;
}
#discounts .container,
#discounts .row {
  height: 100%;
}
</style>