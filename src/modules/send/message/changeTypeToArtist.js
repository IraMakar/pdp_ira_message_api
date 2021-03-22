const axios = require("axios");

const texts = {
  uk: {
    text1: "Невже шукач картин хоче  поміняти своє Я і стати художником?😱",
    button_1: "Так, я хочу стати художником ",
    button_2: "Ні, хочу залишитись шукачем картин",
  },
  ru: {
    text1: "Неужели искатель картин хочет поменять свое Я и стать художником? 😱",
    button_1: "Да, я хочу стать художником",
    button_2: "Нет, хочу остаться искателем картин",
  },
};

const changeTypeToArtist = async (params) => {
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
                callback_data: "changeTypeToArtist",
              },
            ],
            [
              {
                text: texts[lang].button_2,
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
    changeTypeToArtist,
};
