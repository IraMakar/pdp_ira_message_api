const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вкажи хештег за яким ти бажаєш переглянути картини",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Укажи хэштег по которому ты хочешь посмотреть картины",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Specify the hashtag by which you want to view the pictures",
      button_1: "Go back", 
  },
};

const buyerSearchByHashtag = async (params) => {
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
    buyerSearchByHashtag,
};
