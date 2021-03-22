const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Вкажи хештеги за якими ти баєаш переглянути картини",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Шаг 2 успешно пройден тоже! \n\nНа данном этапе шаг 3 из 5 - укажи размер своей картины (00-00)!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Step 2 passed successfully too! \n\nAt this stage, the step 3 of 5 - specify the size of your picture (00-00)!",
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
