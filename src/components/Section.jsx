import { Children } from 'react'

function Section({ title, id, children }) {
  const recipeCount = Children.count(children)

  return (
    <section className="recipe-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Pakistani favourites, straight from our kitchen</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <span className="section-count">{recipeCount} recipes</span>
      </div>
      <div className="recipe-grid">{children}</div>
    </section>
  )
}

export default Section
