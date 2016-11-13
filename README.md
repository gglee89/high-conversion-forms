# high-conversion-forms
Steps and guidelines on how to setup "High Conversion Forms"

## Udacity
#### This steps and guidelines are based on Udacity's course
- Course name: Building High Conversion Web Forms
- Course link: [Link](https://www.udacity.com/course/building-high-conversion-web-forms--ud890)

### References:
#### Luke Wroblewski (Product Director at Google)
- Website: http://www.lukew.com/about/

### Steps:
#### Step (#1):
a. Picking appropriate input types
	- Link: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type
b. Add label
	- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
	- It's a best practice to nest the input inside the label:
	```
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
		
c. Basic considerations when building forms:
	- How are you putting the labels in?;
	- What kind of form control you use?;
	- What kind of feedback you give to people as they're filling in this information;
	- How do you organize it?;
	- What do you do to message before and after parts of the form?;

d. Label Sizing and Positions:
	- Landscape viewports: Labels should be next to elements;
	- Portrait viewports: Labels should be above the elements;

e. Add placeholders
f. Calendar
	- E.g. Ordering plane tickets, movie tickets, doctor appointments, etc.
	- Use the browser's calendar widget
		```
			<label for="fc">
				<span>Date</span>
				<input type="datetime-local" name="cal" id="fc">
			</label>	
		```
	- [Calendar demo](http://codepen.io/greenido/pen/xwGEWO) 
