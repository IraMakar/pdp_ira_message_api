const axios = require("axios");

const texts = {
  uk: {
    text1: "Гортай і переглядай картини👆",
    button_1: "<-",
    button_2: "->",
    button_3: "🤍",
    button_6: "❤️",
    button_4: "Повернутись назад",
    button_5: "Зацікавила",
    picture: "Картина: ",
    descript: "Опис: ",
    size: "Розмір: ",
    painter: "Художник: "
  },
  ru: {
    text1: "Листай и выбирай картину👆",
    button_1: "<-",
    button_2: "->",
    button_3: "🤍",
    button_6: "❤️",
    button_4: "Вернуться назад",
    button_5: "Заинтересовала",
    picture: "Картина: ",
    descript: "Описание: ",
    size: "Размер: ",
    painter: "Художник: "
  },
  en: {
    text1: "Flip and choose a picture👆",
    button_1: "<-",
    button_2: "->",
    button_3: "🤍",
    button_6: "❤️",
    button_4: "Back",
    button_5: "Interested",
    picture: "Picture: ",
    descript: "Description: ",
    size: "Size: ",
    painter: "Painter: "
  },
};

const advertisingPictureMessage = async (params) => {
  const { chat_id, templateVars } = params;
  let {lang} = params;
  if (!lang) {
    lang = "en";
  }
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        caption: `${texts[lang].picture}${templateVars.name}\n${texts[lang].descript}${templateVars.description}\n${texts[lang].size}${templateVars.height}х${templateVars.width}\n${texts[lang].painter}${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: texts[lang].button_5,
                callback_data: `apply_${templateVars.picture_id}`,
              },
            ],
            [
              {
                text: texts[lang].button_4,
                callback_data: "backToBuyerMenu",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
    advertisingPictureMessage,
};
