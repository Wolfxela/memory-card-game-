import forest1 from './assets/forest1.jpg'
//managed to learn about this shuffling method after a bit of searching!
function Randomise({cards}) {
    var remainingLength = cards.length, currentCard, randomNr;
  
  
    while (remainingLength) {
  
      randomNr = Math.floor(Math.random() * remainingLength--);
  
      currentCard = cards[remainingLength];
      cards[remainingLength] = cards[randomNr];
      cards[randomNr] = currentCard;
    }
  
  }
  
export default function Main({highScore,score,setScore,setHighScore,cards,CheckClick})
  {
    Randomise({cards} )
    const mainStyle = {
        backgroundImage: "url(" + forest1 + ")"
    }
    return(
      <>
  
      <div style={mainStyle} className="Images">
      
        {cards.map((card)=>{
  
          return(
          <div key={card.id} className="card" onClick={()=>{CheckClick({highScore,score,setScore,setHighScore,card,cards});}}>
            <img src={card.image} alt="" />
            <p className="text">{card.text}</p>
  
          </div>)})}
  
      </div>
  
      </>
    )
  }
  