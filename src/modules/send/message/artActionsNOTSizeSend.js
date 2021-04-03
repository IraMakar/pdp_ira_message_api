const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Напиши будь ласка розмір у відповідному форматі вказуючи розмір у сантиметрах (00-00)",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Напиши пожалуйста размер в соответствующем формате указывая размер в сантиметрах (00-00)",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Please write the size in the appropriate format indicating the size in centimeters (00-00)",
      button_1: "Go back", 
  },
};

const artActionsNOTSizeSend = async (params) => {
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
                callback_data: "artActionsPostPictureDescript",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artActionsNOTSizeSend,
};
