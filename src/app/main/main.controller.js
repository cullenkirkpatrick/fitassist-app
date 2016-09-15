(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, $rootScope, $state, subscriptionService) {
    var vm = this;
    vm.eventsLoaded = false;
    vm.cancelSubscripton = cancelSubscripton;
    vm.calView = "month";
    vm.viewDate = new Date();
    vm.calTitle = "Test";
    vm.getEvents = getEvents;
    vm.getEvents();

    function getEvents(){
      $timeout(function() {
        vm.events = [
          {
            id: 1,
            title: 'Sample Strength', // The title of the event
            startsAt: new Date(), // A javascript date object for when the event starts
            endsAt: new Date(), // Optional - a javascript date object for when the event ends
            color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
              primary: '#e3bc08', // the primary event color (should be darker than secondary)
              secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
            },
            actions: [{ // an array of actions that will be displayed next to the event title
              label: '<i class=\'fa fa-pencil\'></i>', // the label of the action
              cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
              onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
                $log.info('Edit event' + angular.toJson(args.calendarEvent));
              }
            }],
            draggable: true, //Allow an event to be dragged and dropped
            incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
            cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
            allDay: false // set to true to display the event as an all day event on the day view
          },
          {
            id: 2,
            title: 'Sample Run', // The title of the event
            startsAt: new Date("September 15, 2016"), // A javascript date object for when the event starts
            endsAt: new Date("September 15, 2016"), // Optional - a javascript date object for when the event ends
            color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
              primary: '#555555', // the primary event color (should be darker than secondary)
              secondary: '#515151' // the secondary event color (should be lighter than primary)
            },
            actions: [{ // an array of actions that will be displayed next to the event title
              label: '<i class=\'fa fa-pencil\'></i>', // the label of the action
              cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
              onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
                $log.info('Edit event' + angular.toJson(args.calendarEvent));
              }
            }],
            draggable: true, //Allow an event to be dragged and dropped
            incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
            cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
            allDay: false // set to true to display the event as an all day event on the day view
          },
          {
            id: 3,
            title: 'Weigh In', // The title of the event
            startsAt: new Date("September 15, 2016"), // A javascript date object for when the event starts
            endsAt: new Date("September 15, 2016"), // Optional - a javascript date object for when the event ends
            color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
              primary: '#FF0000', // the primary event color (should be darker than secondary)
              secondary: '#FF0000' // the secondary event color (should be lighter than primary)
            },
            actions: [{ // an array of actions that will be displayed next to the event title
              label: '<i class=\'fa fa-pencil\'></i>', // the label of the action
              cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
              onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
                $log.info('Edit event' + angular.toJson(args.calendarEvent));
              }
            }],
            recursOn: 'month',
            draggable: true, //Allow an event to be dragged and dropped
            incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
            cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
            allDay: false // set to true to display the event as an all day event on the day view
          }
        ];
        vm.eventsLoaded = true;
      }, 2000);
    }

    vm.eventClicked = function(event) {
      $log.info('Clicked', angular.toJson(event.id));
    };

    activate();

    function activate() {
      if(!$rootScope.loggedInUser){
        $state.go('login');
      }
    }

    function cancelSubscripton(){
      subscriptionService.subscribe.cancelSubscripton($rootScope.loggedInUser.stripe_subscription).then(function(res){
        $log.info("CANCELED: " + angular.toJson(res));
      });
    }

  }
})();
