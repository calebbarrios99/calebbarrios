import React from "react";
import { Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_social">
        <a
          href="https://github.com/calebbarrios99"
          target="_blank"
          rel="noreferrer"
          className="footer_social_link"
        >
          <Icon name="github" size="large" />
        </a>
        <a
          href="https://linkedin.com/in/caleb-barrios"
          target="_blank"
          rel="noreferrer"
          className="footer_social_link"
        >
          <Icon name="linkedin" size="large" />
        </a>
      </div>
      <p className="footer_copy">
        © {new Date().getFullYear()} Caleb Barrios — Desarrollador Front-Mobile
      </p>
    </footer>
  );
}
