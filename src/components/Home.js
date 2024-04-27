import React from "react";
import {username,city} from '../data/user'
function Home() {
  return (
    <div id="home">
      <h1>
        {username} Lize is a Web Developer from New York{city}
      </h1>
    </div>
  );
}
export default Home