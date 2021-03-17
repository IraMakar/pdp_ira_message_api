const axios = require("axios");

const texts = {
    uk: {
        text1: "Ура ! Пост твоєї картини успішно створений!",
    },
    ru: {
        text1: "Ура! Пост твоей картины успешно создан!",
    },
    en: {
        text1: "Congratulations! Your picture post has been successfully created!",
    }
};

const artActionsPostPictureDoneText = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
      }
    )
  ).data;
};

module.exports = {
    artActionsPostPictureDoneText,
};
