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
          <Menu secondary>
            <MenuPrincipal />
          </Menu>
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
  </>
  )
 
}
