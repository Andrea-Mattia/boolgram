import Vue from "vue";
import App from "./App.vue";

// ICONS
// import icons library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// importing icons
import { faHeart as farHearth } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHearth } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// adding icons
library.add(
  farHearth,
  fasHearth,
  faHouse,
  faComment,
  faCompass,
  faPaperPlane,
  faSquarePlus,
  faCircleNotch
);
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
