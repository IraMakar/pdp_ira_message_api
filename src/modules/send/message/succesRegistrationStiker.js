const axios = require("axios");

const succesRegistrationStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgIAAxkBAALxLmBFTsm42eYjc--Qn0oa7xMiZcP1AALeJwAC6VUFGIQ9dDelRS5vHgQ",
      }
    )
  ).data;
};

module.exports = {
    succesRegistrationStiker,
};
