import Container from "../UI/Container";
import styles from "./ItemsNavbar.module.css";
import { useEffect, useState } from "react";
import { BiSlider } from "react-icons/bi";

const ItemsNavbar = (props) => {
  const [location, setLocation] = useState(null);
  const [sliderOn, setSliderOn] = useState(true);
  const [dealType, setdealType] = useState(null);

  const handleLocationChange = (newLocation) => {
    if (location === newLocation) {
      setLocation(null);
      props.onFilter(null, dealType);
      // props.onLocationChange(null);
    } else {
      setLocation(newLocation);
      props.onFilter(newLocation, dealType);
      // props.onLocationChange(newLocation);
    }
  };

  const handleTypeChange = (newDealType) => {
    if (newDealType === dealType) {
      setdealType(null);
      props.onFilter(location, null);
    } else {
      setdealType(newDealType);
      props.onFilter(location, newDealType);
    }
  };

  // useEffect(() => {
  //   props.onDealTypeChange(type);
  // }, [type]);

  let navClasses = styles.nav;
  let controlClasses = styles.control;
  if (sliderOn) {
    navClasses = `${styles.nav} ${styles.active}`;
    controlClasses = `${styles.control} ${styles.active}`;
  }
  return (
    <header className={styles.header}>
      <Container>
        <nav className={navClasses}>
          <div className={styles.topline}>
            <h2>{props.title}</h2>
            <div
              className={styles.sliderBtn}
              onClick={() => setSliderOn((prev) => !prev)}
            >
              <BiSlider size={25} />
            </div>
          </div>
          <div className={controlClasses}>
            <div className={styles.item}>
              <p>איזור:</p>
              <p
                className={`${styles.btn} ${
                  location === "south" ? styles.active : ""
                }`}
                onClick={() => handleLocationChange("south")}
              >
                דרום
              </p>
              <p
                className={`${styles.btn} ${
                  location === "center" ? styles.active : ""
                }`}
                onClick={() => handleLocationChange("center")}
              >
                מרכז
              </p>
              <p
                className={`${styles.btn} ${
                  location === "north" ? styles.active : ""
                }`}
                onClick={() => handleLocationChange("north")}
              >
                צפון
              </p>
            </div>

            {!props.allItems && (
              <div className={styles.item}>
                <p>סוג:</p>
                <p
                  className={`${styles.btn} ${
                    dealType === "sale" ? styles.active : ""
                  }`}
                  onClick={() => handleTypeChange("sale")}
                >
                  מכירה
                </p>
                <p
                  className={`${styles.btn} ${
                    dealType === "rent" ? styles.active : ""
                  }`}
                  onClick={() => handleTypeChange("rent")}
                >
                  השכרה
                </p>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default ItemsNavbar;
