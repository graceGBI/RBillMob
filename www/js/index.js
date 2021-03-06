/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var ax = null;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        ax = new Axelib({
            code: "3afD9ff",
            name: "My_Project",
            active: '#EB207A',
            //debug: true,
            version: 0.1
        });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //0
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        if (navigator && navigator.splashscreen)
            navigator.splashscreen.hide();

        if (localStorage && localStorage.getItem('ax')) {
            var axStorage = localStorage.getItem('ax');
            var axJson = null;
            console.log("ax storage :" + axStorage)
            try {
                axJson = JSON.parse(axStorage);
                console.log("ax json parse " + axJson);
            } catch (e) {
                $(".splash").hide();
                console.log("error par json axe storage");
            }
            if (axJson != null && axJson.token != null && axJson.token.usr != null) {
                $(".splash").hide();
                $(".panel .panel-left").hide();
                Rbill.fw7.views[0].router.loadPage('pages/home.html');
            } else {
                $(".splash").hide();
            }

        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    events: function() {

        //All Framework7 handlers here !!!
        //ex : $$(".btn").on("click", function() { console.log("action") });
        //Rbill.fw7.onPageInit('search', function(){

        //});


    }
};