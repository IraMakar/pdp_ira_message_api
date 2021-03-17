const axios = require("axios");

const texts = {
  uk: {
    text1: "Тобі відкрилися можливості дій з картинами. \n\nОбери що саме бажаєш зробити?👇",
    button_1: "Виставити картину",
    button_2: "Зредагувати пост картини",
    button_3: "Видалити картину",
    button_4: "Назад",
  },
  ru: {
    text1: "Тебе открылись возможности действий с картинами. \n\nВыбери что именно хочешь сделать?👇",
    button_1: "Выставить картину",
    button_2: "Отредактировать пост картины",
    button_3: "Удалить картину",
    button_4: "Назад",
  },
  en: {
    text1: "Opportunities for action with pictures opened up for you. \n\nChoose what exactly do you want to do?👇",
    button_1: "Exhibit a painting",
    button_2: "Edit post of painting",
    button_3: "Delete painting",
    button_4: "Back",
  },
};

const artActionsWithPicturesHello = async (params) => {
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
                callback_data: "exhibitPicture",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "editPostOfPicture",
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: "deletePainting",
              },
            ],
            [
              {
                text: texts[lang].button_4,
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
  artActionsWithPicturesHello,
};
