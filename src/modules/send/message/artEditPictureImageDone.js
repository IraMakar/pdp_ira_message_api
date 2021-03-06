const axios = require("axios");

const texts = {
  uk: {
    text1: "Фото успішно змінено! \n\nБажаєш глянути на кінцевий результат?",
    button_1: "Переглянути пост",
    button_2: "Повернутись до головного меню",
  },
  ru: {
    text1: "Фото успешно изменено! \n\nХочешь взглянуть на конечный результат?",
    button_1: "Посмотреть пост",
    button_2: "Вернуться в главное меню",
  },    
  en: {
    text1: "Photo changed successfully! \n\nDo you want to look at the end result?",
    button_1: "View post",
    button_2: "Return to the main menu",
  },
};

const artEditPictureImageDone = async (params) => {
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
                callback_data: "viewEditedPost",
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
    artEditPictureImageDone,
};
