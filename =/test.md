---
layout: default_page
title: Test
---
<!-- <div class="kwes-form"> -->
  <form id="js-form" class="form kwes-form" method="POST" action="https://kwes.io/api/foreign/forms/k09Qhdxl4WbBxXctMo8v" mode="test">
	<fieldset class="formgroup">
	  <div class="formfield">
	    <span class="label">To:</span>
	    <span id="js-reciever" class="reciever">ahoy@stezycki.com</span>
	  </div>
	  <div class="formfield">
	    <label class="label" for="subject">Subject:</label>
	    <input type="text" name="subject" id="subject" placeholder="What is your message about?">
	  </div>
	  <div class="formfield">
	    <label class="label" for="email">From:</label>
	    <input type="email" name="email" id="email" placeholder="your email ✱" required="" rules="required|email|max:255">
	  </div>
	  <div class="formfield  formfield--full">
	    <textarea name="message" placeholder="Your message&hellip; ✱" class="textarea" required="" rules="required"></textarea>
	    <button type="submit" class="submit"><svg class="submit__icon" width="19px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#submit"></use></svg></button>
	  </div>
	</fieldset>
  </form>
<!-- </div> -->
<script src="https://kwes.io/js/kwes.js"></script>