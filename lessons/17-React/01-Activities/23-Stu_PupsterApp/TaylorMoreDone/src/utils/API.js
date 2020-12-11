import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed";

export default {
  random: function() {
    return axios.get(BASEURL + "s/image/random");
  },
  byBreed: function(breed) {
    return axios.get(BASEURL + "/" + breed + "/images");
  },
  getBreeds: function() {
    return axios.get(BASEURL + "s/list");
  }
};
