import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://bouquet-builder.firebaseio.com";

export default instance;
