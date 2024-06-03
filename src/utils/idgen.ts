/**
 * Generates random ID
 */
export const generateRandomString = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let ID = "";
  for (let i = 0; i < 5; i++) {
    ID += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return ID;
};
