const axios = require("axios");

const texts = {
  uk: {
    text1: "Бажаєш прорекламувати свою картину ? Я тобі в цьому допоможу! Рекламуй свої картини, охоплюй більше переглядів і продавай свої шедеври швидше!",
    button_1: "Рекламувати картину",
    button_2: "Повернутись назад",
  },
  ru: {
    text1: "Хочешь прорекламировать свою картину? Я тебе в этом помогу! Рекламируй свои картины, охватывает больше просмотров и продавай свои шедевры быстрее!",
    button_1: "Pекламировать картину",
    button_2: "Bернуться обратно",
  },
  en: {
    text1: "Do you want to advertise your picture? I will help you with this! Advertise your paintings, cover more views and sell your masterpieces faster!",
    button_1: "Advertise a picture",
    button_2: "Go back",
  },
};

const artAdvertisingMore = async (params) => {
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
                callback_data: "advertising",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artAdvertisingMore,
};
