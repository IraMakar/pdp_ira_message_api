const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Якщо хочеш зі мною зв'язатись то натисни на - Зв'язок з адміном",
      button_1: "Повернутись назад", 
  },
  ru: {
    text1:
      "Если хочешь со мной связаться то нажми на - Связь с админом",
      button_1: "Вернуться обратно", 
  },
  en: {
    text1:
      "If you want to contact with me click on - Contact the administrator",
      button_1: "Go back", 
  },
};

const errorText = async (params) => {
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
    errorText,
};
