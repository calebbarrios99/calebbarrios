import React from "react";
import { Grid, Image } from "semantic-ui-react";

export default function CardHome() {
  return (
    <section className="card_home">
      <Grid columns={2} doubling reversed="computer">
        <Grid.Column>
          <div className="card_home_text">
            <h2>Desarrollador Front-Mobile</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
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
