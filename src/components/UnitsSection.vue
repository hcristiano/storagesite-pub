<template>
    <section id="units" class="pb-8">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-card style="width: 100%">
                        <h1 class="text-center pt-6 font-weight-light display-2">{{title}}</h1>
                        <v-divider class="my-6"></v-divider>
  
                        <v-row class="text-center">
                                <v-col class="col-12 col-sm-6 col-md-6" >
                                    <div class="flex-center">
                                        <v-card-text>
                                            <div class="flex-center">
                                                <div class="circle1">
                                                    <div class="circle2">
                                                        <v-img src="~@/assets/icons/home/warehouse-sm.svg"></v-img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text--disabled text-uppercase text-h5 my-2">5 ft</div>
                                            <v-divider class="my-2" />
                                            <div class="text-uppercase blue--text">We offer three different 5 foot sizes</div>
                                            <v-divider class="my-2" />
                                            <div class="text-uppercase blue--text">
                                                5x5 | 5x10 | 5x20
                                            </div>
                                            <v-divider class="my-2" />
                                    
                                            <v-btn v-bind="size" rounded outlined color="blue" class="mt-6" @click="$vuetify.goTo('#contact')">
                                                {{ button_title }}
                                            </v-btn>
                                        </v-card-text>
                                        <v-divider style="margin-right: -23px" vertical
                                            v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                                    </div>
                                    <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
                                </v-col>
                                <v-col class="col-12 col-sm-6 col-md-6" >
                                    <div class="flex-center">
                                        <v-card-text>
                                            <div class="flex-center">
                                                <div class="circle1">
                                                    <div class="circle2">
                                                        <v-img src="~@/assets/icons/home/warehouse-lg.svg"></v-img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text--disabled text-uppercase text-h5 my-2">10 ft</div>
                                            <v-divider class="my-2" />
                                            <div class="text-uppercase blue--text">We offer five different 10 foot sizes</div>
                                            <v-divider class="my-2" />
                                            <div class="text-uppercase blue--text">
                                                10x10 | 10x15 | 10x20 | 10x25 | 10x30
                                            </div>
                                            <v-divider class="my-2" />
                                    
                                            <v-btn v-bind="size" rounded outlined color="blue" class="mt-6">
                                                {{ button_title }}
                                            </v-btn>
                                        </v-card-text>
                                        <v-divider style="margin-right: -23px" vertical
                                            v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                                    </div>
                                    <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
                                </v-col>
                            
                              
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        
        <div class="svg-border-rounded text-light">
   
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
                <path
                    d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>
        </div>
    </section>
</template>
<script>
export default {
    name: "Units",
    data() {
        return {
            title: "Unit Sizes",
            button_title: "Request a quote today!",
            plans: [
                {
                    title: "5x5",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "5x10",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "5x20",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "10x10",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "10x15",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "10x20",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "10x25",
                    size: "",
                    img: "",
                    features: []
                },
                {
                    title: "10x30",
                    size: "",
                    img: "",
                    features: []
                }
            ]
        }
    },
    computed: {
        size() {
            const size = { md: "large", xl: "x-large" }[
                this.$vuetify.breakpoint.name
            ];
            return size ? { [size]: true } : {};
        }
    },
};
</script>
<style lang="scss">
$main_color: #283e79;

ul {
    font-size: 13px;
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;

    li {
        list-style: none;
        position: relative;
        padding: 0 0 0 20px;
    }

    li {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 5px;
            width: 10px;
            height: 10px;
            background-color: $main_color;
            border-radius: 50%;
            -moz-border-radius: 50%;
            -webkit-eeborder-radius: 50%;
        }
    }
}
</style>

<style scoped>
.header {
    background-color: #283e79;
    color: white;
}

.circle1 {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background-color: #f0f8ff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle2 {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: #e0effc;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.svg-border-rounded svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #f4f7f5;
    z-index: -1;
}

#units {
    z-index: 0;
}

.content {
    z-index: 1;
}

svg {
    overflow: hidden;
}

section {
    position: relative;
}
</style>
