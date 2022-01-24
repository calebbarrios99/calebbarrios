import Link from "next/link";
import React from "react";
import { Container, Menu, Image } from "semantic-ui-react";
import { useRouter } from "next/router";
export default function Navbar() {
  return (
    <div className="navbar">
      <Container>
        <Menu secondary>
          <Menu.Item>
            <Link href="/">
              <a>
                <Image src="/logo-caleb.png" width={"250px"} />
              </a>
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <MenuPrincipal />
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
}

function MenuPrincipal() {
  const router = useRouter();
  return(
    <>
    <Link href="/" passHref>
      <Menu.Item name=" Inicio" active={router.pathname == "/"} />
    </Link>
    <Link href="/publicaciones" passHref>
      <Menu.Item name="Publicaciones" active={router.pathname == "/publicaciones"} />
    </Link>
    <Link href="/contacto" passHref>
      <Menu.Item name="Contacto"  active={router.pathname == "/contacto"} />
    </Link>
  </>
  )
 
}
