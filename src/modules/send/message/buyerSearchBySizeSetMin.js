const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вкажи мінімальний розмір картини, яку шукаєш (00-00)",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Укажи минимальный размер картины, которую ищешь (00-00)",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Specify the minimum size of the picture you are looking for (00-00)",
      button_1: "Go back", 
  },
};

const buyerSearchBySizeSetMin = async (params) => {
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
                callback_data: "searchPictures",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  buyerSearchBySizeSetMin,
};
