const axios = require("axios");

const artNotDeleteSelectedPictureStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgIAAxkBAALvD2BEmgN8RSeLM4p2_a0VS1j4tK7xAAL1JwAC6VUFGMl9V3ggbY7cHgQ",
      }
    )
  ).data;
};

module.exports = {
    artNotDeleteSelectedPictureStiker,
};
