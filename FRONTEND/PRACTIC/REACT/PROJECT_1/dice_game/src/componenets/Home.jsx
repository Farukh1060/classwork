import hero_img from "../assets/images/dices.png";
import "./Home.css"
const Home = ({changepage}) => {

  return (
    <div className="home_container">
      <div className="dice">
        <img className="image" src={hero_img} alt="" />
      </div>
      <div className="play_game">
        <h1>DICE GAME</h1>
        <button onClick={changepage}>Play Now</button>
      </div>
    </div>
  );
};
export default Home;
