const axios = require("axios");

const texts = {
  uk: {
    text1: "Що саме ти хочеш обрати ? 👇",
    button_1: "Дії з картинами",
    button_2: "Реклама",
    button_3: "Перегляд статистики",
    button_4: "Перегляд заявок",
    button_5: "Зв'язок з адміном",
    button_6: "Налаштування",
  },
  ru: {
    text1: "Выбери что именно хочешь сделать 👇",
    button_1: "Действия с картинами",
    button_2: "Реклама",
    button_3: "Просмотр статистики",
    button_4: "Просмотр заявок",
    button_5: "Связь с админом",
    button_6: "Настройки",
  },
  en: {
    text1: "Choose what exactly you want to do👇",
    button_1: "Actions with pictures",
    button_2: "Advertising",
    button_3: "View statistics",
    button_4: "View applications",
    button_5: "Contact with administrator",
    button_6: "Setting",
  },
};

const artistMenu = async (params) => {
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
                callback_data: "artActionsWithPicturesHello",
              },
              {
                text: texts[lang].button_2,
                callback_data: "advertising",
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "viewStatistics",
              },
              {
                text: texts[lang].button_4,
                callback_data: "viewApplications",
              },
            ],
            [
              {
                text: texts[lang].button_5,
                callback_data: "contactWithAdministrator",
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
    artistMenu,
};
