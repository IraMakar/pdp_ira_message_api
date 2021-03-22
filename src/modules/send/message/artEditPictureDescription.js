
 
const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Напиши новий опис до своєї картини!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Напиши новое описание к своей картины!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Write a new description for your picture!",
      button_1: "Go back", 
  },
};

const artEditPictureDescription = async (params) => {
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
    artEditPictureDescription,
};
