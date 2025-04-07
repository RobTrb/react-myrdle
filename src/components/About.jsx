import "../styles/About.css";

export default function About({ onBackToMenu }) {
  return (
    <div className="aboutContainer">
      <article className="aboutArticle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ad dolorum
        iusto, suscipit odio minus perspiciatis dolores pariatur ex error eius
        sit corrupti fugit officia cum eligendi tenetur deleniti maxime, enim
        est velit et, quibusdam non nihil. Quibusdam nisi iusto doloribus saepe
        praesentium obcaecati nemo, atque minus dicta enim distinctio.
      </article>
      <button onClick={onBackToMenu}>Back to main menu</button>
    </div>
  );
}
