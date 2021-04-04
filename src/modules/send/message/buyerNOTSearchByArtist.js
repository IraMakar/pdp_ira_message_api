const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Упс... на даний момент у цього художника немає картин",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Упс ... на данный момент у этого художника нет картин",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Oops ... at the moment this artist has no paintings",
      button_1: "Go back", 
  },
};

const buyerNOTSearchByArtist = async (params) => {
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
  buyerNOTSearchByArtist,
};
