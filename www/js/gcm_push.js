//Send ID : Project number in Google Developer console
var senderId = "993553084286";

//var ax = { user : { id: 15 } };

var registerForToken = function() {
    
    var pushNotification = (window.plugins) ? window.plugins.pushNotification : null;
    
    if (pushNotification) {
        //register for GCM
        pushNotification.register(
            function(id) {
                
                var data2 = { "token": id };
                
                ax.ServerCall("deviceinit", "instance", data2, null, function(e) {
                    console.log("DEVICE INIT");
                    console.log(e);
                }, function(e) {
                    console.warn("DEVICE INIT ERROR !!!");
                    console.log(e);
                });

                //set GCM notification callback
                addCallback('onNotificationGCM', onNotificationGCM);
            },

            function(error) {
                console.log("Error " + error.toString());
            }, {
                "senderID": senderId,
                "ecb": "pushCallbacks.onNotificationGCM"
            }
        );
    }
};
    
function addCallback(key, callback) {
    if (window.pushCallbacks === undefined) {
        window.pushCallbacks = {}
    }
    window.pushCallbacks[key] = callback;
};
   
function onNotificationGCM (e) {
    
    //console.log(JSON.stringify(e));
    
    switch (e.event) {
        case 'registered':
            if (e.regid.length > 0) {
                //alert("Token received: " + JSON.stringify(e.regid));
                // Register the device to the server here
                var data = { "push_token": e.regid };
                ax.ServerCall("update", "user", data, ax.user.id, null, null);
            }
            break;

        case 'message':
            var notif = e.payload;
            var title = notif.title;
            var message = notif.message;
            //alert("Push received: " + JSON.stringify(notif));
            //alert(message);
            navigator.notification.confirm(
                message, // message
                function() {    // callback to invoke with index of button pressed
                    ax.popupmessage({
                        message: "<div class='material-icons'>&#xE88F;</div> New notification received !"
                    });
                },
                title,   // title
                ['OK']   // buttonLabels
            );
            break;
            
        case 'error':
            alert('GCM error = ' + e.msg);
            break;
        default:
            alert('An unknown GCM event has occurred.');
            break;
    }
};

