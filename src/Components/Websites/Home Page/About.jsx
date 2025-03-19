import Button from '../../Common components/Button/Button';

export default function About() {
  return (
    <div className="wrapper about-wrapper">
      <section>
        <h1>DevsPortal is a purpose-built platform for every developer.</h1>
        <p className="grey">
          Meet the system for modern software development. Streamline issues,
          projects, and product roadmaps.
        </p>
        <div className="buttons-wrapper">
          <Button label="Let's see apps" type="light" />
          <Button
            label="More about author"
            type="dark"
            onClick={() => window.open('//www.portfolio-website.ct8.pl')}
          />
        </div>
      </section>
    </div>
  );
}
