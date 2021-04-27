import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function trending({ results }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  //   const slug = str.split("v=").pop();
  return (
    <div>
      <h1>Test Youtube</h1>
      <YouTube videoId={results.split("v=").pop()} opts={opts} />
      <h1>Movie-Trailer</h1>
      <p>{results}</p>
      <p>{results.split("v=").pop()}</p>
    </div>
  );
}

export default trending;

export async function getServerSideProps() {
  const request = await movieTrailer("Up", { year: "2009" }); //.then((res) => res.json())
  return {
    props: {
      results: request,
    },
  };
}

// str.slice(0, 4)
