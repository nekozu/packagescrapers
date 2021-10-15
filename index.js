const axios = require('axios')
const cheerio = require('cheerio')

const AXIOS_OPTIONS = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 9; ASUS_X00TD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
  },
};

  function npm(query) {
  return axios
    .get(
      `https://www.npmjs.com/search?q=${query}`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)
     
      const title = []
      const url = []
      const desc = []
      const update = []
      const tags = []
      const tagurl = []
      
    $("._0d2164ff > div > a > h3").each((i, el) => {
        title[i] = $(el).text();
      })

     $("._0d2164ff > div > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

     $("._0d2164ff > p").each((i, el) => {
        desc[i] = $(el).text().trim();
      })

     $("._657f443d").each((i, el) => {
        update[i] = $(el).text().trim();
      })

      $("._0d2164ff > ul > li > a").each((i, el) => {
        tags[i] = $(el).text().trim();
      })

    $("._0d2164ff > ul > li > a").each((i, el) => {
        tagurl[i] = $(el).attr("href");
      })

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          title: title[i],
          link: 'https://npmjs.com'+url[i],
          desc: desc[i],
          updated: update[i],
          tags: tags[i],
          tagurl: 'https://npmjs.com'+tagurl[i]
        };
      }
      return(result);
    });
}
  
  function pypi(q) {
  return axios
    .get(
      `https://pypi.org/search/?q=${q}`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)
     
      const title = []
      const url = []
      const desc = []
      const version = []
      const updated = []
      
    $(".package-snippet__name").each((i, el) => {
        title[i] = $(el).text().trim();
      })

     $(".unstyled > li > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

    $(".package-snippet__description").each((i, el) => {
        desc[i] = $(el).text().trim();
      })

    $(".package-snippet__version").each((i, el) => {
        version[i] = $(el).text().trim();
    })

    $(".package-snippet__released > time").each((i, el) => {
        updated[i] = $(el).text().trim();
    })

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          title: title[i],
          link: 'https://pypi.org'+url[i],
          desc: desc[i],
          version: version[i],
          update: updated[i]
        };
      }
      return(result);
    });
}


  function github(search) {
  return axios
    .get(
      `https://github.com/search?q=${search}&type=Repositories`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)
     
      const title = []
      const url = []
      
    $(".d-flex > div > a").each((i, el) => {
        title[i] = $(el).text().trim();
      })

     $(".d-flex > div > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          title: title[i],
          link: 'https://github.com'+url[i]
        };
      }
      return(result);
    });
}

module.exports = { github, npm, pypi }
