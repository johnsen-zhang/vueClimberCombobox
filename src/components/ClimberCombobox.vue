<template>
    <div class="clearfix combobox-box">
        <label>{{title}}</label>
        <div class="combobox">
            <input class="combobox-input" :readonly="!search" @click="onClickInput" :placeholder="placeholder" v-model="val" @input="changeVal"/>
            <div class="combobox-right-sign" @click="onClickInput"></div>
            <ul v-show="showList" class="combobox-list" :style="listStyle">
                <li v-if="haveAllItem" @click="onClickAllItem"><label>全部</label></li>
                <slot name="comboboxItems"></slot>
                <li v-if="haveMoreItem" @click="onClickMoreItem"><label>...</label></li>
            </ul>
        </div>
    </div>  
</template>

<style scoped lang='sass'>
    @import './index.scss'
</style>

<script>
    import Vue from 'vue';

    export default {
        name: 'combobox',
        data (){
            return {
                showList:false,
                currShowState: false,
                listStyle:'',
                val:''
            }
        },
        computed: {
            placeholder (){
                return this.haveAllItem ? '全部' : '请选择'
            }
        },
        props: {
            title: {
                type: String,
                default: '下拉框'
            },
            haveAllItem: {
                type: Boolean,
                default: true
            },
            haveMoreItem: {
                type:Boolean,
                default: false
            },
            search: {
                type: Boolean,
                default: false
            },
            defaultIndex: {
                type:Number,
                default: 0
            }

        },
        created (){
            var that = this;
            // if(window.globalParams.broswer == 'IE'){
            //     this.listStyle = 'width:295px;';
            // }
            if(this.haveAllItem){
                this.onClickAllItem();
            }
            if(this.defaultIndex > 0){
                let that = this;
                setTimeout(function(){
                    that.$emit('default-item',{itemIndex:that.defaultIndex});
                },100);
            }
        },
        methods: {
            currVal (textVal){
                this.val = textVal;
            },
            hideList (){
                this.showList = false;
            },
            onClickAllItem () {
                this.$emit('select-all');
                this.currVal('全部');
                this.hideList();
            },
            onClickMoreItem () {
                this.$emit('select-more');
                this.hideList();
            },
            onClickInput () {
                var that = this;
                setTimeout(function(){
                    that.showList = !that.showList;
                },10);
            },
            changeVal (evt){
                this.$emit('change-val',evt.target.value);
            }
        }
    };
</script>