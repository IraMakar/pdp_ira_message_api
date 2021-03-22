const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
  ru: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
  en: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
};

const applicationWasSent = async (params) => {
  const { chat_id, lang } = params;
  console.log(lang);
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
  applicationWasSent,
};
