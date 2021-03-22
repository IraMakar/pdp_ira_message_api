const axios = require("axios");

const texts = {
  uk: {
    //text1: "Вітаю {{name}} Тобі відкриваються нові можливості, тому оприділяйся 👇",
    text1: "Вітаю! Тепер тобі відкриваються нові можливості, тому оприділяйся 👇",
    button_1: "Дії з картинами",
    button_2: "Реклама",
    button_3: "Перегляд статистики",
    button_4: "Перегляд заявок",
    button_5: "Зв'язок з адміном",
    button_6: "Налаштування",
  },
  ru: {
    text1: "Тебе открываются новые возможности, поэтому определяйся 👇",
    button_1: "Действия с картинами",
    button_2: "Реклама",
    button_3: "Просмотр статистики",
    button_4: "Просмотр заявок",
    button_5: "Связь с админом",
    button_6: "Настройки",
  },
  en: {
    text1: "New opportunities open up for you, so be determined 👇",
    button_1: "Actions with pictures",
    button_2: "Advertising",
    button_3: "View statistics",
    button_4: "View applications",
    button_5: "Contact with administrator",
    button_6: "Setting",
  },
};

const helloArtistMenu = async (params) => {
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
            ],
            [
              {
                text: texts[lang].button_5,
                callback_data: "contactWithAdministrator",
              },
              {
                text: texts[lang].button_6,
                callback_data: "artistSettings",
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
  helloArtistMenu,
};
