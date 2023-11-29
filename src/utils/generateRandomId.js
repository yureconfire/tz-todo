function generateRandomId() {
  const timestamp = new Date().getTime();
  const randomId = timestamp.toString(16);
  return randomId;
}

export default generateRandomId;
