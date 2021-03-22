const axios = require("axios");

const changeTypeToArtistStiker = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendSticker`,
      {
        chat_id,
        sticker: "CAACAgIAAxkBAALvBmBEj23ZPYbJ3lIE3F_1b4H8SMtMAALzJwAC6VUFGFNxNR-nbrrJHgQ",
      }
    )
  ).data;
};

module.exports = {
    changeTypeToArtistStiker,
};
