const axios = require("axios");

const texts = {
    uk: {
      text1: "Цей функціонал платний",
      text2: "Бажаєш скористатися?",
      text3: "Статистика: \nВикористовуючи пошук за нікнеймом художника ваші картини було знайдено",
      text33: "разів",
      text4: "Використовуючи пошук за категоріями ваші картини було знайдено",
      text5: "Використовуючи пошук за розмірами ваші картини було знайдено",
      text6: "Використовуючи пошук за хештегами ваші картини було знайдено",
      text7: "Статистика ефективності хештегів:",
      text8: "Статистика знаходжень за категоріями:",
      text9: "Статистика переглядів картин:",
      text10: "переглянуто",
      text11: "вподобано",
      text12: "Статистика переглядів за нікнеймами:",
      button_1: "Оплатити",
      button_2: "По хештегах",
      button_3: "Хочу вернутись назад",
    },
    ru: {
      text1: "Этот функционал платный",
      text2: "Хочешь воспользоваться?",
      text3: "Статистика: \nИспользуя поиск по никнеймом художника ваши картины были найдены",
      text33: "раз",
      text4: "Используя поиск по категориям ваши картины было найдено",
      text5: "Используя поиск по размерам ваши картины было найдено",
      text6: "Используя поиск по хэштегом ваши картины было найдено",
      text7: "Статистика эффективности хештегов:",
      text8: "Статистика поиска по категориям:",
      text9: "Статистика просмотров картин:",
      text10: "просмотрено",
      text11: "лайков",
      text12: "Статистика просмотров за никнеймами:",
      button_1: "Оплатить",
      button_2: "За хэштегом",
      button_3: "Хочу вернуться назад",
    },
    en: {
      text1: "This functionality is paid",
      text2: "Do you want to use?",
      text3: "Statistics: \nYour artist's nickname search found your paintings",
      text33: "times",
      text4: "Using category search your pictures have been found",
      text5: "Using a search by size your paintings were found",
      text6: "Using a search by hashtag your paintings were found",
      text7: "Hashtag performance statistics:",
      text8: "Statistics of search by categories:",
      text9: "Statistics of views of pictures:",
      text10: "review",
      text11: "likes",
      text12: "Nickname views statistics:",
      button_1: "Pay",
      button_2: "By hashtags",
      button_3: "I want to go back",
    },
  };

const showStatisticByArtist = async (params) => {
  const { chat_id, lang, templateVars } = params;
  console.log(lang);
  return (
    await axios.post(
      `https://api.telegram.org/bot${process.env.token}/sendMessage`,
      {
        chat_id,
        text: `${texts[lang].text3} ${templateVars.byArtistSearchType} ${texts[lang].text33}
        ${texts[lang].text4} ${templateVars.byCategorySearchType} ${texts[lang].text33}
        ${texts[lang].text5} ${templateVars.bySizeSearchType} ${texts[lang].text33}
        ${texts[lang].text6} ${templateVars.byHashtagSearchType} ${texts[lang].text33}
        ${texts[lang].text7}
        ${templateVars.HashtagStatisticByArtist.filter(hashtag => !!hashtag.Hashtag).map(hashtag => `#${hashtag.Hashtag.tag} - ${hashtag.countByHashtag} ${texts[lang].text33}`).join('\n')}
        ${texts[lang].text8}
        ${templateVars.CategoryStatisticByArtist.map(category => `${category.category.settings[lang]} - ${category.countByCategory} ${texts[lang].text33}`).join('\n')}
        ${texts[lang].text9}
        ${templateVars.PicturesStatisticByArtist.map(picture => `${picture.name}: ${texts[lang].text10} - ${picture.countViewByPicture}, ${texts[lang].text11} - ${picture.countLikesByPicture}`).join('\n')}
        ${texts[lang].text12}
        ${templateVars.NicknameStatisticByArtist.map(nickname => `${nickname.nickname} - ${nickname.countByNickname}`).join('\n')}
        `,
        reply_markup: {
            inline_keyboard: [
              [
                {
                  text: texts[lang].button_3,
                  callback_data: "backToArtistMenu",
                },
              ],
            ],
          },
      }
    )
  ).data;
};

module.exports = {
    showStatisticByArtist,
};
