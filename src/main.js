import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAZejUZ1cqvzDhWY94YoHoYxtQq94DDlBI",
   authDomain: "vue-calendar-db6d0.firebaseapp.com",
   projectId: "vue-calendar-db6d0",
   storageBucket: "vue-calendar-db6d0.appspot.com",
   messagingSenderId: "171059369907",
   appId: "1:171059369907:web:3bc0420cca625fff5dddc6"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
