<template>
    <section id="about" class="py-5">
        <v-container fluid>
            <v-row align="center" justify="center" class="py-5">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="7">
                            <h1 class="font-weight-light display-2">
                                {{ title }}
                            </h1>
                            <h3 class="font-weight-light mb-3">
                                {{ subtitle }}
                            </h3>
                            <v-row>
                                <v-col cols="12" 
                                    class="d-flex align-center"
                                    v-for="(feature, i) in about_us"
                                    :key="i">
                                    
                                    <v-img
                                        :src="feature.icon"
                                        max-width="60px"
                                        class="mr-4"
                                    />
                                    <p class="text-justify mb-0">
                                        {{ feature.text }}
                                    </p>
                                </v-col>
                            
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="5" class="d-none d-md-flex">
                            <v-img
                                src="@/assets/img/storage_profile.jpg"
                                class="d-block ml-auto mr-auto"
                                max-width="400px"
                            />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            title: "About",
            subtitle: "A family-owned self-storage facility in the heart of East Haven, just minutes from the Connecticut",
            about_us: [
                {
                    icon: require("@/assets/icons/app.svg"),
                    text: "LARGE 1000 – 3000 Sq. Ft Building on Premise, will Sub Divide"
                },
                {
                    icon: require("@/assets/icons/discount.svg"),
                    text: "SPECIAL PRICING with one year rental including OneMonth Free."
                },
                {
                    icon: require("@/assets/icons/protection.svg"),
                    text: "Well Lighted Gated Secure Area with Video Sevellance Cameras"
                },
                {
                    icon: require("@/assets/icons/military.svg"),
                    text: "Special Discounts for Military, Veterans, & First Responders"
                }
            ]
        }
    }
}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
