function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="highlights-grid">
        <article className="special-card">
          <img src="/greek salad.jpg" alt="Greek salad" />

          <div className="card-content">
            <div className="card-header">
              <h3>Greek Salad</h3>
              <span>$12.99</span>
            </div>

            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese.
            </p>

            <a href="/order-online">Order a delivery</a>
          </div>
        </article>

        <article className="special-card">
          <img src="/bruchetta.svg" alt="Bruschetta" />

          <div className="card-content">
            <div className="card-header">
              <h3>Bruschetta</h3>
              <span>$5.99</span>
            </div>

            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>

            <a href="/order-online">Order a delivery</a>
          </div>
        </article>

        <article className="special-card">
          <img src="/lemon dessert.jpg" alt="Lemon dessert" />

          <div className="card-content">
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span>$5.00</span>
            </div>

            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>

            <a href="/order-online">Order a delivery</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
