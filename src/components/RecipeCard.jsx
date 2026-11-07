import Badge from './Badge.jsx'
import { formatCookingTime } from './helper.js'

function RecipeCard({
  title,
  chef = 'Unknown Chef',
  description,
  cookingTime,
  difficulty,
  isVegetarian,
  image,
  imageAlt = `${title} recipe`,
}) {
  const dietLabel = isVegetarian ? 'Vegetarian' : 'Non-Veg'
  const dietColor = isVegetarian ? 'green' : 'rose'
  const difficultyColor = {
    Easy: 'green',
    Medium: 'amber',
    Hard: 'rose',
  }[difficulty]
  const formattedCookingTime = formatCookingTime(cookingTime)

  function handleOrder() {
    console.log(`${title} ordered`)
  }

  return (
    <article className="recipe-card">
      <div className="recipe-image-wrap">
        <img className="recipe-image" src={image} alt={imageAlt} loading="lazy" />
        <span className="image-label">Made with love</span>
      </div>
      <div className="recipe-card-content">
        <div className="badge-row">
          <Badge label={dietLabel} color={dietColor} />
          <Badge label={difficulty} color={difficultyColor} />
        </div>
        <h3>{title}</h3>
        <p className="recipe-chef">By {chef}</p>
        <p className="recipe-description">{description}</p>
        <div className="recipe-card-bottom">
          <p className="cooking-time">
            <span aria-hidden="true">◷</span> {formattedCookingTime}
          </p>
          <button className="order-button" type="button" onClick={handleOrder}>
            Order Now <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard
