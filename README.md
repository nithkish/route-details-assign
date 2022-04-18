# Route Details Assignment

done for Instafreight

by Nithin Kishore J
email : nithinkishoreofficial@gmail.com
mobile: +917709532932

##Coverage

Due to lack of time few things are not covered in this POC. They are listed below.

1.Transition of elements have been only implemented in cargo item form page while adding the cargo item. all other transition is the default react ones.

2. Unit test cases using Jest librrary.
3. Started off with css, didnt switch back to sass as i am new to writing sass and will take some time(there were few areas where SASS functionalities could have been used).

4.Made use of inline css for components that were already present.

5. Responsiveness of the page.

##Assumptions

1. default date populated is todays date for pick up date.

2. default time selected to be 10:00 -12:00 for the pick up time.

3. for fixed and semi-flexible scheduling strategy the estimated arrival is undefined hence hardcoded not to display anything.

4. Gate reference button and save button are unresponsive as the implementation is out of scope.

##Project Structure

All the components are categorized into two folders.

1.components - components containing the main content and logic of the page.
2.utilComponents - components which can be reused in other components following the same patterns.

##Main Libraries Used

1.reactstrap - a subset of bootstrap, primarily used because of the ease of usage.
2.fontawesome- for free icons
