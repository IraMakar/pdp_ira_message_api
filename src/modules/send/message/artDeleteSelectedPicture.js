const axios = require("axios");

const texts = {
  uk: {
    picture: "Картина: ",
    descript: "Опис: ",
    size: "Розмір: ",
    painter: "Художник: ",
    chooseText: "Твій вибір для ВИДАЛЕННЯ: 👆"
  },
  ru: {
    picture: "Картина: ",
    descript: "Описание: ",
    size: "Размер: ",
    painter: "Художник: ",
    chooseText: "Твой выбор для УДАЛЕНИЕ: 👆"
  },
  en: {
    picture: "Picture: ",
    descript: "Description: ",
    size: "Size: ",
    painter: "Painter: ",
    chooseText: "Your сhoice to REMOVE: 👆"
  },
};
const artDeleteSelectedPicture = async (params) => {
  const { chat_id, templateVars, lang } = params;
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendPhoto`,
      {
        chat_id,
        photo: templateVars.photoUrl,
        //photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Photoshop-screenshot.JPG/1200px-Photoshop-screenshot.JPG",
        caption: `${texts[lang].picture}${templateVars.name}\n${texts[lang].descript}${templateVars.description}\n${texts[lang].size}${templateVars.height}х${templateVars.width}\n${texts[lang].painter}${templateVars.nickname}\nHashtags: ${templateVars.hashtags}\n\n${texts[lang].chooseText}`,
        //caption: "Картина\n${templateVars.name}\nОпис:",
      }
    )
  ).data;
};

module.exports = {
    artDeleteSelectedPicture,
};
