 
const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Надішли нове фото своєї картини!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Пришли новое фото своей картины!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Send a new photo of your painting!",
      button_1: "Go back", 
  },
};

const artEditPictureImage = async (params) => {
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
                callback_data: "backToEditPost",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artEditPictureImage,
};
