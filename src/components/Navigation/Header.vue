<template>
    <header class="w-10/12 mt-12 mx-auto font-varela flex justify-between items-center text-white">
            
        <h1 class="text-3xl font-bold">
            <router-link to="/" >L-tech Corp</router-link>
        </h1>
        <!-- 1C055E -->
        <!-- 2A0082 -->
        <!-- 1F1063 -->

        <nav>
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
    </header>
</template>
