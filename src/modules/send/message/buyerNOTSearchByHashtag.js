const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Упс... за даним хештегом картин не знайдено",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Упс ... по данному хэштегу картины не найдено",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Oops ... no picture found for this hashtag",
      button_1: "Go back", 
  },
};

const buyerNOTSearchByHashtag = async (params) => {
  const { chat_id, lang } = params;
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
                text: texts[lang].button_1,
                callback_data: "searchPictures",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    buyerNOTSearchByHashtag,
};
