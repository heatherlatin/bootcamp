const music = {
  // code here
  title: "The Less I Know The Better",
  artist: "Tame Impala",
  album: "Currents"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `
  <div>
    <p><b>Title: </b>${music.title}</p>
    <p><b>Artist: </b>${music.artist}</p>
    <p><b>Album: </b>${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
