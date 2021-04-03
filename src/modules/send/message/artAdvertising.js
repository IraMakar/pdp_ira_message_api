const axios = require("axios");

const texts = {
  uk: {
    text1: "Бажаєш прорекламувати свій шедевр ?",
    button_1: "Так, хочу",
    button_2: "Ні, хочу вернутись назад",
    button_3: "Хочу дізнатись більше про це",
  },
  ru: {
    text1: "Хочешь прорекламировать свой шедевр?",
    button_1: "Да, хочу",
    button_2: "Нет, хочу вернуться обратно",
    button_3: "Хочу узнать больше об этом",
  },
  en: {
    text1: "Do you want to promote your masterpiece?",
    button_1: "Yes, I want",
    button_2: "No, I want to go back",
    button_3: "I want to know more about it",
  },
};

const artAdvertising = async (params) => {
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
                callback_data: "advertisingPicture",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "backToArtistMenu",
              },
            ],
            [
                {
                  text: texts[lang].button_3,
                  callback_data: "moreAboutAdvertising",
                },
              ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artAdvertising,
};
