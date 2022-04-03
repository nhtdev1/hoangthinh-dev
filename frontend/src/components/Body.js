import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import MyProfile from "../routes/myProfile";
import Game2048 from "../routes/game2048";
import GamePuzzle from "../routes/gamePuzzle";
export default class Body extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="game2048" element={<Game2048 />} />
          <Route path="gamePuzzle" element={<GamePuzzle />} />
        </Routes>
      </>
    );
  }
}
