const axios = require("axios");

const texts = {
    uk: {
        text1: "А можливо це секундна думка і ти вже передумав видаляти картину?",
        button_1: "Я точно хочу її видалити",
        button_2: "Я вже не хочу її видаляти",
    },
    ru: {
        text1: "А возможно это секундная мысль и ты уже передумал удалять картину?",
        button_1: "Я точно хочу ее удалить",
        button_2: "Я уже не хочу ее удалять",
    },
    en: {
        text1: "Or maybe it's a second thought, and you've already changed your mind to delete the picture?",
        button_1: "I definitely want to delete it",
        button_2: "I don't want to delete it anymore",
    }
};

const artDeleteSelectedPictureButtons = async (params) => {
  const { chat_id, lang, templateVars } = params;
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
                callback_data: `deleteSelectedPicture_${templateVars.picture_id}`,
              }
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "noDeleteSelectedPicture",
              },
            ],
            
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  artDeleteSelectedPictureButtons,
};
