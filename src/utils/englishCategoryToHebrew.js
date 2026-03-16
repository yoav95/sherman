export const getHebrewDealType = (dealType) => {
  switch (dealType) {
    case "sale":
      return "מכירה";
      break;
    case "rent":
      return "השכרה";
      break;
    default:
      return null;
  }
};

// For database queries - must match Firebase propertyType values
export const getHebrewTitle = (englishTitle) => {
  let hebrewTitle = null;
  switch (englishTitle) {
    case "offices":
      hebrewTitle = "משרדים";
      break;
    case "stores":
      hebrewTitle = "חנויות ומסחר";
      break;
    case "logistics":
      hebrewTitle = "תעשייה ולוגיסטיקה";
      break;
    case "fields":
      hebrewTitle = "מגרשים";
      break;
    case "houses":
      hebrewTitle = "מגורים";
      break;
    case "estate":
      hebrewTitle = "נכסים מניבים";
      break;
  }
  return hebrewTitle;
};

// For display in UI
export const getDisplayTitle = (englishTitle) => {
  if (englishTitle === "stores") {
    return "מסחר ותחנות דלק";
  }
  return getHebrewTitle(englishTitle);
};

export const getHerbewLocation = (location) => {
  let hebrewLoc = "";
  if (location === "south") {
    hebrewLoc = "דרום";
  } else if (location === "center") {
    hebrewLoc = "מרכז";
  } else if (location === "north") {
    hebrewLoc = "צפון";
  }
  return hebrewLoc;
};
