const axios = require("axios");

const texts = {
    uk: {
        text1: "Шукач картин - вітаю тебе! Ти потрапив у світ шукачів картин👏 \nДумаю тобі тут сподобається.",
    },
    ru: {
        text1: "Искатель картин - поздравляю тебя! Ты попал в мир искателей картин👏 \nДумаю тебе здесь понравится.",
    },
    en: {
        text1: "Picture seeker - congratulations! You are in the world of picture seekers👏 \nI think you will like it here",
    }
};

const helloBuyer = async (params) => {
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
  helloBuyer,
};
