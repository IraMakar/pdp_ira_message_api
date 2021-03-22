const axios = require("axios");

const texts = {
  uk: {
    text1: "Хештеги картини успішно змінено! \n\nБажаєш глянути на кінцевий результат?",
    button_1: "Переглянути пост",
    button_2: "Повернутись до головного меню",
  },
  ru: {
    text1: "Хэштеги картины успешно изменены! \n\nХочешь взглянуть на конечный результат?",
    button_1: "Посмотреть пост",
    button_2: "Вернуться в главное меню",
  },    
  en: {
    text1: "Picture hashtags changed successfully! \n\nWant to look at the end result?",
    button_1: "View post",
    button_2: "Return to the main menu",
  },
};

const artEditPictureHashtagsDone = async (params) => {
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
    artEditPictureHashtagsDone,
};
