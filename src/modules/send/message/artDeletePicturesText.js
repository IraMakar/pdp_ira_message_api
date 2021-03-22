const axios = require("axios");

const texts = {
    uk: {
        text1: "Вибери картину, пост якої бажаєш видалити👇",
    },
    ru: {
        text1: "Выбери картину, пост которой желаешь удалить👇",
    },
    en: {
        text1: "Select the picture whose post you want to delete👇",
    }
};

const artDeletePicturesText = async (params) => {
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
    artDeletePicturesText,
};
