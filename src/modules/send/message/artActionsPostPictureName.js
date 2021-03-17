const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Крок 4 успішно пройдено теж! \n\nНа даному етапі крок 5 з 5 - вкажи назву своєї картини !",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Шаг 4 успешно пройден тоже! \n\nНа данном этапе шаг 5 из 5 - укажи название своей картины !",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Step 4 passed successfully too! \n\nAt this stage, the step 5 of 5 - specify the name of your picture !",
      button_1: "Go back", 
  },
};

const artActionsPostPictureName = async (params) => {
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
                callback_data: "artActionsPostPictureHashtags",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artActionsPostPictureName,
};
