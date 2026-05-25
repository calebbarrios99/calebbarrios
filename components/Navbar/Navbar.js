import Link from "next/link";
import React, { useState } from "react";
import { Container, Image, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Container>
          <div className="navbar_bar">
            <Link href="/">
              <a onClick={() => setOpen(false)}>
                <Image src="/logo-caleb.png" width={"250px"} />
              </a>
            </Link>
            <button
              className="navbar_hamburger"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Menu"
            >
              <Icon name={open ? "times" : "bars"} size="large" />
            </button>
            <nav className="navbar_links">
              <MenuPrincipal onNavigate={() => {}} />
            </nav>
          </div>
        </Container>
      </div>

      {open && (
        <div className="navbar_overlay">
          <div className="navbar_overlay_header">
            <Link href="/">
              <a onClick={() => setOpen(false)}>
                <Image src="/logo-caleb.png" width={"200px"} />
              </a>
            </Link>
            <button
              className="navbar_overlay_close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              <Icon name="times" size="large" />
            </button>
          </div>
          <nav className="navbar_overlay_links">
            <MenuPrincipal onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </>
  );
}

function MenuPrincipal({ onNavigate }) {
  const router = useRouter();
  return (
    <>
      <Link href="/">
        <a
          className={`navbar_link${
            router.pathname === "/" ? " navbar_link--active" : ""
          }`}
          onClick={onNavigate}
        >
          Inicio
        </a>
      </Link>
      <Link href="/publicaciones">
        <a
          className={`navbar_link${
            router.pathname === "/publicaciones" ? " navbar_link--active" : ""
          }`}
          onClick={onNavigate}
        >
          Publicaciones
        </a>
      </Link>
      <Link href="/contacto">
        <a
          className={`navbar_link${
            router.pathname === "/contacto" ? " navbar_link--active" : ""
          }`}
          onClick={onNavigate}
        >
          Contacto
        </a>
      </Link>
    </>
  );
}
