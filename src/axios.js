import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://diplom-36d50.firebaseio.com/";

export default instance;
