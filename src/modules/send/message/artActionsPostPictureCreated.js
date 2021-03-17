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

const artActionsPostPictureCreated = async (params) => {
  const { chat_id, templateVars } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        caption: `Картина\n${templateVars.name}\nОпис: ${templateVars.description}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`
        //text: texts[lang].text1,
        /*reply_markup: {
          remove_keyboard: true,
          inline_keyboard: [
            [
              {
                text: texts[lang].button_1,
                callback_data: "viewCreatedPost",
              },
            ],
            [
              {
                text: texts[lang].button_2,
                callback_data: "backToArtistMenu",
              },
            ],
          ],
        },*/
      }
    )
  ).data;
};

module.exports = {
    artActionsPostPictureCreated,
};
