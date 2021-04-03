const axios = require("axios");

const texts = {
  uk: {
    //text1: "Бажаєш глянути на кінцевий результат?",
    picture: "Картина: ",
    descript: "Опис: ",
    size: "Розмір: ",
    painter: "Художник: "
  },
  ru: {
    //text1: "Хочешь взглянуть на конечный результат?",
    picture: "Картина: ",
    descript: "Описание: ",
    size: "Размер: ",
    painter: "Художник: "
  },
  en: {
    //text1: "Want to look at the end result?",
    picture: "Picture: ",
    descript: "Description: ",
    size: "Size: ",
    painter: "Painter: "
  },
};

const artActionsPostPictureCreated = async (params) => {
  const { chat_id, templateVars } = params;
  let {lang} = params;
  if (!lang) {
    lang = "uk"
  }
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        caption: `${texts[lang].picture}${templateVars.name}\n${texts[lang].descript}${templateVars.description}\n${texts[lang].size}${templateVars.height}х${templateVars.width}\n${texts[lang].painter}${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`
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
