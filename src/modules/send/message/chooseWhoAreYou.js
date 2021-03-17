const axios = require("axios");

const texts = {
    uk: {
        text1: "А тепер ти попав на найголовніший етап - етап вибору хто ти. \n\nНу і хто ж ти?",
        button_1: "Я - шукач картин",
        button_2: "Я - художник"
    },
    ru: {
        text1: "А теперь ты попал на самый главный этап - этап выбора кто ты. \n\nНу и кто же ты?",
        button_1: "Я - искатель картин",
        button_2: "Я - художник"
    },
    en: {
        text1: "And now you have reached the most important stage - the stage of choosing who you are. \n\nWell, who are you?",
        button_1: "I am a seeker of paintings",
        button_2: "I am an artist"
    },
};

const chooseWhoAreYou = async (params) => {
  const { chat_id, lang } = params;
  console.log(lang);
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
                callback_data: "buyer",
                text: texts[lang].button_1,
              },
            ],
            [
              {
                callback_data: "artist",
                text: texts[lang].button_2,
              },
            ],
          ],
          one_time_keyboard: true,
          resize_keyboard: true
          //remove_keyboard: true,
          //"one_time_keyboard": true,
      //"resize_keyboard": true
        },
      }
    )
  ).data;
};

module.exports = {
    chooseWhoAreYou,
};
