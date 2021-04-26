function convertTimeStampToYear(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US");
}

export default convertTimeStampToYear;
