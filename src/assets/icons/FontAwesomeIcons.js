import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser as fasUser, faLightbulb, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";



library.add(farUser, fasUser, faLightbulb, faMagnifyingGlass, faYoutube, faFacebook, faTwitter);

export default FontAwesomeIcon;