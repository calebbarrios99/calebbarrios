import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Message } from "semantic-ui-react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e, { name, value }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;
    const subject = encodeURIComponent(`Mensaje de ${nombre}`);
    const body = encodeURIComponent(`${mensaje}\r\n\r\nEmail: ${email}`);
    window.open(`mailto:tu@email.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <Layout>
      <section className="contacto">
        <h1 className="contacto_title">Contacto</h1>
        <p className="contacto_sub">
          ¿Tienes un proyecto en mente? Escríbeme y hablamos.
        </p>
        {sent ? (
          <Message positive>
            <Message.Header>¡Mensaje enviado!</Message.Header>
            <p>Gracias por escribirme, te responderé pronto.</p>
          </Message>
        ) : (
          <Form className="contacto_form" onSubmit={handleSubmit}>
            <Form.Input
              label="Nombre"
              placeholder="Tu nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <Form.Input
              label="Email"
              placeholder="tu@email.com"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Form.TextArea
              label="Mensaje"
              placeholder="Cuéntame sobre tu proyecto..."
              name="mensaje"
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="contacto_btn"
              primary
              size="large"
            >
              Enviar mensaje
            </Button>
          </Form>
        )}
      </section>
    </Layout>
  );
}
