import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.createBoard = this.createBoard.bind(this);
  }

  createBoard() {
    let board = [];
    for(let i = 0; i < this.props.nrows; i++){
      let rows = [];
      for(let x = 0; x < this.props.ncols; x++){
        rows.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(rows)
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    let tableBoard = [];
    for(let i = 0; i < this.props.nrows; i ++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        row.push(<Cell isLit={this.state.board[i][x]}/>)
      }
      tableBoard.push(<tr>{row}</tr>)
    }
    return (
      <div>
        <table className='Board'>
          <tbody>
            {tableBoard}
          </tbody>
        </table>
      </div>
    )
    // if the game is won, just show a winning msg & render nothing else
  }
}


export default Board;
