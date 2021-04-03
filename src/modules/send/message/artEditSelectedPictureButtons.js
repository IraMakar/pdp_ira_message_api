const axios = require("axios");

const texts = {
  uk: {
    text1: "Що саме ти хочеш змінити?",
    button_1: "Категорію",
    button_2: "Фото",
    button_3: "Опис",
    button_4: "Розмір",
    button_5: "Хештеги",
    button_6: "Назву",
    button_7: "Назад",
  },
  ru: {
    text1: "Что именно ты хочешь изменить?",
    button_1: "Категорию",
    button_2: "Фото",
    button_3: "Описание",
    button_4: "Размер",
    button_5: "Хэштеги",
    button_6: "Название",
    button_7: "Назад",
  },
  en: {
    text1: "What exactly do you want to change?",
    button_1: "Category",
    button_2: "Photo",
    button_3: "Description",
    button_4: "Size",
    button_5: "Hashtags",
    button_6: "Name",
    button_7: "Back",
  },
};

const artEditSelectedPictureButtons = async (params) => {
  const { chat_id, lang, templateVars } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: `editCategory_${templateVars.picture_id}`,
              },
              {
                text: texts[lang].button_2,
                callback_data: `editImage_${templateVars.picture_id}`,
              },
            ],
            [
              {
                text: texts[lang].button_3,
                callback_data: `editDescription_${templateVars.picture_id}`,
              },
              {
                text: texts[lang].button_4,
                callback_data: `editSize_${templateVars.picture_id}`,
              },
            ],
            [
              {
                text: texts[lang].button_5,
                callback_data: `editHashtags_${templateVars.picture_id}`,
              },
              {
                text: texts[lang].button_6,
                callback_data: `editNamePicture_${templateVars.picture_id}`,
              },
            ],
            [
              {
                text: texts[lang].button_7,
                callback_data: "editPostOfPicture",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  artEditSelectedPictureButtons,
};
