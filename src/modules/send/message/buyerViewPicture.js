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
    text1: "Листай и пересматривай картини👆",
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
    text1: "Flip and view pictures👆",
    button_1: "<-",
    button_2: "->",
    button_3: "🤍",
    button_6: "❤️",
    button_4: "Go back",
    button_5: "Interested",
    picture: "Picture: ",
    descript: "Description: ",
    size: "Size: ",
    painter: "Painter: "
  },
};

const buyerViewPicture = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        // caption: `${texts[lang].picture}\n${templateVars.name}\nОпис: ${templateVars.description}\nCategory ${templateVars.category}\nРозмір ${templateVars.height}х${templateVars.width}\nХудожник:${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        caption: `${texts[lang].picture}${templateVars.name}\n${texts[lang].descript}${templateVars.description}\n${texts[lang].size}${templateVars.height}х${templateVars.width}\n${texts[lang].painter}${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: templateVars.liked ? texts[lang].button_6 : texts[lang].button_3,
                callback_data: `like_${templateVars.picture_id}`,
              },
              {
                text: texts[lang].button_5,
                callback_data: `apply_${templateVars.picture_id}`,
              },
            ],
            [
              {
                text: texts[lang].button_1,
                callback_data: "backPicture",
              },
              {
                text: texts[lang].button_2,
                callback_data: "nextPicture",
              },
            ],
            [
              {
                text: texts[lang].button_4,
                callback_data: "searchPictures",
              },
            ],
          ],
        },
      }
    )
  ).data;
};

module.exports = {
  buyerViewPicture,
};
