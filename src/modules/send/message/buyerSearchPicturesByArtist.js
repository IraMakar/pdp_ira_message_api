const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вибери відповідного художника чиї картини ти хочеш переглянути👇",
    button_1: "Живопис",
    button_2: "Графіка",
    button_3: "Модерн",
    button_4: "Назад",
  },
  ru: {
    text1:
      "Выбери соответствующего художника чьи картины ты хочешь посмотреть👇",
    button_1: "Живопись",
    button_2: "Графика",
    button_3: "Модерн",
    button_4: "Назад",
  },
  en: {
    text1:
      "Choose the appropriate artist whose paintings you want to view👇",
    button_1: "Painting",
    button_2: "Graphics",
    button_3: "Modern",
    button_4: "Back",
  },
};

const buyerSearchPicturesByArtist = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
          inline_keyboard: [
            ...templateVars.artists.map((artist) => [
              {
                text: artist.nickname,
                callback_data: `artistIdSPic_${artist.chat_id}`,
              },
            ]),
            [
              {
                text: texts[lang].button_4,
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
    buyerSearchPicturesByArtist,
};
