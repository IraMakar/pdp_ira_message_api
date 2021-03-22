const axios = require("axios");

const artDeleteSelectedPictureStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgIAAxkBAALvDGBEk5cvZK8eLT3sf1a1ssR7tPKyAALcJwAC6VUFGJn4m4SWQfH-HgQ",
      }
    )
  ).data;
};

module.exports = {
    artDeleteSelectedPictureStiker,
};
