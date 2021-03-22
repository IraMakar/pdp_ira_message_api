const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Напиши нові хештеги по яких можна буде здійснювати пошук твоєї картини!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Напиши новые хэштеги по которым можно будет осуществлять поиск твоей картины!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Write new hashtags on which you can search for your picture!",
      button_1: "Go back", 
  },
};

const artEditPictureHashtags = async (params) => {
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
  artEditPictureHashtags,
};
