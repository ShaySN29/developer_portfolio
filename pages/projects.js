import Link from 'next/link';
import Layout from '../components/MyLayout';

// Styling the div of the project page
const projectsStyle = {
  padding: "0 5rem",
  margin: "50",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
  alignItems: "left"
};
// Styling the paragraphs
const paragraphStyle = {
  textAlign: "justify"
};
// Styling the links
const linkStyle = {
  textDecoration: "none",
  color: "white"
};

const marginStyle = {
  marginBottom: "2%"
}

// This page displays the projects(The name, a description and the links to the project)
export default () => (
  <Layout>
    <div style={projectsStyle}>
      <div style={marginStyle}>
        <h2>Online Store</h2>
        <p style={paragraphStyle}>
          An online store website which contains a catalogue page and a functional cart. When the "Add to Cart" button is clicked in the catalogue
          page, an alert with the updated total is shown. The item is added to the cart and the totals are updated. The user is also able to
          choose between collection and delivery options, which updates the totals accordingly. The user can also apply a coupon for a discount.
        </p>
        <a href='https://github.com/ShaySN29/Online-Store' target="_blank" style={linkStyle}>GitHub - Chai There! Online Store</a>
      </div>

      <div style={marginStyle}>
        <h2>Memory Game</h2>
        <p style={paragraphStyle}>
          A memory game where the player flips two cards at a time to find the matching pair. If the cards do not match the cards will flip over
          again however if the pair of cards match the cards will stay flipped over and the user needs to find another matching pair. The game ends
          when all the matching pairs are found. The number of flips are counted as the player flips cards. When the game is over the player can
          decide to begin another game.
        </p>
        <a href='https://github.com/ShaySN29/Memory-Game' target="_blank" style={linkStyle}>GitHub - A Memory Game of Thrones</a>
        <br />
        <a href='https://infinite-escarpment-72601.herokuapp.com/' target="_blank" style={linkStyle}>Heroku - A Memory Game of Thrones</a>
      </div>

      <div style={marginStyle}>
        <h2>iTunes Media Search App</h2>
        <p style={paragraphStyle}>
          An app to search for various media on the itunes store. The user can enter a search and choose the type of media they are looking for.
          The results are displayed and the user can save an item to their favourites or click on a link to the iTunes store. The user can also
          view and delete items from their favourites list.
        </p>
        <a href='https://github.com/ShaySN29/iTunes_app' target="_blank" style={linkStyle}>GitHub - iTunes Search App</a>
        <br />
        <a href='https://sheltered-reaches-00257.herokuapp.com/' target="_blank" style={linkStyle}>Heroku - iTunes Search App</a>
      </div>

      <div style={marginStyle}>
        <h2>Car Database App</h2>
        <p style={paragraphStyle}>
          An app to add cars to a database. A user can add a car bearing details pertaining to the details of the car and the owner of the car. 
          The details of the car can be updated or deleted from the database. The user can also view cars that are older than 5 years.
        </p>
        <a href='https://github.com/ShaySN29/Car-Database' target="_blank" style={linkStyle}>GitHub - Car Database</a>
      </div>

      <div style={marginStyle}>
        <h2>ToDo List App</h2>
        <p style={paragraphStyle}>
          A ToDo List App where the user is required to log in. If there are no items in the user's todo list then the user can add tasks to the
          list. If the user has items in the list the list is retrieved from the database and the user can either add more tasks or mark
          tasks as complete in the list. Tasks on the list can be cleared and the list can be saved to the database.
        </p>
        <a href='https://github.com/ShaySN29/Todo-List' target="_blank" style={linkStyle}>GitHub - Todo List</a>
      </div>
    </div>
  </Layout>
);

