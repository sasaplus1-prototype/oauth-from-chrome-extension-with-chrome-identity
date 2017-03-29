'use strict';

chrome.identity.getAuthToken({
  interactive: false,
}, function(token) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  }

  console.log(token);

  if (!token) {
    chrome.identity.getAuthToken({
      interactive: true,
    }, function(token) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }

      console.log(token);
    });
  }
});
