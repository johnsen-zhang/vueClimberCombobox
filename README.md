# vue-climber-combobox

> 一个基于vue的下拉列表组件 用于PC端

# 父容器传入参数列表：
 参数名 | 参数类型 | 描述 | 默认值 
 :-: | :-: | :-: | :-: 
title | String | 下拉框标题 | 下拉框 
haveAllItem | Boolean | 是否显示全部选项 | true
haveMoreItem | Boolean | 是否显示更多选项 | false
search | Boolean | 是否支持模糊查询 | false
defaultIndex | Number | 默认选中项 | 0

# 函数说明
函数名 | 参数列表 | 描述
:-: | :-: | :-:
currVal | textVal | 设置文本框显示内容
hideList | - | 隐藏下拉列表

# 事件
事件名称 | 描述 | 传递参数列表 | 参数说明
:-: | :-: | :-: | :-:
default-item | 初始化选中默认值选项 | data.itemIndex | 默认选中索引
change-val | 检索内容变更 | data | 检索内容
select-all | 选中全部选项 | - | - 
select-more | 选中更多选项 | - | -

# 插槽
插槽名称 | 插槽说明
:-: | :-:
comboboxItems | 下拉列表选项内容使用li标签

## 如何安装
``` bash
# install dependencies
npm install vue-climber-combobox
```
# 使用示例
``` html
<template>
    ···
    <cb-combobox data-id="cmb1" ref="cmb1" :default-index="c1Default" :search="c1Search" :title="c1Title" :have-all-item="c1ShowAll" :have-more-item="c1ShowMore" v-on:select-all="c1SelectAll" v-on:select-more="c1SelectMore" v-on:change-val="c1ChangeVal" v-on:default-item="c1DefaultItem">
        <li data-item-index="index" slot="comboboxItems" v-for="(item,index) in cmb1Datas" v-show="item.en.indexOf(c1Text) >= 0 || item.cn.indexOf(c1Text) >= 0 || (item.cn + ' : ' + item.en) == c1Text" :key="index" @click="cmb1ItemClick">
          <label>{{item.cn}} : {{item.en}}</label>
        </li>
    </cb-combobox>
    ···
</template>
<script>
    ···
    import CbCombobox from 'vue-climber-combobox'
    export default {
        ···
        data (){
            return {
                c1Search: true,
                c1Title: '下拉框1：',
                c1ShowAll: true,
                c1ShowMore: true,
                c1Text: '',
                c1Default: 1,
                cmb1Datas: [
                    {'cn':'脾气','en':'temper'},
                    {'cn':'发脾气','en':'lose one\'s temper'},
                    {'cn':'出席，参加','en':'attend'},
                    {'cn':'出席人数，考勤','en':'attendance'},
                    {'cn':'查考勤','en':'take attendance'},
                    {'cn':'打破，打碎','en':'break'},
                    {'cn':'关系到，涉及','en':'concern'},
                    {'cn':'就...而言','en':'as far as...be concerned'},
                    {'cn':'影响,感动','en':'affect'},
                    {'cn':'影响，效果，作用','en':'effect'},
                    {'cn':'开始生效，开始实施','en':'come/go/enter into effect'},
                    {'cn':'效率高的，能胜任的','en':'efficient'},
                    {'cn':'有效的，生效的，实际的','en':'effective'},
                    {'cn':'应响，感染','en':'influence'},
                    {'cn':'有影响力的','en':'influential'},
                    {'cn':'要价，控告','en':'charge'},
                    {'cn':'向某人所费','en':'charge sb for sth'},
                    {'cn':'控告某人某事','en':'charge sb with sth'},
                    {'cn':'由...负责','en':'be in charge of...'},
                    {'cn':'学习，研究，书房','en':'study'},
                    {'cn':'增加','en':'increase'},
                    {'cn':'减少，减小','en':'decrease'},
                    {'cn':'共同的，相互的，彼此的','en':'mutual'},
                    {'cn':'账户','en':'account'},
                    {'cn':'绝不，绝对不','en':'on no account'},
                    {'cn':'分发，分配','en':'distribute'},
                    {'cn':'开除，解散','en':'dismiss'},
                    {'cn':'翻转，旋转','en':'turn'},
                    {'cn':'感激，欣赏','en':'appreciate'},
                    {'cn':'证据','en':'evidence'},
                    {'cn':'举起，提高，饲养，养育','en':'raise'},
                    {'cn':'上升，升起，起床','en':'rise'},
                    {'cn':'叫醒，唤醒，激起','en':'arouse'},
                    {'cn':'出现，上升，起立','en':'arise'},
                    {'cn':'赞成，同意','en':'approve'},
                    {'cn':'包括，包含','en':'include'},
                    {'cn':'使陷入，使卷入，包含','en':'involve'},
                    {'cn':'反对，对抗','en':'oppose'},
                    {'cn':'反对，敌对，反对派','en':'opposite'},
                    {'cn':'相反的，对面的，对立的','en':'opposition'},
                    {'cn':'假装，装作','en':'pretend'},
                    {'cn':'唱片，记录','en':'record'},
                    {'cn':'推荐，建议，劝告','en':'recommend'},
                    {'cn':'依靠，依赖','en':'depend on'},
                    {'cn':'计数','en':'count'},
                    {'cn':'尽管，不管','en':'despite'},
                    {'cn':'调整，适应','en':'adjust'},
                    {'cn':'改编，适应','en':'adapt'},
                    {'cn':'应该，假设，认为','en':'suppose'},
                    {'cn':'通知，告诉，使熟悉','en':'inform'},
                    {'cn':'反对，物体，目标，对象','en':'object'},
                    {'cn':'约会，约定，任命','en':'appointment'},
                    {'cn':'失望','en':'disappoint'},
                    {'cn':'可利用的','en':'available'},
                    {'cn':'犯罪，承诺，委托，委任','en':'commit'},
                    {'cn':'限制','en':'limit'},
                    {'cn':'拍手，鼓掌','en':'clap'},
                    {'cn':'收养，采用，接受','en':'adopt'},
                    {'cn':'惭愧的，羞愧的','en':'ashamed'},
                    {'cn':'精准的，准确的','en':'accurate'},
                    {'cn':'足够的，适当的，能胜任的','en':'adequate'},
                    {'cn':'有吸引力的','en':'attractive'},
                    {'cn':'有能力的','en':'capable'},
                    {'cn':'证明，示范，演示，示威','en':'demonstrate'},
                    {'cn':'示范，表达，演示，游行示威','en':'demostration'},
                    {'cn':'高级的，先进的','en':'advanced'},
                    {'cn':'来源','en':'source'},
                    {'cn':'资源','en':'resource'},
                    {'cn':'课程','en':'course'},
                    {'cn':'原因','en':'cause'},
                    {'cn':'允许','en':'allow'},
                    {'cn':'行为','en':'behave'},
                    {'cn':'检点些','en':'behave oneself'},
                    {'cn':'提示，线索','en':'clue'},
                    {'cn':'距离','en':'distance'},
                    {'cn':'揭露，使暴露','en':'expose'},
                    {'cn':'证实，批准，确定','en':'confirm'},
                    {'cn':'指令，教学，教诲，说明','en':'instruction'},
                    {'cn':'预备，准备','en':'prepare'},
                    {'cn':'批评，评论','en':'criticize'},
                    {'cn':'评论家，批评家','en':'critic'},
                    {'cn':'责备','en':'blame'},
                    {'cn':'上好的，上级的，优秀的','en':'superior'},
                    {'cn':'比...强','en':'superior to'},
                    {'cn':'表明，显示，暗示','en':'indicate'},
                    {'cn':'支持，供养','en':'support'},
                    {'cn':'问卷，调查，研究','en':'survey'},
                    {'cn':'怀疑，猜想，嫌疑犯，不可信的，可疑的','en':'suspect'},
                    {'cn':'要求，命令，规定，需要','en':'require'},
                    {'cn':'请求','en':'request'},
                    {'cn':'有责任的，负责的，可靠的','en':'responsible'},
                    {'cn':'性格，人物，字符','en':'character'},
                    {'cn':'特点，特性，典型的，特有的','en':'characteristic'},
                    {'cn':'句子，判决，审判，判决','en':'sentence'},
                    {'cn':'解决，决定','en':'resolve'},
                    {'cn':'依然，保持，留下，剩余 v.，遗迹 n.','en':'remain'},
                    {'cn':'分配，指定，指派，确定','en':'assign'},
                    {'cn':'品质，才能，质量','en':'quality'},
                    {'cn':'反应反射','en':'reflect'},
                    {'cn':'评论','en':'remark'},
                    {'cn':'恢复','en':'recover'},
                    {'cn':'复习','en':'review'},
                    {'cn':'回答，作出回应','en':'respond'},
                    {'cn':'代替，替换','en':'replace'},
                    {'cn':'尊重','en':'respect'},
                    {'cn':'抵抗，抵制，忍住','en':'resist'},
                    {'cn':'类似','en':'resemble'},
                    {'cn':'收到，接收','en':'receive'},
                    {'cn':'循环使用','en':'recycle'},
                    {'cn':'重复','en':'repeat'},
                    {'cn':'回到','en':'return'},
                    {'cn':'减少，降低','en':'reduce'},
                    {'cn':'认出，识别，承认','en':'recognize'},
                    {'cn':'认识到，实现','en':'realize'},
                    {'cn':'名声','en':'reputation'},
                    {'cn':'调查，研究','en':'research'},
                    {'cn':'到达','en':'reach'},
                    {'cn':'唱片，记录','en':'record'},
                    {'cn':'推荐，建议，劝告','en':'recommend'},
                    {'cn':'依靠，依赖','en':'rely on'},
                    {'cn':'辞职','en':'resign'},
                    {'cn':'释放，发布，发行','en':'release'},
                    {'cn':'改革，革新','en':'reform'},
                    {'cn':'把...看做','en':'regard'},
                    {'cn':'减轻，解除，救济，安慰','en':'relief'}
                ]
            }
        },
        components:{
            CbCombobox
        },
        methods: {
            c1SelectAll (){
                this.c1Text = ''
                alert('选择了全部选项')
            },
            c1SelectMore (){
                alert('选择了更多选项')
            },
            c1ChangeVal (data){
                this.c1Text = data
            },
            cmb1ItemClick (evt){
                const target = evt.currentTarget
                this.c1Text = target.querySelector('label').innerText;
                this.$refs.cmb1.hideList()
                this.$refs.cmb1.currVal(this.c1Text)
            },
            c1DefaultItem (data){
                const cmb1 = document.querySelector('div[data-id="cmb1"]');
                const cmbItems = cmb1.querySelectorAll('li[data-item-index]');
                const defaultIndex = data.itemIndex - 1;
                if(defaultIndex < cmbItems.length){
                    cmbItems[defaultIndex].click();
                }
            }
        }
        ···
    }
</script>
```
