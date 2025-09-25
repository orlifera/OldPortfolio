import React from 'react'
// import Heading from '../components/Heading'
import TicTacToe from '../components/TicTacToe'

function Home() {
    return (
        <>
            {/* <Heading /> */ }
            <div className='ttt-intro'>
                <h2>Play Tic Tac Toe!</h2>
                <p>As of now, this is just PVP, so challenge a friend in this classic game of Tic Tac Toe. Click on any cell to make your move and see if you can outsmart the other player!</p>
            </div>
            <TicTacToe />
        </>
    )
}

export default Home