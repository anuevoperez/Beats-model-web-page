import React from "react";
import styles from "./NewsLetter.module.css";
import bannerform from "../../assets/bannerform.jpg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import SubscribeNewsletter from "../../services/SubscribeNewsletter";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <div className={styles.Newsletter} id="subscribe">
      <div className={styles.NewsletterImg}>
        <img src={bannerform} alt="Beats"></img>
      </div>

      <div className={styles.Form}>
        <div className={styles.TitleForm}>
          <h2> Newsletter </h2>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            try {
              await SubscribeNewsletter(email);
              setSuccess(true);
            } catch {
              setError("Algo ha fallado, por favor, inténtelo de nuevo");
              setSuccess(false);
            }
          }}
        >
          <div className={styles.ErrorControl}>
            <Input
              label="email"
              name="email"
              type="text"
              placeholder="mail@email.com"
              value={email}
              error={error}
              onChange={(e) => {
                const currentEmail = e.target.value;
                setEmail(currentEmail);
              }}
            />

            <Button type="submit">
              <ion-icon name="send-outline"></ion-icon> Enviar
            </Button>
          </div>
        </form>
        {success && (
          <div className={styles.Sucess}>
            <span> Formulario enviado correctamente </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
