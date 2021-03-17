const axios = require("axios");

const texts = {
    uk: {
        text1: "Вкажи своє ім'я (чи псевдонім) себе яко художника 👏",
    },
    ru: {
        text1: "Укажи свое имя (или псевдоним) себя, как художника 👏",
    },
    en: {
        text1: "Provide your name (or nickname) as an artist 👏",
    }
};

const artistName = async (params) => {
  const { chat_id, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: texts[lang].text1,
        reply_markup: {
            one_time_keyboard: false,
            remove_keyboard: true
          },
      }
    )
  ).data;
};

module.exports = {
    artistName,
};
