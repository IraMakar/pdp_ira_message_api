const axios = require("axios");

/*const texts = {
  uk: {
    text1: "Бажаєш глянути на кінцевий результат?",
    button_1: "Переглянути пост",
    button_2: "Повернутись назад",
  },
  ru: {
    text1: "Хочешь взглянуть на конечный результат?",
    button_1: "Посмотреть пост",
    button_2: "Вернуться обратно",
  },
  en: {
    text1: "Want to look at the end result?",
    button_1: "View post",
    button_2: "Go back",
  },
};*/

const artViewStatisticsByHashtags = async (params) => {
  const { chat_id, templateVars } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        //text: `Картина\n${templateVars.name}\nОпис: ${templateVars.description}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        text: "artViewStatisticsByHashtags",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: "backPicture",
              },
              {
                text: texts[lang].button_3,
                callback_data: "thisPictureForAdvertising",
              },
              {
                text: texts[lang].button_2,
                callback_data: "nextPicture",
              },
            ],
            [
              {
                text: texts[lang].button_4,
                callback_data: "advertising",
              },
            ],
            
          ],
        },
    }
    )
  ).data;
};

module.exports = {
    artViewStatisticsByHashtags,
};
