const axios = require("axios");

const texts = {
  uk: {
    text1: "Вітаю, Ви ввійшли в ряди шукачів картин",
    button_1: "так, хочу стати шукачем картин",
    button_2: "назад",
  },
  ru: {
    text1: "Хочете поміняти своє Я ?",
    button_1: "Я - шукач картин",
    button_2: "Я - художник",
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
                callback_data: "chdd",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "back",
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
