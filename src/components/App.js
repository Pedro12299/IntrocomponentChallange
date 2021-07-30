import Data from "./Data";
import Banner from "./Banner";
import React from 'react';

function App() {
  return (
    <div class="container">
      <Banner />
      <div class="row">
        <div class="col-6 leftText">
          <h1 class="header">Learn to code by watching others</h1>
          <p class="paragraph">
            See how experienced developers solve problems in real-time.
          </p>
          <p class="paragraph">
            Watching scripted tutorials is great, but understanding how
          </p>
          <p class="paragraph">developers think is invaluable</p>
        </div>
        <div class="col-6">
          <Data />
        </div>
      </div>
    </div>
  );
}

export default App;
