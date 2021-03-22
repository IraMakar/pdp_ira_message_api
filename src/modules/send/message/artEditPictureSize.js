const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вкажи розмір своєї картини (00-00)!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Укажи размер своей картины (00-00)!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Specify the size of your picture (00-00)!",
      button_1: "Go back", 
  },
};

const artEditPictureSize = async (params) => {
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
    artEditPictureSize,
};
