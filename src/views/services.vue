<template>
    <div class="bg-color flex h-screen text-white">
       
       <main class="w-full">
            
            <vue-header></vue-header>

            <section>
               
                <h3 class="relative font-medium font-varela text-4xl text-center mt-16 w-max mx-auto ">
                     <div class="h-16 w-64 dot-cover absolute" :style="{top:'-13px',left:'-18px'}">

                    </div>
                    Nos Services
                </h3>

            </section>

            <slide>

                <slide-item :index="0">
                    <section class="w-10/12 mx-auto mt-20 flex items-center" >

                        <div class="w-1/2">
                                <img src="@/assets/img/3.png" alt="" class="w-10/12 h-80">
                        </div>

                        <div class="w-1/2 text-center">

                                <h2 class="text-5xl font-medium mb-8">
                                    Concepion de site web 
                                </h2>

                                <p>
                                    Nous mettons a votre service notre expertise dans le domaine de developpement web pour vous aidez à decupler votre potentiel, 
                                    en mettant en ligne vos services et en vous donnant une meilleur images a traverse la realisation de plateform 
                                    professionnelle  
                                </p>

                                <!-- <router-link to="/" class="block mx-aut w-max px-8 py-2 border-2 rounded-full mt-8 shadow hover:bg-white transition duration-300 hover:text-blue-700">
                                    Learn more
                                </router-link> -->

                        </div>

                    </section>
                </slide-item>

                <slide-item :index="1">
                    <section class="w-10/12 mx-auto mt-20 flex items-center" >

                        <div class="w-1/2">
                                <img src="@/assets/img/3.png" alt="" class="w-10/12 h-80">
                        </div>

                        <div class="w-1/2 text-center">

                                <h2 class="text-5xl font-medium mb-8">
                                    Creation d'applications Mobile 
                                </h2>

                                <p>
                                    Pour ameliorer d'avantage l'expérience de vos clients ou de votre public nous pouvons accompagner votre site web
                                    - si vous en avez - d'une application mobile selon votre demande  
                                </p>

                                <!-- <router-link to="/" class="block mx-aut w-max px-8 py-2 border-2 rounded-full mt-8 shadow hover:bg-white transition duration-300 hover:text-blue-700">
                                    Learn more
                                </router-link> -->

                        </div>

                    </section>
                </slide-item>

                <slide-item :index="2">
                    <section class="w-10/12 mx-auto mt-20 flex items-center" >

                        <div class="w-1/2">
                                <img src="@/assets/img/3.png" alt="" class="w-10/12 h-80">
                        </div>

                        <div class="w-1/2 text-center">

                                <h2 class="text-5xl font-medium mb-8">
                                    Maintenance 
                                </h2>

                                <p>
                                    Vos sites web et applications mobile déjà existantent, 
                                    peuvent également bénéficier de nos services de maintenance 
                                </p>

                                <!-- <router-link to="/" class="block mx-aut w-max px-8 py-2 border-2 rounded-full mt-8 shadow hover:bg-white transition duration-300 hover:text-blue-700">
                                    Learn more
                                </router-link> -->

                        </div>

                    </section>
                </slide-item>
                
            </slide>
            


       </main>
    </div>
</template>
<script>
import VueHeader from '@/components/Navigation/Header.vue';
import Slide from '@/components/Slider/index.vue'
import slideItem from '@/components/Slider/slide-item.vue';

export default {
    components:{
        VueHeader,
        Slide,
        slideItem
    }
}
</script>
<style>
.bg-color{
    background: rgb(1,40,81);
    background: linear-gradient(328deg, rgba(1,40,81,1) 0%, rgba(2,67,135,1) 44%, rgba(9,47,84,1) 100%);
}
.dot-cover{
  
  background-image: radial-gradient(rgba(255, 255, 255, 0.562) 1px, transparent 0);
  background-size: 10px 10px;
  background-position: -19px -19px;
}
</style>