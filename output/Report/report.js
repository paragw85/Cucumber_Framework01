$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login with valid loginid and password",
  "description": "",
  "id": "login-feature;login-with-valid-loginid-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on loginBtn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters loginid \"\u003cloginid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User move mouse pointer on Hello Username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User cliks on logout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User logged out from account",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-feature;login-with-valid-loginid-and-password;",
  "rows": [
    {
      "cells": [
        "loginid",
        "Password"
      ],
      "line": 17,
      "id": "login-feature;login-with-valid-loginid-and-password;;1"
    },
    {
      "cells": [
        "9665571930",
        "parag#9665"
      ],
      "line": 18,
      "id": "login-feature;login-with-valid-loginid-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 74661439150,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "login with valid loginid and password",
  "description": "",
  "id": "login-feature;login-with-valid-loginid-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User click on loginBtn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters loginid \"9665571930\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Password \"parag#9665\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is successfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User move mouse pointer on Hello Username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User cliks on logout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User logged out from account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.click_on_Signin1()"
});
formatter.result({
  "duration": 18424798403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9665571930",
      "offset": 21
    }
  ],
  "location": "LoginSteps.username(String)"
});
formatter.result({
  "duration": 86243541,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d(\u0027ap_email\u0027)]\"}\n  (Session info: chrome\u003d70.0.3538.110)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP3\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64939}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.110, webStorageEnabled: true}\nSession ID: 56e57556f50e4c641a3c2c0c8918b307\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d(\u0027ap_email\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat action.LoginAction.user_enters_username(LoginAction.java:20)\r\n\tat steps.LoginSteps.username(LoginSteps.java:25)\r\n\tat ✽.And User enters loginid \"9665571930\"(login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.click_on_continue1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "parag#9665",
      "offset": 22
    }
  ],
  "location": "LoginSteps.user_enters_password1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_onSignIn1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.moveOver_on_hello()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clickOn_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_loggedOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2107322272,
  "status": "passed"
});
});