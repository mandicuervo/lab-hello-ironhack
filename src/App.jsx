import Navbar from "./components/Navbar/Navbar";
import Cards from './components/Cards/Cards';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {

    const cardsContent = [
        {
        img: icon1,
        title: 'Declarative',
        description: 'React makes it painless to create interactive Uls'
        },
        {
        img: icon2,
        title: 'Components',
        description: 'Build encapsulated components that manage their state'
        },
        {
        img: icon3,
        title: 'Single-way',
        description: "A set immutable values are passed to the component's"
        },
        {
        img: icon4,
        title: 'JSX',
        description: "Statically-typed, designed to run on modern browsers"
        }
    ]
    return (
        <div className="App">
            <Navbar/>
            <div className="content-container">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most porpular frontend library, and become a super Ninja developer.</p>
                <button>Awesome</button>
            </div>
            <div className="cards-content">
                {
                    cardsContent.map(card => (
                        <Cards
                            key = { card.title }
                            image = { card.img }
                            title = { card.title }
                            description = { card.description }
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
