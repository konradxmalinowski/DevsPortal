import ratingIcon from '../../../../assets/ratings-icon.jpg';

const Rating = ({ name }) => {
  return (
    <section className="rating" aria-label={`Rating by ${name}`}>
      <div className="ratings-top-wrapper">
        <div>
          <img src={ratingIcon} alt="Person icon" />
        </div>
        <div>
          <div className="name">{name}</div>
          <div aria-label="5-star rating">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <div className="ratings-bottom-wrapper">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        laboriosam alias debitis reiciendis cupiditate voluptate, perferendis
        totam, nulla enim repudiandae quidem veniam impedit in perspiciatis at
        repellat doloribus consequuntur quas.
      </div>
    </section>
  );
};

export default Rating;
