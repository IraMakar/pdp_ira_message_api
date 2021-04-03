const axios = require("axios");

const texts = {
  uk: {
    text1: "Ой, на жаль чи на щастя у тебе ще немає виставлених картин🤷‍♀️ \n\nХочеш виставити картину зараз?",
    button_1: "Так, хочу виставити",
    button_2: "Ні, хочу повернутись назад",
  },
  ru: {
    text1: "Ой, к сожалению или к счастью у тебя еще нет выставленных картин🤷‍♀️ \n\nХочешь выставить картину сейчас?",
    button_1: "Да, хочу выставить",
    button_2: "Нет, я хочу вернуться",
  },
  en: {
    text1: "Oh, unfortunately or fortunately you don't have any paintings yet🤷‍♀️ \n\nDo you want to exhibit now?",
    button_1: "Yes, I want to exhibit paintings",
    button_2: "No, I want to go back",
  },
};

const artActionsWithoutPicture = async (params) => {
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
            [
              {
                text: texts[lang].button_2,
                callback_data: "actionsWithPictures",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artActionsWithoutPicture,
};
