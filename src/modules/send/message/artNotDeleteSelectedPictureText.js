const axios = require("axios");

const texts = {
    uk: {
        text1: "Супер!",
    },
    ru: {
        text1: "Супер!",
    },
    en: {
        text1: "Super!",
    }
};

const artNotDeleteSelectedPictureText = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
      }
    )
  ).data;
};

module.exports = {
    artNotDeleteSelectedPictureText,
};
