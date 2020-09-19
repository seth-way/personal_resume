
For this project I wanted to test myself by working with complex & intensive board game logic.

I did some research and found a game that peaked my interest.

Fanorona is a popular game from Madagascar. Play is similar to other popular games such as Go, Checkers, & Othello.

I had fun working with the logical problems and cleaning up the presentation with CSS. However, the most interesting challenge I faced from this project was preserving an accurate game-state across a network.

I chose to solve this problem by storing the state of the board in a database. I created a system where the player who is currently awaiting their turn will short poll the database until a state change is recognized.

<div className="md-center-img">
<img src="/images/portfolio/gifs/fanorona.gif " alt="fanorona" className="md-img">
<div>

You can see the slight delay when a move is registered in the gif above.

I also could have used web sockets, or perhaps another method, to eliminate this delay, but since Fanorona is a turn-based game, this solution fit my needs well!