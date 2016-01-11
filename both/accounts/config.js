

AccountsTemplates.configure({
  //Behavior
  confirmPassword: false,
   enablePasswordChange: true,
   forbidClientAccountCreation: false,
   overrideLoginErrors: true,
   sendVerificationEmail: true,
   lowercaseUsername: true,
   focusFirstInput: true,

   // Appearance
   showAddRemoveServices: false,
   showForgotPasswordLink: true,
  // showChangePasswordLink: true,
   showLabels: true,
   showPlaceholders: true,
   showResendVerificationEmailLink: false,

   // Client-side Validation
   continuousValidation: true,
   negativeFeedback: true,
   negativeValidation: true,
   positiveValidation: true,
   positiveFeedback: true,
   showValidating: true,

   // Privacy Policy and Terms of Use
   privacyUrl: 'privacy',
   termsUrl: 'terms-of-use',

   // Redirects
   homeRoutePath: '/search',
   redirectTimeout: 4000,

   // Hooks
   //onLogoutHook: myLogoutFunc,
   //onSubmitHook: mySubmitFunc,
   //preSignUpHook: myPreSubmitFunc,
   //postSignUpHook: myPostSubmitFunc,

   // Texts
   texts: {
        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "optional",
        pwdLink_pre: "",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        resendVerificationEmailLink_pre: "Mail de verificacion perdido?",
        resendVerificationEmailLink_link: "Enviar de nuevo",
        resendVerificationEmailLink_suff: "",
        sep: "OR",
        signInLink_pre: "ifYouAlreadyHaveAnAccount",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "dontHaveAnAccount",
        signUpLink_link: "signUp",
        signUpLink_suff: "",
        socialAdd: "add",
        socialConfigure: "configure",
        socialIcons: {
            "meteor-developer": "fa fa-rocket",
        },
        socialRemove: "remove",
        socialSignIn: "signIn",
        socialSignUp: "signUp",
        socialWith: "with",
        termsPreamble: "clickAgree",
        termsPrivacy: "privacyPolicy",
        termsAnd: "and",
        termsTerms: "terms",
    }
  });

  var mySubmitFunc = function(error, state){
    if (!error) {
      if (state === "signIn") {
        //console.log("LOGGED IN");
        //console.log('relatedActode stored in Session > ' + Meteor.user().relatedActode);
        //Session.set('relatedActode', Meteor.user().relatedActode);

        // ...
      }
      if (state === "signUp") {
        console.log("USER REGISTERED");


        // Successfully registered
        // ...
      }
    }
  };

  AccountsTemplates.configure({
      onSubmitHook: mySubmitFunc
  });

AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('changePwd', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('resetPwd', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('enrollAccount', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('verifyEmail', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('forgotPwd', {layoutTemplate: 'appLayout'});
