import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/dar%C3%ADo-david-espinosa-b50972258/"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/Davidespinosa8/" icon={BsGithub} />
          <Footer.Icon
            href="mailto:ddavidespinosa8@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon
            href="https://api.whatsapp.com/send/?phone=5492364357363&text&type=phone_number&app_absent=0"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
