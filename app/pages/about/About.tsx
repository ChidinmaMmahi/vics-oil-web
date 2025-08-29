import PageAnimation from "~/components/PageAnimation";
import PageMargin from "~/components/PageMargin";

const About = () => {
  return (
    <PageAnimation>
      <PageMargin>
        <main className="pb-[1000px]">
          <section>
            <h1>About Us</h1>
          </section>
        </main>
      </PageMargin>
    </PageAnimation>
  );
};

export default About;
