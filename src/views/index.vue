<template>
    <div :style="{'background-image':'url(\'/img/landing.jpg\')','min-height':'100vh'}" class="cover w-screen flex">
        
        <main class="text-white w-full">

            <vue-header></vue-header>

            <section class="lg:w-10/12 w-11/12 mx-auto mt-20 flex md:flex-row flex-col-reverse">

                <div class="md:w-1/2 w-11/12 mx-auto md:text-left text-center">

                    <h2 class="lg:text-5xl text-4xl font-medium mb-8">
                         Besoin d'un Site Web ou d'une Appli mobile pour votre business ?
                    </h2>

                    <p>
                        Pour vous aidez Bénéficier des avantages de cet ère du numérique nous 
                        conçevons pour vous des site web et des applications mobiles performents et optimsés,
                        qui repondent vos besoin.   
                    </p>

                    <router-link to="/services" class="block md:mx-0 mx-auto w-max px-8 py-2 border-2 rounded-full mt-8 shadow hover:bg-white transition duration-300 hover:text-blue-700">
                        Nos Services
                    </router-link>

                </div>

                <img src="@/assets/img/2.png" alt="" class="md:w-1/2 sm:w-2/3 w-4/5 mb-2 mx-auto">

            </section>

            <footer class="flex w-10/12 mx-auto mt-16 pb-2 justify-end">

                <ul class="flex">

                    <li>
                        <a href="#" class="flex justify-center items-center rounded-full h-10 w-10 border-2 mr-4 hover:bg-white transition duration-300 hover:text-blue-700">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="flex justify-center items-center rounded-full h-10 w-10 border-2 hover:bg-white transition duration-300 hover:text-blue-700">
                            <i class="fa fa-whatsapp"></i>
                        </a>
                    </li>

                </ul>

            </footer>
        </main>
        
    </div>
</template>
<script>
import VueHeader from '@/components/Navigation/Header.vue';

export default {
    components:{
        VueHeader
    }
}
</script>
<style>
.cover{
    background-size: cover ;
}
</style>