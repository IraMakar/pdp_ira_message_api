const axios = require("axios");

const texts = {
  uk: {
    text1:
      "Ми відправили художнику повідомлення, що вас зацікавила ця картина!",
  },
  ru: {
    text1:
      "Мы отправили художнику сообщение, что вас заинтересовала эта картина!",
  },
  en: {
    text1:
      "We sent a message to the artist that you are interested in this painting!",
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
