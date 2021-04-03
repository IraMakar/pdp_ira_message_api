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

const notificationToAstistAboutApplying = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text:
          lang == "uk"
            ? `Заявка:\nКористувач: ${templateVars.user_login?`@${templateVars.user_login}`:`${templateVars.phone}`}\nІм'я картини: ${templateVars.picture_name}`
            : lang == "ru"
            ? `Заявка:\nПользователь: ${templateVars.user_login?`@${templateVars.user_login}`:`${templateVars.phone}`}\nИмя картины: ${templateVars.picture_name}`
            : `Application:\nUser: ${templateVars.user_login?`@${templateVars.user_login}`:`${templateVars.phone}`}\nName of Picture: ${templateVars.picture_name}`,
      }
    )
  ).data;
};

module.exports = {
  notificationToAstistAboutApplying,
};
