<template>
    <div class="bg-color flex text-white" :style="{'min-height':'100vh'}">
       
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
                    <section class="md:w-10/12 w-11/12 mx-auto mt-20 mb-10 flex items-center md:flex-row flex-col" >

                        <div class="md:w-1/2 w-2/3 my-2 mx-auto">
                                <img src="@/assets/img/5.png" alt="" class="sm:w-10/12 w-full mx-auto h-80">
                        </div>

                        <div class="md:w-1/2 w-10/12 text-center">

                                <h2 class="lg:text-5xl text-4xl font-medium md:mt-auto mt-5 mb-8">
                                    Concepion de site web 
                                </h2>

                                <p>
                                    Nous mettons a votre service notre expertise dans le domaine de developpement web pour vous aidez à decupler votre potentiel, 
                                    en mettant en ligne vos services et en vous donnant une meilleur images a traverse la realisation de plateform 
                                    professionnelle  
                                </p>

                        </div>

                    </section>
                </slide-item>

                <slide-item :index="1">
                    <section class="md:w-10/12 w-11/12 mx-auto mt-20 mb-10 flex items-center md:flex-row flex-col" >

                        <div class="md:w-1/2 w-2/3 my-2 mx-auto">
                                <img src="@/assets/img/mobile_app.png" alt="" class="sm:w-10/12 w-full mx-auto h-80">
                        </div>

                        <div class="md:w-1/2 w-10/12 text-center">

                                <h2 class="lg:text-5xl text-4xl font-medium mb-8">
                                    Creation d'applications Mobile 
                                </h2>

                                <p>
                                    Pour ameliorer d'avantage l'expérience de vos clients ou de votre public nous pouvons accompagner votre site web
                                    - si vous en avez - d'une application mobile selon votre demande  
                                </p>

                        </div>

                    </section>
                </slide-item>

                <slide-item :index="2">
                    <section class="md:w-10/12 w-11/12 mx-auto mt-20 mb-10 flex items-center md:flex-row flex-col" >

                        <div class="md:w-1/2 w-2/3 my-2 mx-auto">
                                <img src="@/assets/img/4.png" alt="" class="sm:w-10/12 w-full mx-auto h-80">
                        </div>

                        <div class="md:w-1/2 w-10/12 text-center">

                                <h2 class="lg:text-5xl text-4xl font-medium mb-8">
                                    Maintenance 
                                </h2>

                                <p>
                                    Vos sites web et applications mobile déjà existantent, 
                                    peuvent également bénéficier de nos services de maintenance 
                                </p>

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