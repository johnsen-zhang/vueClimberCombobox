import ClimberCombobox from './ClimberCombobox.vue'
ClimberCombobox.install = function(Vue, options = {}){
    if(options.scoped){
        Vue.components(ClimberCombobox.name, ClimberCombobox)
    }
}

if (typeof window !== 'undefined' && window.Vue){
    window.Vue.use(ClimberCombobox)
}

export default ClimberCombobox