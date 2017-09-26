import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loading from '~/assets/img/placeholder-2-1.svg'

Vue.use(VueLazyload, { loading, error: loading })
