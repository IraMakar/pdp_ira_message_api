const axios = require("axios");

const texts = {
  uk: {
    text1: "Що саме хочеш зробити?",
    button_1: "Змінити своє ім'я",
    button_2: "Змінити своє Я",
    button_3: "Назад",
  },
  ru: {
    text1: "Что именно хочешь сделать?",
    button_1: "Изменить своё имя",
    button_2: "Изменить свое Я",
    button_3: "Назад",
  },
  en: {
    text1: "What exactly do you want to do?",
    button_1: "Change your name",
    button_2: "Change your self",
    button_3: "Back",
  },
};

const artistSettings = async (params) => {
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
                callback_data: "changeArtistName",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "changeType",
              },
            ],
            [
                {
                  text: texts[lang].button_3,
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
    artistSettings,
};
