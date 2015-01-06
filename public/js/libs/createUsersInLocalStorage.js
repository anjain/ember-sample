/* 
 * Creates default users in the browser's localStorage so the demo doesn't look like shit
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
                    'city': '​​New Yrok',
                    'state': 'NY',
                    'phonenumber': '248 934 5670'
                }
        }
    }
};

if (localStorage) {
    if ( !localStorage.getItem('DS.LSAdapter') )
        localStorage.setItem( 'DS.LSAdapter', JSON.stringify(defaultUsers) );
} else {
    throw new Error("Your browser doesn't seem to support localStorage, which is annoying for the purpose of this demo :P");
}
