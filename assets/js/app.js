  // David Darnes code:
  var contactform = document.getElementById('js-form');
  var reciever = document.getElementById('js-reciever');
  var email = 'ahoy' + '@' + 'stezycki' + '.' + 'com';
  contactform.setAttribute('action', '//formspree.io/' + email);
  reciever.textContent = email;

  // function isParent(parent, child) {
  // var node = child.parentNode;
  //   while (node != null) {
  //     if (node == parent) {
  //       return true;
  //     }
  //     node = node.parentNode;
  //   }
  //   return false;
  // }

  // var checkbox = document.querySelector('input[name="toggle-checkbox"]');
  // var container = document.querySelector('.container');
  // document.addEventListener('click', function(e) {
  //   if (checkbox.checked == true) {
  //   if (!isParent(container, e.target) && checkbox.checked == true) {
  //     checkbox.checked = false;
  //   }
  // });

  // As per: http://jdp.org.uk/ajax/2015/05/20/ajax-forms-without-jquery.html
  if (document.forms[0] && window.FormData) {

    var message = new Object();
    message.loading = 'Loading&hellip';
    message.success = '🚀';
    message.failure = '🚫';

    var statusMessage = document.createElement('div');
    statusMessage.className = 'status';

    // Set up the AJAX request
    var request = new XMLHttpRequest();
    request.open('POST', '//formspree.io/' + email, true);
    request.setRequestHeader('accept', 'application/json');

    // Listen for the form being submitted
    contactform.addEventListener('submit', function(evt) {
      evt.preventDefault();
      contactform.appendChild(statusMessage);

      // Create a new FormData object passing in the form's key value pairs (that was easy!)
      var formData = new FormData(contactform);

      // Send the formData
      request.send(formData);

      // Watch for changes to request.readyState and update the statusMessage accordingly
      request.onreadystatechange = function() {
        // <4 =  waiting on response from server
        if (request.readyState < 4)
          statusMessage.innerHTML = message.loading;
        // 4 = Response from server has been completely loaded.
        else if (request.readyState === 4) {
          // 200 - 299 = successful
          if (request.status == 200 && request.status < 300)
            statusMessage.innerHTML = message.success;
            // TODO! Remove open class after timeout
          else
            contactform.insertAdjacentHTML('beforeend', message.failure);
        }
      }
    });
  }

// molten leading
moltenLeading("h1", {
  minline: 1.2,
  maxline: 1.4,
  minwidth: 400,
  maxwidth: 768
});

moltenLeading(".lead", {
  minline: 1.35,
  maxline: 2.0
});

moltenLeading("p", {
  minline: 1.4,
  maxline: 1.8,
  minwidth: 400,
  maxwidth: 768
});
