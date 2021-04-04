const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Упс... на даний момент немає картин даної категорії",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Упс ... на данный момент нет картин данной категории",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Oops ... there are currently no paintings in this category",
      button_1: "Go back", 
  },
};

const buyerNOTSearchByCategory = async (params) => {
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
  buyerNOTSearchByCategory,
};
