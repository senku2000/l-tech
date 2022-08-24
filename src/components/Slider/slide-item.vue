<template>
    <transition :name="`slide-to-${direction}`">
        <div v-show="visible" class="overflow-x-hidden">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {

    props:{
        index: Number
    },

    data(){
        return {
            
        }
    },

    computed: {
       
       visible(){
            return this.index == this.$parent.current_item_index
       },

       direction(){
        return this.$parent.direction
       }

    },

    mounted(){
        console.log(this.index)
    }
}
</script>
<style>
.slide-to-right-leave-active{
    animation: slideLeaveRight 1.5s ;
}
.slide-to-right-enter-active{
    position: absolute;
    left:0;
    top:0;
    animation: slideEnterRight 1.5s ;
}

@keyframes slideLeaveRight {
    
    0%{
        transform: translateX(0);
    }

    100%{
        transform: translateX(-100%);
    }
}

@keyframes slideEnterRight {
    
    0%{
        /* transform: translateX(100%); */
        opacity: 0;
    }

    100%{
        /* transform: translateX(0);    */
        opacity: 1;
    }
}

.slide-to-left-enter-active{
    animation: slideEnterLeft 1.5s ;
}
.slide-to-left-leave-active{
     position: absolute;
    left:0;
    top:0;
    animation: slideLeaveLeft 1.5s ;
}

@keyframes slideEnterLeft {
     0%{
        transform: translateX(-100%);
    }

    100%{
        transform: translateX(0);
    }
}

@keyframes slideLeaveLeft {
     0%{
        /* transform: translateX(100%); */
        opacity: 1;
    }

    100%{
        /* transform: translateX(0);    */
        opacity: 0;
    }
}
</style>