import Vue from 'vue'
import Components from '../components/index'

Components.forEach(Component => Vue.component(Component.name, Component))
