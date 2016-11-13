# high-conversion-forms
Steps and guidelines on how to setup "High Conversion Forms"

## Udacity
#### This steps and guidelines are based on Udacity's course
- Course name: Building High Conversion Web Forms
- Course link: [Link](https://www.udacity.com/course/building-high-conversion-web-forms--ud890)

### References:
------
#### Luke Wroblewski (Product Director at Google)
- Website: http://www.lukew.com/about/

### Steps:
------
#### Step (#1):
**A. Picking appropriate input types:**
- Link: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type

**B. Add label**
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
- It's a best practice to nest the input inside the label:
```html
<label for="use-billing">
	<span>Use shipping address same as billing address</span>
	<input type="checkbox" id="use-billing">
</label>

<br>

<label for="tel-number>
	<span>Telephone number</span>
	<input type="tel" id="tel-number>
</label>
``` 
		
**C. Basic considerations when building forms:**
- How are you putting the labels in?;
- What kind of form control you use?;
- What kind of feedback you give to people as they're filling in this information;
- How do you organize it?;
- What do you do to message before and after parts of the form?;

**D. Label Sizing and Positions:**
- Landscape viewports: Labels should be next to elements;
- Portrait viewports: Labels should be above the elements;

**E. Add placeholders:**
**F. Calendar:**
- E.g. Ordering plane tickets, movie tickets, doctor appointments, etc.
- Use the browser's calendar widget
```html
<label for="fc">
	<span>Date</span>
	<input type="datetime-local" name="cal" id="fc">
</label>	
```
- [Calendar demo](http://codepen.io/greenido/pen/xwGEWO) 
- [Calendar custom styling](https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/#input_date)
- Use browser's date-pick:
```html
<h3>Pick a date and time</h3>
<label for="fc">
    <span>Date and Time</span>
    <input id="fc" type="datetime-local" name="cal">
</label>
```

**G. Autocomplete (Fill common fields like: Name, Address, Email, Phone number):**
- Reference: [https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en)
```html
<div class="row">
	<div class="input-field col-md-6">
		<label for="first_name">First Name</label>
		<input id="first_name" type="text" class="validate" required autocomplete="fname">
	</div>

	<div class="input-field col-md-6">
       		<label for="frmEmailA">Email</label>
        	<input id="frmEmailA" type="text" class="validate" required autocomplete="email">
	</div>
</div>

<div class="row">
	<div class="input-field col-md-6">
		<label for="phone">Phone</label>
		<input id="phone" name="phone" type="text" class="validate" required autocomplete="tel">
	</div>
</div>
```

**H. Autofocus:**
- Desktop: Automatically move the autofocus to the form field. 
	- (Potentially will prevent the backspace character from being used for navigation);
	- Recommended when you want to save users time;
	- Only focus on elements above the "fold";
- Mobile: Ignore the autofucos attribute so that the keyboard doesn't randomly appear;

**I. Use Past Data to Fill Inputs:**
- Using past daat to fillout the form.
- Reusing information will make users using the application faster.
- (`Note:` Filling to much information automatically might lead users to use wrong information).

**J. Validation:**
- Ensure that users know they are filling the form with the right information.
- Give realtime feedback and minimizing errors.
- (`Note:` Any front-end validation is not a replacement for the back-end validation).
- Numeric Inputs:
	- Use HTML5 attributes such as: min, max and step.
	- If a limitation in the possible values are needed, we should consider using input property range also with min, max, and step.
	- Reference: [http://www.wufoo.com/html5/types/7-number.html?num=2107](http://www.wufoo.com/html5/types/7-number.html?num=2107)
	- Example:
```html
<form>
	<table>
		<tr>
			<td><label for="quiz4">Quiz 4:</label></td>
			<td><input type="number" id="quiz4" min="0" max="100" step="10" value="0" required></td>
			<td>(needs min, max, and step)</td>
		</tr>
		<tr>
			<td></td>
			<td>Average: <output id="average">__</output></td>
			<td><button id="calculate" type="button">Calculate</button></td>
		</tr>
		<tr>
			<td><label for="grade">Grade:</label></td>
			<td><input type="text" pattern="A|A\+||([B-D][+-]?)|F" id="grade" size="2" minlength="1" maxlength="2" required></td>
			<td>(Extra credit: use "pattern" to check for A, A-, B, B+, B-, down to F.)</td>
		</tr>
		<tr>
			<td></td>
                	<td colspan=2><input type="submit"></td>
        	</tr>
	</table>
</form>

//Pattern explanation: Looks for an A or A+, OR look for a B or D with a "+" or "-" sign after it (if it needed it) OR just an F.
```
	
- Example 1 - Constraint validation API. Using setCustomValidity():
```html
<script>
	var puppyInput = document.querySelector('#puppy-input');
	var submit = document.querySelector('#submit');

	submit.onclick = function() {
		if (puppyInput.value !== "puppy") {
			puppyInput.setCustomValidity("The input should say 'puppy'. You typed: '" + puppyInput.value  + "'");
		} else {
			puppyInput.setCustomValidity("");
		}
	};
</script>
```

- Example 2 - Nuances of a complex validation form:
	- 16 - 100 characters (longer is better) -- return message if req is not met (E.g. "Needs more | fewer character")
	- At least one of these symbols: !, @, #, $, %, ^, &, * -- return message if req is not met (E.g. "Input a special character")
	- At least one number -- return message if req is not met (E.g. "Needs a number")
	- At least one lowercase letter -- return message if req is not met (E.g. "Needs a lowercase letter")
	- At least one uppercase letter -- return message if req is not met (E.g. "Needs an uppercase letter")
	- Add two field password validation to prevent Typos. (Check if both passwords are the same and if they meet all the above mentioned requirements)
	- Implemented code using setCustomValidity() [Link to Codepen.io](https://codepen.io/gustavolee/pen/qqZYPJ)


Importance of paying attention to small details
---
>"...the most important thing is to be iterative and to be in a process of learning. The worst case scenario you can get to is what I call the sort of culture of delivery. Which is, your whole processes are aligned to one ship date, and we redesigned checkout. Okay, what's the next project? And we shipped that, that's done. All right, that's a culture of delivery. A culture of learning is, hey, we're going to try this. Oh, let's see what we can learn before we actually build it. Oh, we started to build it. Let's prototype it, and make it better and better. Hey, we launched it. What happened? Let's measure. We should tweak that. Let's keep measuring. Let's keep learning. When you do that then you find all of these opportunities for optimization, and for insights, that you wouldn't have....

<a href="http://www.youtube.com/watch?feature=player_embedded&v=906x9i2A8jM
" target="_blank"><img src="http://img.youtube.com/vi/906x9i2A8jM/0.jpg" 
alt="Interview with Luke W part 4" width="240" height="180" border="10" /></a>

