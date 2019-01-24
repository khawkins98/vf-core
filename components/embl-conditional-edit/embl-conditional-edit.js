// embl-conditional-edit

/**
 * Invoke emblConditionalEditDetectParam scopped to objects where
 * data-embl-js-conditional-edit is present
 */
function emblConditionalEdit() {
  const emblConditionalEdit = document.querySelectorAll('[data-embl-js-conditional-edit]');
  if (!emblConditionalEdit) {
    // exit: lists not found
    return;
  }
  if (emblConditionalEdit.length == 0) {
    // exit: lists not found
    return;
  }

  Array.prototype.forEach.call(emblConditionalEdit, (element, i) => {
    emblConditionalEditDetectParam(location.href,element);
  });
}

/**
 * Detects `?embl-conditional-edit=enabled` or `?embl-conditional-edit=1`
 * and adds `.embl-coditional-edit__enabled` to display the edit links
 * @param {string} [url] - the url to check for an enabling param
 * @param {element} [element] - the scopped element to be processed
 */
function emblConditionalEditDetectParam(url,element) {
  var captured = /embl-conditional-edit=([^&]+)/.exec(url);
  if (captured == null) {
    // value not found

    // also try against any parent iframe url
    if (window.self !== window.top) {
      emblConditionalEditDetectParam(parent.window.location,element);
    }

    return;
  }
  captured = captured[1];

  if (captured == '1' || captured == 'enabled') {
    element.className += ' ' + 'embl-coditional-edit__enabled';
  }
}

emblConditionalEdit();
