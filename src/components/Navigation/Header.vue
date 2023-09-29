<template>
    <header class="lg:w-10/12 w-11/12 mt-12 mx-auto font-varela flex justify-between items-center text-white">
            
        <h1 class="text-3xl font-bold">
            <router-link to="/" >L-tech Corp</router-link>
        </h1>
        <!-- 1C055E -->
        <!-- 2A0082 -->
        <!-- 1F1063 -->

        <nav class="resp-side-menu" :class="{'resp-side-menu-hidden': !visible, 'resp-side-menu-visible': visible}">
            <button class="fixed h-10 w-10 bg-red-500" @click="toggle_nav_shower()" :style="{top:'0px',left:'0px'}">
                x
            </button>
            <ul class="flex items-center">

                <li class="mx-3">
                    <router-link :to="{name:'home'}">Home</router-link>
                </li>

                <li class="mx-3">
                    <router-link :to="{name:'services'}">Nos services</router-link>
                </li>

                <li class="mx-3">
                    <router-link to="">Nous contactez</router-link>
                </li>

            </ul>
        </nav>


        <button class="btn" @click="toggle_nav_shower()">
            <i class="fa fa-bars"></i>
        </button>
    </header>
</template>
<script>
    export default{
        
        data(){
            return {
                visible: false,
                flag: 'xxxxxxxxxxxxxx'
            }
        },

        methods:{
            toggle_nav_shower(){
                this.visible = !this.visible
            }
        }
    }
</script>
<style>
    .btn{
        display: none;
    }
    @media (max-width:1280px) {
        .btn{
            display: block;
        }
         .resp-side-menu{
            transition: transform .3s;
            position: fixed;
            left:0px;
            top:0px;
            z-index: 30;
            background: rgb(42, 0, 130);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
            border-bottom: 3px solid blue;
        }
        .resp-side-menu-hidden{
            transform: translateX(-130%);
        }
        .resp-side-menu-visible{
            transform: translateX(0%);
        }

    }
</style>