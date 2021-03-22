const axios = require("axios");

const contactWithAdministratorStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgEAAxkBAALvR2BErMF9amsTtw50EB33Ca9Me1-7AAIRCgACv4yQBIhIEKexYe1dHgQ",
      }
    )
  ).data;
};

module.exports = {
    contactWithAdministratorStiker,
};
