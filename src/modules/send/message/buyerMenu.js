const axios = require("axios");

const texts = {
  uk: {
    text1: "Тобі відкриваються нові можливості, тому оприділяйся 👇",
    button_1: "Дії з картинами",
    button_2: "Реклама",
    button_3: "Перегляд статистики",
    button_4: "Перегляд заявок",
    button_5: "Зв'язок з адміном",
    button_6: "Налаштування",
  },
  ru: {
    text1: "Тебе открываются новые возможности, поэтому определяйся 👇",
    button_1: "Я - шукач картин",
    button_2: "Я - художник",
    button_3: "Я - шукач картин",
    button_4: "Я - художник",
    button_5: "Я - шукач картин",
    button_6: "Я - художник",
  },
};

const buyerMenu = async (params) => {
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
                callback_data: "1",
              },
              {
                text: texts[lang].button_2,
                callback_data: "2",
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "3",
              },
              {
                text: texts[lang].button_4,
                callback_data: "4",
              },
            ],
            [
              {
                text: texts[lang].button_5,
                callback_data: "buyer",
              },
              {
                text: texts[lang].button_6,
                callback_data: "setting",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    buyerMenu,
};
