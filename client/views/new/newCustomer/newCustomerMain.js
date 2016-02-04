Template.newCustomerMain.helpers({
  stepActiveTemplate: function() {
    var stepCompleted = Session.get('STEP_COMPLETED');

    switch (stepCompleted) {
      case 'COMPANY_CREATED':
        return 'newPlace';
        break;
      case 'PLACE_CREATED':
          return 'newPerson';
          break;
      default:
        return 'newCompany';
    }


  }
  });
