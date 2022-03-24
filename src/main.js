import Vue from "vue";
import App from "./App.vue";

// ICONS
// import icons library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// importing icons
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// adding icons
library.add(faHeart, faHouse, faComment);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Day.js
var dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();
// Setting locale globally
import "dayjs/locale/it";
dayjs.locale("it");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
