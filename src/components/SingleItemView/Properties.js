import styles from "./Properties.module.css";
const Properties = ({ data }) => {
  let listingProperties = [];
  for (const key in data) {
    if (
      key !== "title" &&
      key !== "text" &&
      key !== "images" &&
      key !== "imageUrl" &&
      key !== "area" &&
      key !== "id" &&
      data[key] !== "" &&
      data[key] !== null
    ) {
      let hebrewKey = "";
      switch (key) {
        case "location":
          hebrewKey = "מיקום";
          break;
        case "dealType":
          hebrewKey = "סוג עסקה";
          break;
        case "price":
          hebrewKey = "מחיר";
          break;
        case "city":
          hebrewKey = "עיר";
          break;
        case "squareMeter":
          hebrewKey = 'מ"ר';
          break;
        case "propertyType":
          hebrewKey = "סוג הנכס";
          break;
      }
      listingProperties.push({ key: hebrewKey, value: data[key] });
    }
  }
  listingProperties = listingProperties.filter((x) => x.key !== "");
  return (
    <div className={styles.gridwrapper}>
      {listingProperties.map((p) => (
        <div className={styles.box} key={p.key}>
          <span className={styles.name}>{p.key}:</span>
          <span>{p.value}</span>
        </div>
      ))}
      {}
    </div>
  );
};

export default Properties;
