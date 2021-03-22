const axios = require("axios");

const texts = {
  uk: {
    text1: "Вибирай що саме тебе цікавить👇",
    button_1: "Пошук картин",
    button_2: "Перегляд історії переглядів",
    button_3: "Перегляд вподобаних картин",
    button_4: "Зв'язок з адміном",
    button_5: "Налаштування",
  },
  ru: {
    text1: "Выбирай что именно тебя интересует 👇",
    button_1: "Поиск картин",
    button_2: "Просмотр истории просмотров",
    button_3: "Просмотр понравившихся картин",
    button_4: "Связь с админом",
    button_5: "Настройки",
  },
  en: {
    text1: "Choose what exactly interests you 👇",
    button_1: "Search for paintings",
    button_2: "View browsing history",
    button_3: "View your favorite pictures",
    button_4: "Contact with administrator",
    button_5: "Setting",
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
          parse_mode: "Markdown",
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: "searchPictures",
              },
              {
                text: texts[lang].button_2,
                callback_data: "viewHistory",
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "viewLiked",
              },
              {
                text: texts[lang].button_4,
                callback_data: "contactWithAdministrator",
              },
            ],
            [
              {
                text: texts[lang].button_5,
                callback_data: "buyerSettings",
              },
            ],
          ],
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      }
    )
  ).data;
};

module.exports = {
  buyerMenu,
};
