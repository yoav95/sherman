import styles from "./Clients.module.css";
import Image from "next/image";

const clients = [
  { name: "אלקטרה", logo: "/images/clients/electra.png" },
  { name: "Enlight", logo: "/images/clients/enlight.png" },
  { name: "רמי לוי", logo: "/images/clients/rami-levi.png" },
  { name: "REIT1", logo: "/images/clients/reit1.png" },
  { name: "שבירו", logo: "/images/clients/shaviro.png" },
  { name: "מניבים", logo: "/images/clients/menivim.png" },
  { name: "אשטרום נכסים", logo: "/images/clients/ashtrom.png" },
  { name: "מיטב דש", logo: "/images/clients/meitav-dash.png" },
  { name: "גינדי החזקות", logo: "/images/clients/gindi.png" },
  { name: "הפניקס smart", logo: "/images/clients/phoenix-smart.png" },
];

const Clients = () => {
  return (
    <div className={styles.clientsSection}>
      <h2 className={styles.title}>לקוחות שעבדנו איתם</h2>
      <div className={styles.logosGrid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.logoItem}>
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;