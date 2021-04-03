const axios = require("axios");

const texts = {
  uk: {
    text1: "Гортай і вибирай картину👆",
    button_4: "Повернутись назад",
    picture: "Картина: ",
    descript: "Опис: ",
    size: "Розмір: ",
    painter: "Художник: "
  },
  ru: {
    text1: "Листай и выбирай картину👆",
    button_4: "Bернуться обратно",
    picture: "Картина: ",
    descript: "Описание: ",
    size: "Размер: ",
    painter: "Художник: "
  },
  en: {
    text1: "Flip and choose a picture👆",
    button_4: "Go back",
    picture: "Picture: ",
    descript: "Description: ",
    size: "Size: ",
    painter: "Painter: "
  },
};

const artEditSelectedPictureDone = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        //photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Photoshop-screenshot.JPG/1200px-Photoshop-screenshot.JPG",
        caption: `${texts[lang].picture}\n${templateVars.name}\n${texts[lang].descript}${templateVars.description}\n${texts[lang].size}${templateVars.height}х${templateVars.width}\n${texts[lang].painter}${templateVars.nickname}\nHashtags: ${templateVars.hashtags}`,
        //caption: "Картина\n${templateVars.name}\nОпис:",
        reply_markup: {
            inline_keyboard: [
              [
                {
                  text: texts[lang].button_4,
                  callback_data: "actionsWithPictures",
                },
              ],
              
            ],
          },
      }
    )
  ).data;
};

module.exports = {
  artEditSelectedPictureDone,
};
