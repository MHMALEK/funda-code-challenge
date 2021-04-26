import convertTimeStampToYear from "../../utils/timestamp-to-year";

function convertHouseDetailsTimeStampToYear(value) {
  if (!value) return "";
  const extractTimeStamp = (currentValue) => currentValue.slice(6, 19);
  console.log(extractTimeStamp(value));
  return convertTimeStampToYear(Number(extractTimeStamp(value)));
}

export default convertHouseDetailsTimeStampToYear;
