const axios = require("axios");

const texts = {
  uk: {
    text1: "Шукач картин - ти на правильному шляху пошуку картин! \n\nЗдійснити пошук картин за : 👇",
    button_1: "Художником",
    button_2: "Категорією",
    button_3: "Розміром",
    button_4: "Хештегом",
    button_5: "Назад",
  },
  ru: {
    text1: "Искатель картин - ты на правильном пути поиска картин!\n\nОсуществить поиск картин по : 👇",
    button_1: "Художником",
    button_2: "Категорией",
    button_3: "Размером",
    button_4: "Хэштегом",
    button_5: "Назад",
  },
  en: {
    text1: "Picture Finder - You're on the right track to find pictures!\n\nSearch paintings by: 👇",
    button_1: "An artist",
    button_2: "Category",
    button_3: "The size",
    button_4: "Hashtag",
    button_5: "Back",
  },
};

const buyerSerchPicturesHello = async (params) => {
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
                callback_data: "searchByArtist",
              },
              {
                text: texts[lang].button_2,
                callback_data: "searchByCategory",
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "searchBySize",
              },
              {
                text: texts[lang].button_4,
                callback_data: "searchByHashtag",
              },
            ],
            [
              {
                text: texts[lang].button_5,
                callback_data: "buyer",
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
    buyerSerchPicturesHello,
};
