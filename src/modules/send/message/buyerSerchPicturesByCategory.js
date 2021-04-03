const axios = require("axios");

const texts = {
  uk: {
    text1: "Вибери відповідну категорію за якою ти хочеш здійснити пошук картин👇",
    button_1: "Живопис",
    button_2: "Графіка",
    button_3: "Модерн",
    button_4: "Назад",
  },
  ru: {
    text1: "Выбери соответствующую категорию по которой ты хочешь осуществить поиск картин👇",
    button_1: "Живопись",
    button_2: "Графика",
    button_3: "Модерн",
    button_4: "Назад",
  },
  en: {
    text1: "Select the appropriate category for which you want to search for pictures👇",
    button_1: "Painting",
    button_2: "Graphics",
    button_3: "Modern",
    button_4: "Back",
  },
};

const buyerSerchPicturesByCategory = async (params) => {
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
                callback_data: "painting",
              },
              {
                text: texts[lang].button_2,
                callback_data: "graphics",
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "modern",
              },
              {
                text: texts[lang].button_4,
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
  buyerSerchPicturesByCategory,
};
