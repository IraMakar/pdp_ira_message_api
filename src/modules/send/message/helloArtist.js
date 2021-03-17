const axios = require("axios");

const texts = {
    uk: {
        text1: "Оуууу... Ну що ж - вітаю тебе в рядах художників 👏",
    },
    ru: {
        text1: "Оууу ... Ну что же - поздравляю тебя в рядах художников 👏",
    },
    en: {
        text1: "Oooh ... Well - congratulations to you in the ranks of artists 👏",
    }
};

const helloArtist = async (params) => {
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
    helloArtist,
};
