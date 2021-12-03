import React from 'react';


const API_URL =
'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';
function App() {
  return <div class="container">
    <div>
      This is where we are going to have the question
    </div>
    <div>
      <div>Answer 1</div>
      <div>Answer 2</div>
      <div>Answer 3</div>
      <div>Answer 4</div>
    </div>
  </div>;
}

export default App;
