import "../styles/About.css";

export default function About({ onBackToMenu }) {
  return (
    <div className="aboutContainer">
      <article className="aboutArticle">
        This project was coded in React and built using Vite. The server is making use of Express and the highscores are stored and fetched from a database running in MongoDB 
        with the use of Mongoose on the server side. The highscore list itself is server rendered with the use of Handlebars for express. Most of the game is run on the front end
        except for some of the game logic that is run on the server to prevent cheating.
      </article>
      <button onClick={onBackToMenu}>Back to main menu</button>
    </div>
  );
}
