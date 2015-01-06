App = Ember.Application.create({
    LOG_TRANSITIONS :true
});

// Adapter initialization
App.ApplicationAdapter = DS.LSAdapter;

//Fixture Data
/* 
 * Creates default users in the browser's localStorage
*/

var defaultUsers = {
    "App.Member":{
        "records":{
            "1":{
                    'id': 1,
                    'firstname': '​Joe',
                    'lastname': '​Smith',
                    'city': '​Detroit',
                    'state': 'MI',
                    'phonenumber': '313 789 3948'
                },
            "2":{
                    'id': 2,
                    'firstname': '​Adam',
                    'lastname': '​Baker',
                    'city': '​Chicago',
                    'state': 'IL',
                    'phonenumber': '215 678 9834'
                },
            "3":{
                    'id': 3,
                    'firstname': '​Mary',
                    'lastname': '​Thomas',
                    'city': '​​New York',
                    'state': 'NY',
                    'phonenumber': '248 934 5670'
                }
        }
    }
};

if (localStorage) {
    if ( !localStorage.getItem('DS.LSAdapter') ){
        localStorage.setItem( 'DS.LSAdapter', JSON.stringify(defaultUsers) );
    }
} else {
    throw new Error("Your browser doesn't seem to support localStorage, which is annoying for the purpose of this demo :P");
}

//Routers
App.Router.map(function() {
	this.resource("members");
    this.resource("city", {path: "members/:city"});
    this.resource("member", {path: "member/:id"});
});



//Custom Components
App.DropdownListComponent = Em.Component.extend({
	classNames: 'btn-group',
	isDropdownVisible: false,
	valueKey: 'id',
	labelKey: 'city',

	selectedOption: function() {
		if (Ember.isEmpty(this.get('value'))) {
			return { id: 0, city: 'Select City' };
		} else {
			return this.get('options').findProperty('id', this.get('value'));
		}
	}.property('options', 'value'),
 
	btnClassName: function(){
		return 'btn-'+this.get('item');
	}.property('item'),

	actions: {
		toggle: function(item){
			this.toggleProperty('isDropdownVisible');
		},
		select: function(opt) {
			this.set('value', opt.id);
            this.toggleProperty('isDropdownVisible');
		}
	}
});