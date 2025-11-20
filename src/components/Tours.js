import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
