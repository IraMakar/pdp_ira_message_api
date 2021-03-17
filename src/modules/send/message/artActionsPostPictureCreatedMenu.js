const axios = require("axios");

const texts = {
  uk: {
    text1: "Як тобі? Сподобалось? \nБажаєш виставити ще одну картину?",
    button_1: "Виставити ще одну картину",
    button_2: "Повернутись до головного меню",
  },
  ru: {
    text1: "Как тебе? Понравилось? \n\nХочешь выставить еще одну картину?",
    button_1: "Выставить еще одну картину",
    button_2: "Вернуться в главное меню",
  },
  en: {
    text1: "Want to look at the end result?",
    button_1: "Exhibit another painting",
    button_2: "Return to the main menu",
  },
};

const artActionsPostPictureCreatedMenu = async (params) => {
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
                callback_data: "exhibitPicture",
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
    artActionsPostPictureCreatedMenu,
};
