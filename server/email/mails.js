if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    sendDistributorEmail: function (email,content) {
      Mandrill.messages.sendTemplate ({
        "template_name": email.template,
        "template_content": [
        {}
        ],
        "message": {
          "global_merge_vars": [
            {
              // name is the name you gave the variable in your template
              "name": "userName",
              "content": content.userName
            },
            {
              // name is the name you gave the variable in your template
              "name": "fromName",
              "content": "Amazónica - Distribuidores"
            },

          ],

          // Merge vars are per recipient and only needed when you send out
          // one email to multiple users
          "merge_vars": [
            {}
          ],
          "to": [
            {"email": email.receiver}
          ]
        }
      });
    }, // sendDistributorEmail

    sendManagerEmail: function (email,content) {
      Mandrill.messages.sendTemplate ({
        "template_name": email.template,
        "template_content": [
        {}
        ],
        "message": {
          "global_merge_vars": [
            {
              // name is the name you gave the variable in your template
              "name": "managerName",
              "content": content.managerName
            },
            {
              "name": "distName",
              "content": content.distName
            },
            {
              "name": "distWeb",
              "content": content.distWeb
            },
            {
              "name": "distMail",
              "content": content.distMail
            },
            {
              "name": "distPhone",
              "content": content.distPhone
            },
            {
              "name": "distIsOpen",
              "content": content.distIsOpen
            },


          ],

          // Merge vars are per recipient and only needed when you send out
          // one email to multiple users
          "merge_vars": [
            {}
          ],
          "to": [
            {"email": email.receiver}
          ]
        }
      });
    }

  }); // Methods

  // sacado el lunes
  /*
Accounts.emailTemplates.siteName = "MySite";
Accounts.emailTemplates.from = "MySite <support@mysite.com>";
Accounts.emailTemplates.resetPassword.subject = function (user) {
    return "Message for " + user.profile.displayName;
};
Accounts.emailTemplates.resetPassword.text = function (user, url) {
    var signature = "MySite Bot";
    //var president = President.findOne();
    //if (president)
    //    president = Meteor.users.findOne(president.presidentId);
    //    signature = president.profile.displayName + ", the MySite President.";
    return "Dear " + user.profile.displayName + ",\n\n" +
        "Click the following link to set your new password:\n" +
        url + "\n\n" +
        "Please never forget it again!!!\n\n\n" +
        "Cheers,\n" +
        signature;
};
*/
//Accounts.emailTemplates.siteName = "MySite";
//Accounts.emailTemplates.from = "MySite <support@mysite.com>";
Accounts.emailTemplates.resetPassword.subject = function () {
    return "Mensaje de Styler " ;
};
Accounts.emailTemplates.resetPassword.text = function (user, url) {
    var signature = "Styler";
    //var president = President.findOne();
    //if (president)
    //    president = Meteor.users.findOne(president.presidentId);
    //    signature = president.profile.displayName + ", the MySite President.";
    return "Estimado,\n\n" +
        "Haga click aqui para crear una clave nueva:\n" +
        url + "\n\n" +
        "No se la olvide!!!\n\n\n" +
        "Saludos,\n" +
        signature;
};

Accounts.emailTemplates.enrollAccount.subject = function () {
    return "Mensaje de Styler" ;
};
Accounts.emailTemplates.enrollAccount.text = function (user, url) {
    var signature = "Styler";
    //var president = President.findOne();
    //if (president)
    //    president = Meteor.users.findOne(president.presidentId);
    //    signature = president.profile.displayName + ", the MySite President.";
    return "Estimado,\n\n" +
        "Haga click aqui para confirmar su cuenta:\n" +
        url + "\n\n" +

        "Saludos,\n" +
        signature;
};


} // isServer
