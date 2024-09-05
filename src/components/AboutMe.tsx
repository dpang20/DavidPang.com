import "../App.css";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About Me</h1>
        <a
          className="resume-link"
          href={"/DavidPangResume2024.pdf"}
          download="DavidPangResume2024.pdf"
        >
          Resume
        </a>
        <p>
          I recently graduated from NYU (May 2024) with a Bachelor of Arts in
          Computer Science and a minor in Economics. Although I first explored
          Computer Science during my junior year of high school, I fully
          committed to it in my sophomore year of college. I am comfortable
          coding in Javascript, Java, Python, C, C++, HTML/CSS, React, and
          Typescript.{" "}
        </p>

        <p>
          In my professional experience, I have worked as a Fullstack Software
          Engineer Intern at Authright Inc and as an AI Data Specialist at
          Remotasks. I also have experience in the service industry as a
          Server's Assitant at The Cottage Wellesley.{" "}
        </p>

        <p>
          <strong>
            {" "}
            I am actively looking for Fullstack Engineer positions.{" "}
          </strong>
          If you think I am a good fit for your company or if you'd like to
          chat, you can shoot me a email{" "}
          <a href="mailto: dp7134@gmail.com">here.</a>
        </p>

        <h3>Other Interests</h3>
        <p>
          Aside from programming, I have been powerlifting for almost 2 years
          now, was in the NYU Barbell club, played tennis for most of my life,
          and I love all Boston sports (hopefully the Pats turn things around
          this season). I'm a big fan of The Beatles, Kanye West, and EDM.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
