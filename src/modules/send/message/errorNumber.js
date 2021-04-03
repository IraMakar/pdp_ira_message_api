const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Аяй... не вводьте таку велику кількість цифр",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Аяй ... не вводите такое большое количество цифр",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Ohh... Please don't enter so many numbers",
      button_1: "Go back", 
  },
};

const errorNumber = async (params) => {
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
        //         callback_data: "exhibitPicture",
        //       },
        //     ],
        //   ],
        // },
      }
    )
  ).data;
};

module.exports = {
    errorNumber,
};
