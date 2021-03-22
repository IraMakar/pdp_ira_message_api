const axios = require("axios");

const texts = {
  uk: {
    text1: "Невже художник хоче  поміняти своє Я і стати шукачем картин?😱",
    button_1: "Так, хочу стати шукачем картин",
    button_2: "Ні, хочу залишитись художником",
  },
  ru: {
    text1: "Неужели художник хочет поменять свое Я и стать искателем картин? 😱",
    button_1: "Да, хочу стать искателем картин",
    button_2: "Нет, хочу остаться художником",
  },
};

const changeTypeToBuyer = async (params) => {
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
                callback_data: "changeTypeToBuyer",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "backToArtistMenu",
              },
            ],
            
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  changeTypeToBuyer,
};
