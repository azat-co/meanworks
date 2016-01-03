'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Accounts',
    'state': 'accounts'
  },
  {
    'title': 'Transactions',
    'state': 'transactions'
  }
];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('ngFullstackNewApp')
  .controller('NavbarController', NavbarController);
