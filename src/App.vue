<template>
  <div id="app">
    <cb-combobox ref="cmb1" title="自定义下拉框:">
      <li slot="comboboxItems" v-for="(item,index) in cmb1Datas" :key="index" @click="cmb1ItemClick">
        <label>{{item.cn}} : {{item.en}}</label>
      </li>
    </cb-combobox>
  </div>
</template>

<script>
import CbCombobox from './components/ClimberCombobox';

export default {
  name: 'app',
  data () {
    return {
      cmb1Datas:[
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
  methods:{
    cmb1ItemClick (evt){
      const target = evt.currentTarget;
      this.$refs.cmb1.hideList();
      this.$refs.cmb1.currVal(target.querySelector('label').innerText);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
