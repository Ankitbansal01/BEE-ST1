export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, I'm Ankit</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Hello there! I'm Ankit Bansal, a passionate Computer Science and
            Engineering enthusiast on a relentless quest for innovation and
            problem-solving. Welcome to my digital realm, where algorithms
            dance, and code orchestrates the symphony of technology.
            <br />I breathe life into ideas, transform concepts into code, and
            engineer solutions that transcend challenges. With a foundation in
            Computer Science and Engineering, I navigate the ever-evolving
            landscape of technology with curiosity and creativity.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
