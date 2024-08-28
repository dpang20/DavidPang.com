import React from "react";
import "../App.css";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1>Why I Love Programming</h1>
        <p>
          I recently graduated from NYU (May 2024) with a Bachelor of Arts in
          Computer Science and a minor in Economics. My goal in life has always
          been to use my creativity to build something meaningful. I love movies
          and books, but I continue to struggle with the correct usages of “who”
          and “whom,” and—according to some—can never seem to find the right
          camera angle. It’s safe to say that my prospects as a director or
          screenwriter are dull.{" "}
        </p>

        <p>
          But here’s the good news: I’m also a huge fan of games and puzzles.
          I’ve been playing video games since Halo 3 hit the scene, and my
          personal best on Minesweeper is 118 seconds (not exactly a world
          record...I blame 50/50s). Now, you might be thinking, “That’s a lot of
          time spent in front of a screen. Couldn’t you have done something more
          productive?” And, well, you wouldn’t be wrong. But here’s the thing—my
          time in the digital world taught me two important lessons:
        </p>

        <ol>
          <li>
            <strong>
              With enough consistent effort and learning, any obstacle can be
              defeated.{" "}
            </strong>
            Whether it's outsmarting other players online or finally beating
            that one infuriating boss, I've learned that every challenge can be
            broken down and solved. It’s all about understanding the problem,
            analyzing the situation, and using the tools at your disposal to
            come out on top.{" "}
          </li>
          <li>
            <strong>
              Programming is a powerful skill that lets you create anything.{" "}
            </strong>
            Some games are basically social networks with millions of players
            interacting in real-time. Others pull you into epic adventures or
            dystopian worlds. The takeaway? There’s no limit to what you can
            create with a computer. The possibilities are endless, and that’s
            what draws me to programming.
          </li>
        </ol>
        <p>
          When I first started learning Computer Science, I quickly realized
          that the satisfaction I got from writing a program was just like the
          thrill of winning a game. Programming, to me, is a game where your
          tools are your chosen language or framework, and the challenge is
          whatever problem you decide to tackle. Break down the problem, solve
          it piece by piece, and grow stronger in the process. It’s a positive
          feedback loop that drives continuous growth.
        </p>
        <h3>So Why Web Development?</h3>
        <p>
          I was born in 2002, so I have some faint memories of the internet in
          its early days. My older brother taught me how to download The
          Beatles’ entire discography from P2P sites like LimeWire, and I
          vividly remember the “FBI” pop-ups that had my exact IP address after
          I tried to pirate Attack of the Clones (with Russian subtitles, no
          less). Now, this might not paint me as the most upstanding citizen,
          but as Valve’s Gabe Newell once said, “Piracy is a service issue.”
          More importantly, these experiences shaped my view of the internet as
          a platform where anyone can access what they need, when they need it.{" "}
        </p>
        <p>
          That’s why I’m passionate about web development. I want to create
          things that help people, whether it’s ten users or ten thousand. It’s
          not about the numbers for me—it's about knowing that something I built
          made someone’s day just a little bit easier or more enjoyable. That’s
          what gives me purpose.{" "}
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
          now, played tennis for most of my life, and I love all Boston sports
          (hopefully the Pats turn things around this season). I'm a big fan of
          The Beatles, Kanye West, and EDM.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
