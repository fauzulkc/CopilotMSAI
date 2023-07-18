function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SKillsMemberController',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}