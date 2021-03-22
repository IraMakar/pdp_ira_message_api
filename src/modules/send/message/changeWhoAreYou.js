const axios = require("axios");

const texts = {
  uk: {
    text1: "Хочете поміняти своє Я ?",
    button_1: "Так, хочу стати шукачем картин",
    button_2: "Ні, не хочу",
  },
  ru: {
    text1: "Хотите поменять свое Я ?",
    button_1: "Да, хочу стать искателем картин",
    button_2: "Я - художник",
  },
  en: {
    text1: "Do you want to change your self ?",
    button_1: "Yes, I want to become a seeker of paintings",
    button_2: "No I don`t want",
  },
};

const changeWhoAreYou = async (params) => {
  const { chat_id, lang } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: "changeTypeToBuyer",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "backToArtistMenu",
              },
            ],
            
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    changeWhoAreYou,
};
