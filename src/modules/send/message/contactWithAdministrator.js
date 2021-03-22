const axios = require("axios");

const texts = {
    uk: {
        text1: "Привіт) Готова відповісти на Твої питання і пропозиції, що тебе цікавить?",
        button_1: "Повернутись назад"
    },
    ru: {
        text1: "Привет) Готова ответить на ваши вопросы и предложения вас интересует?",
        button_1: "Вернуться обратно"
    },
    en: {
        text1: "Hello) Ready to answer your questions and suggestions, what interests you?",
        button_1: "Go back"
    },
};

const contactWithAdministrator = async (params) => {
  const { chat_id, lang } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                callback_data: "backToArtistMenu",
                text: texts[lang].button_1,
              }
            ]
          ],
          one_time_keyboard: true,
          resize_keyboard: true
          //remove_keyboard: true,
          //"one_time_keyboard": true,
      //"resize_keyboard": true
        },
      }
    )
  ).data;
};

module.exports = {
    contactWithAdministrator,
};
