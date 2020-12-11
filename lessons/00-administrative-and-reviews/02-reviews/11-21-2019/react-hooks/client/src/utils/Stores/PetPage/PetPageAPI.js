import axios from "axios";

export default {
  // Gets all pet pages
  getPetPages: function() {
    return axios.get("/api/pet").then(({data}) => data);
  },
  // Gets pet page by username and petname
  getPetPage: function(username, petname) {
    return axios.get(`/api/pet/${username}/${petname}`).then(({data}) => data);
  },
  // Creates a candle in the database
  createPetPage: function(candleData) {
    return axios.post("/api/pet", candleData).then(({data}) => data);
  }
};