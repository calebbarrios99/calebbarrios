import React, { useState, useEffect } from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

const roles = [
  "Desarrollador Front-End",
  "Desarrollador Mobile",
  "React Native Developer",
];

export default function CardHome() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timer = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          100
        );
      } else {
        timer = setTimeout(() => setPhase("deleting"), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, roleIndex]);

  return (
    <section className="card_home">
      <Grid columns={2} doubling reversed="computer">
        <Grid.Column>
          <div className="card_home_text">
            <h2>
              {displayed}
              <span className="card_home_cursor" />
            </h2>
            <p>
              Especializado en desarrollo mobile con Flutter y React Native.
              Manejo state management con Riverpod, Provider y GetX, bases de
              datos locales con ObjectBox, y construyo sitios web con Next.js y
              WordPress.
            </p>
            <div className="card_home_social">
              <a
                href="https://github.com/calebbarrios99"
                target="_blank"
                rel="noreferrer"
                className="card_home_social_link"
              >
                <Icon name="github" size="big" />
              </a>
              <a
                href="https://linkedin.com/in/caleb-barrios"
                target="_blank"
                rel="noreferrer"
                className="card_home_social_link"
              >
                <Icon name="linkedin" size="big" />
              </a>
            </div>
          </div>
        </Grid.Column>

        <div className="card_home_image">
          <Grid.Column>
            <Image src="/home.png" width="100%" />
          </Grid.Column>
        </div>
      </Grid>
    </section>
  );
}
