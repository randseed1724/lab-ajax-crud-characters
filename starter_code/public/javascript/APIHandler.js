class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    console.log('BASE:  ',this.BASE_URL = baseUrl);
  }

  getFullList () {
      $.ajax({
        method: "GET",
        url: "http://ih-api.herokuapp.com/characters",
        success: function (response) {
          console.log(response);

          $("div.character-info").first().remove();
          response.forEach( (response) => {
            var fetchAll =
             `<div class="character-info">` +
             `<div class="name"> Name: ` + response.name + `</div>`+
             `<div class="occupation"> Occupation: `+response.occupation+`</div>`+
             `<div class="debt"> Debt: `+response.debt+`</div>`+
             `<div class="weapon"> Weapon: `+response.weapon+`</div>`+
             `</div>`;
             console.log(fetchAll);
           $(fetchAll).appendTo('.characters-container');
       });
     },

        error: function (err) {
          console.log("%cERROR", "color: yellow; font-size: small");
        },
      });
  }

  getOneRegister (id) {
    $.ajax({
      method: "GET",
      url: "http://ih-api.herokuapp.com/characters/" + id,
      success: function (response) {
        console.log(response);
        $("div.character-info").first().remove();
          var fetchAll =
           `<div class="character-info">` +
           `<div class="name"> Name: ` + response.name + `</div>`+
           `<div class="occupation"> Occupation: `+response.occupation+`</div>`+
           `<div class="debt"> Debt: `+response.debt+`</div>`+
           `<div class="weapon"> Weapon: `+response.weapon+`</div>`+
           `</div>`;
           console.log(fetchAll);
         $(fetchAll).appendTo('.characters-container');
   },

      error: function (err) {
        console.log("%cERROR", "color: red; font-size: small");
      },
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      method: 'POST',
      url: this.BASE_URL + "/characters",
      data: characterInfo,
      success: function (character) {
        $("div.character-info").remove();
        var tempDiv =
          `<div class="character-info">` +
          `<div class="name"> <strong>Name:</strong> ` + character.name + `</div>`+
          `<div class="occupation"> <strong>Occupation:</strong> `+character.occupation+`</div>`+
          `<div class="debt"> <strong>Debt:</strong> `+character.debt+`</div>`+
          `<div class="weapon"> <strong>Weapon:</strong> `+character.weapon+`</div>`+
          `</div>`;
        $(tempDiv).appendTo('.characters-container');
        console.log("saved");
        console.log(this.url);
      },
      error: function (response) {
        console.log("error dude");
      }
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
