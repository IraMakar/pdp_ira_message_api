const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Крок 1 успішно пройдено! \n\nНа даному етапі крок 2 з 5 - напиши опис до своєї картини!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Шаг 1 успешно пройден! \n\nНа данном этапе шаг 2 из 5 - напиши описание к своей картины!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "Step 1 successfully passed! \n\nAt this stage, the step 2 of 5 - write a description to your picture!",
      button_1: "Go back", 
  },
};

const artActionsPostPictureDescript = async (params) => {
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
                callback_data: "artActionsPostPictureImage",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    artActionsPostPictureDescript,
};
