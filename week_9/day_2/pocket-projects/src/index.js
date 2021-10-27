import warmUp from "./warmup";
import { Clock } from "./clock"
import { attachDogLinks } from "./drop_down"

let c = new Clock(document.querySelector('#clock'));
attachDogLinks();