const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Упс... у вас немає жодної вподобаної картини",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Упс ... у вас нет ни одной понравившейся картины",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Oops ... you don't have any pictures you like",
      button_1: "Go back", 
  },
};

const buyerNOTViewedPicture = async (params) => {
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
                callback_data: "backToBuyerMenu",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  buyerNOTViewedPicture,
};
