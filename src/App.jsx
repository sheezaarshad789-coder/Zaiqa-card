import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import RecipeCard from './components/RecipeCard.jsx'
import Section from './components/Section.jsx'
import biryaniImage from './assets/chiken biryani.jpg'
import samosaChaatImage from './assets/samosa chat.jpg'
import seekhKebabImage from './assets/kebab.jpg'
import daalChawalImage from './assets/daal chawal.jpg'
import chickenKarahiImage from './assets/Chicken Karahi Recipe.jpg'
import chapliKebabImage from './assets/peshawri chapli kabab.jpg'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-content">
            <p className="eyebrow">Khush aamdeed · Welcome to Zaika Food</p>
            <h1 id="intro-title">A taste of<br />Pakistan.</h1>
            <p className="intro-copy">
              From Karachi street-food favourites to a slow-cooked Sunday
              biryani, bring the bold, comforting flavours of Pakistani cooking
              to your table.
            </p>
            <a className="intro-link" href="#quick-recipes">
              Explore the recipes <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="intro-photo">
            <img
              src={biryaniImage}
              alt="A platter of Pakistani chicken biryani with basmati rice, egg and fresh coriander"
            />
            <span className="photo-note">Big Pakistani flavours, made for sharing.</span>
          </div>
        </section>

        <Section title="Quick Recipes" id="quick-recipes">
          <RecipeCard
            title="Lahori Samosa Chaat"
            chef="Zaika Kitchen"
            description="Crispy samosas piled with spicy chickpeas, yoghurt, tamarind chutney and crunchy papri."
            cookingTime={30}
            difficulty="Easy"
            isVegetarian={true}
            image={samosaChaatImage}
            imageAlt="Pakistani samosa chaat topped with chickpeas, yoghurt and chutney"
          />
          <RecipeCard
            title="Spicy Seekh Kebab"
            chef="Zaika Kitchen"
            description="Smoky, juicy kebabs seasoned with cumin and chilli, served with chutney and fresh herbs."
            cookingTime={40}
            difficulty="Medium"
            isVegetarian={false}
            image={seekhKebabImage}
            imageAlt="Pakistani seekh kebabs with chutney, lemon and onion"
          />
          <RecipeCard
            title="Homestyle Daal Chawal"
            chef="Zaika Kitchen"
            description="Comforting yellow lentils with a cumin and garlic tarka, served over steamed basmati rice."
            cookingTime={40}
            difficulty="Easy"
            isVegetarian={true}
            image={daalChawalImage}
            imageAlt="A plate of Pakistani daal chawal with lentils, basmati rice and salad"
          />
        </Section>

        <Section title="Weekend Specials" id="weekend-specials">
          <RecipeCard
            title="Sindhi Chicken Biryani"
            chef="Zaika Kitchen"
            description="A celebratory Sindhi-style dum biryani layered with spiced chicken, basmati, mint and tangy masala."
            cookingTime={90}
            difficulty="Hard"
            isVegetarian={false}
            image={biryaniImage}
            imageAlt="A platter of Pakistani chicken biryani with basmati rice, egg and fresh coriander"
          />
          <RecipeCard
            title="Lahori Chicken Karahi"
            chef="Zaika Kitchen"
            description="Wok-cooked chicken in a rich tomato masala, finished with fresh ginger, green chilli and coriander."
            cookingTime={55}
            difficulty="Medium"
            isVegetarian={false}
            image={chickenKarahiImage}
            imageAlt="A bowl of Pakistani chicken karahi garnished with herbs"
          />
          <RecipeCard
            title="Peshawari Chapli Kebab"
            chef="Zaika Kitchen"
            description="Crisp-edged minced beef patties seasoned with crushed coriander, pomegranate and green chilli."
            cookingTime={45}
            difficulty="Hard"
            isVegetarian={false}
            image={chapliKebabImage}
            imageAlt="A platter of Pakistani-style spiced kebabs with herbs and lemon"
          />
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App
