const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Надішли будь ласка фото у відповідному форматі",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Отправь пожалуйста фото в соответствующем формате",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Please send a photo in the appropriate format",
      button_1: "Go back", 
  },
};

const artActionsNOTPictureSend = async (params) => {
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
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artActionsNOTPictureSend,
};
