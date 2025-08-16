import React, { useState } from 'react'
import './styles.css'

function Square({value,onClick}){
    return <button onClick={onClick} className='square'>{value}</button>
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [isXturn, setisXturn] = useState(true);
    const [winner, setWinner] = useState('')

    function handleClick(getCurrentIndex){
        if (winner || squares[getCurrentIndex]){return}
        const copySquares = [...squares];
        copySquares[getCurrentIndex] = isXturn ? 'X' : 'O';
        handleWinner(copySquares);
        setSquares(copySquares);
        setisXturn(!isXturn);
    }

    function handleWinner(squares){
        const winningPossibilities = [
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<winningPossibilities.length;i++){
            const [a,b,c] = winningPossibilities[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                setWinner(squares[a]);
            }
        }
    }

    function handleRestart(){
        setSquares(squares.fill(''))
        setWinner('')
        setisXturn(!isXturn)
    }
    console.log(squares);
    console.log(winner);
  return (
    <div className='container'>
        <div className="row">
            <Square value={squares[0]} onClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onClick={()=>handleClick(2)}/>
        </div>
        <div className="row">
            <Square value={squares[3]} onClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onClick={()=>handleClick(5)}/>
        </div>
        <div className="row">
            <Square value={squares[6]} onClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onClick={()=>handleClick(8)}/>
        </div>
        <div className="content">
            {winner ? <div>winner is : {winner} <br/><br/><button className='restart' onClick={() =>handleRestart()}>Restart</button></div> : <div>Next Player is : {isXturn ? 'X' : 'O'}</div>
            }
        </div>
    </div>
  )
}

export default TicTacToe
