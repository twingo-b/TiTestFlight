// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var testflight = require('co.saiten.ti.testflight');
Ti.API.info("module is => " + testflight);

testflight.takeOff("[TEAM TOKEN]");

Ti.API.debug("Start Logging");

Ti.API.info("passCheckPoint");
testflight.passCheckpoint("checkpoint1");

Ti.API.debug("addCustomEnvironmentInformation");
testflight.addCustomEnvironmentInformation("key", "value");

testflight.passCheckpoint("checkpoint2");

Ti.API.debug("OpenFeedbackView");
testflight.openFeedbackView();

testflight.trace("trace");
testflight.debug("debug");
testflight.info("info");
testflight.warn("warn");
testflight.error("error");

Ti.API.debug("End");
