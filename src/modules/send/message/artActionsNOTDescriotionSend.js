
const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Напиши будь ласка дані текстом",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Напиши пожалуйста дание текстом",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Please write the data in text",
      button_1: "Go back", 
  },
};

const artActionsNOTDescriotionSend = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        // reply_markup: {
        //   remove_keyboard: true,
        //   inline_keyboard: [
        //     [
        //       {
        //         text: texts[lang].button_1,
        //         callback_data: "artActionsPostPictureDescript",
        //       },
        //     ],
        //   ],
        // },
      }
    )
  ).data;
};

module.exports = {
    artActionsNOTDescriotionSend,
};
