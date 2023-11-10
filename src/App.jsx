import { useEffect, useState } from 'react'
import './App.css'
import Main from './MainPart';
function RestartGame(cards)
{
  cards.forEach(card => {
    card.clicked = false
  });
}
function CheckClick({highScore,score,setScore,setHighScore,card,cards})
{
  console.log(highScore)
  if(card.clicked === false)
  {
    setScore(score+1)
    card.clicked = true
  }
  else if(score>highScore)
  {
    setHighScore(score)
    setScore(0)
    RestartGame(cards)
  }
  else
  {
    setScore(0)
    RestartGame(cards)
  }
}
function Header({score,highScore})
{
 return(
  <>
  <header>
    <h1>Memory Game!</h1>

    <div className="scores">
      <h2 className="score">Score: <p className="number">{score}</p></h2>
      <h2 className="score">High Score: <p className="number">{highScore}</p></h2>
    </div>

  </header>
  </>
 )
}

function App() {
  const foxes = ["vdlKQXBwOWY","W-c6msBKn2Y","J7zmHzpqhdM","swG0ojqS6hc","iGg6IKZPFOg","xgTMSz6kegE"]
  const [score, setScore] = useState(0)
  const [highScore,setHighScore] = useState(0)
  const [cards,setCards] = useState([])

  useEffect(() =>{

    async function getImages()
    {
      let images = []
      for(let i = 0;i<6;i++)
      {
        const response = await fetch('https://api.unsplash.com/photos/'+foxes[i]+'?&per_page=1&client_id=Iu5GAad-CByZs3FDLXvx6DYHbKe9SXUoJi8kwXyvXd4')
        const data = await response.json()
        images.push({id:i,image:data.urls.full,clicked:false,text:"A cute fox"})
      }
      setCards(images)
    }
    getImages()
  },[])

  return (
    <>
    <Header score={score} highScore={highScore}/> 
    <Main highScore = {highScore} score={score} setScore={setScore} setHighScore={setHighScore} cards={cards} CheckClick={CheckClick} />
    </>
  )
}

export default App
