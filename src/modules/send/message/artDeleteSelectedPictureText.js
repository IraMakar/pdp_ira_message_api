const axios = require("axios");

const texts = {
    uk: {
        text1: "Ваш пост картини видалено !",
        button_1: "Повернутись назад",
    },
    ru: {
        text1: "Ваш пост картины удалено!",
        button_1: "Вернуться обратно",
    },
    en: {
        text1: "Your picture post has been deleted!",
        button_1: "Go back",
    }
};

const artDeleteSelectedPictureText = async (params) => {
  const { chat_id, lang } = params;
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
                callback_data: "actionsWithPictures",
              }
            ]
            
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  artDeleteSelectedPictureText,
};
