import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../../../shared/GameContext";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import Countdown from "react-countdown";
import "./GameBoard.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Card from "../GameComponents/Card";

const GameBoard = (props) => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      return <span>{seconds}</span>;
    }
  };

  const {
    drawCard,
    playCard,
    canPlay,
    isHostCon,
    startGame,
    regularTurn,
    setColor,
    playerArray,
    gameActive,
    setGameActive,
    discardDeck,
    setDiscardDeck,

    userInfo,
  } = useContext(GameContext);
  // useEffect(() => {
  //   if (!canPlay) return;
  //   setTimeout(() => {
  //     setMsg(<Countdown renderer={renderer} date={Date.now() + 30000} />);
  //     setOpen(true);
  //     setTimeout(() => {
  //       drawCard(userInfo.userID);
  //     }, 30000);
  //   }, 90000);
  // }, [canPlay, drawCard]);

  const redirect = () => {
    history.push("/home");
  };

  return (
    <div className="boardContainer">
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Player Timeout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="error" className="alert">
              You have {msg} to make a choice or lose a turn!
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <div className="conditionalContainer">
        <div className="drawContainer">
          <div
            style={{ backgroundColor: "black" }}
            className={`cardback`}
            onClick={() => {
              drawCard(userInfo.userID);
            }}
          ></div>
        </div>

        <div className="discardContainer">
          <Card
            color={discardDeck.length > 0 ? discardDeck[0].color : "white"}
            value={discardDeck.length > 0 ? discardDeck[0].value : ""}
          />
          {/* <div style={{ backgroundColor: discardDeck.length>0? discardDeck[0].color: "white"  }} className={`discard`}><h1>{discardDeck.length>0?discardDeck[0].value:""}</h1></div> */}
        </div>

        <div className="conditionalContainer">
          {isHostCon !== false && gameActive !== true && (
            <Button
              variant="contained"
              color="primary"
              value="startGame"
              className="startButton"
              onClick={() => {
                if (playerArray.length === 1) return;
                startGame();
              }}
            >
              Start Game
            </Button>
          )}

          {isHostCon !== true && gameActive !== true && (
            <div className="text">Waiting on host...</div>
          )}

          {discardDeck.length === 0 ||
          discardDeck[0].color !== "black" ||
          !canPlay ? (
            <></>
          ) : (
            <div className="color-area">
              <div
                className="color-box"
                style={{ backgroundColor: "blue" }}
                onClick={() => setColor("blue")}
              ></div>
              <div
                className="color-box"
                style={{ backgroundColor: "green" }}
                onClick={() => setColor("green")}
              ></div>
              <div
                className="color-box"
                style={{ backgroundColor: "red" }}
                onClick={() => setColor("red")}
              ></div>
              <div
                className="color-box"
                style={{ backgroundColor: "yellow" }}
                onClick={() => setColor("yellow")}
              ></div>
            </div>
          )}
        </div>
      </div>

      <div className="right-area">
        {gameActive !== false && (
          <Button
            variant="contained"
            color="primary"
            value="quitGame"
            className="quitGame"
            onClick={redirect}
          >
            Quit Game
          </Button>
        )}
      </div>
    </div>
  );
};
export default GameBoard;
