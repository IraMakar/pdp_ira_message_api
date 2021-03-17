const axios = require("axios");

const texts = {
  uk: {
    text1:
      "І крок 3 пройдено! \n\nНа даному етапі крок 4 з 5 - напиши хештеги по яких можна буде здійснювати пошук твоєї картини!",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "И шаг 3 пройден! \n\nНа данном этапе шаг 4 из 5 - напиши хэштеги по которым можно будет осуществлять поиск твоей картины!",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "And step 3 is passed! \n\nAt this stage, step 4 out of 5 - write hashtags by which it will be possible to search for your picture!",
      button_1: "Go back", 
  },
};

const artActionsPostPictureHashtags = async (params) => {
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
                callback_data: "artActionsPostPictureSize",
              },
            ],
          ],
        },
      }
    )
  ).data;   
};

module.exports = {
    artActionsPostPictureHashtags,
};
