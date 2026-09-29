function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>

        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <button aria-label="On Click">Reserve a Table</button>
      </div>

      <img
        className="hero-image"
        src="/restauranfood.jpg"
        alt="Little Lemon restaurant food"
      />
    </section>
  );
}

export default Hero;
