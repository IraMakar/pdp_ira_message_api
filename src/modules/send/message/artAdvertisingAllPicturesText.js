const axios = require("axios");

const texts = {
    uk: {
        text1: "Вибери картину, яку бажаєш прорекламувати 👇",
    },
    ru: {
        text1: "Выбери картину, которую желаешь прорекламировать 👇",
    },
    en: {
        text1: "Choose the picture you want to advertise 👇",
    }
};

const artAdvertisingAllPicturesText = async (params) => {
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
  artAdvertisingAllPicturesText,
};
