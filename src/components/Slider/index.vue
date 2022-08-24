<template>
    <div class="relative">

        <slot>
        </slot>

        <div>
            <button @click="prev()" v-show="current_item_index > 0" class="absolute left-btn btn h-12 w-12 shadow-lg rounded-full border border-blue-900 hover:bg-blue-700 transition duration-300">
                <i class="fa fa-angle-left"></i>
            </button>

            <button @click="next()" v-show="current_item_index < slide_items_len - 1" class="absolute btn right-btn h-12 w-12 shadow-lg rounded-full border border-blue-900 hover:bg-blue-700 transition duration-300">
                <i class="fa fa-angle-right"></i>
            </button>
        </div>

    </div>
</template>
<script>
export default {

    data(){
        return {
            slide_items_len: null,
            current_item_index: 0,
            direction:"to-right"
        }
    },

    mounted(){
        this.slide_items_len = this.$children.length
    },

    methods:{

        next(){
            if(this.current_item_index < this.slide_items_len - 1 ){
                this.direction = "right"
                this.current_item_index++
            }
        },

        prev(){
            if(this.current_item_index > 0 ){
                this.direction = "left"
                this.current_item_index--
            }
        }
    }
}
</script>
<style>
.btn{
    top:0px;
    bottom:0px;
    margin:auto;
    animation: bound 2s infinite;
}

.left-btn{
    left:20px;
    
}

.right-btn{
    right:20px;
}

@keyframes bound {
    0%{
        transform: translateY(0);
    }

    50%{
        transform: translateY(10px);
    }

    100%{
        transform: translateY(0);
    }
}
</style>