const axios = require("axios");

const helloBuyerStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgIAAxkBAALvCWBEj4sR2tspqVuSr0VHtPlx0ls4AALUJwAC6VUFGLUFJhtKypBBHgQ",
      }
    )
  ).data;
};

module.exports = {
    helloBuyerStiker,
};
