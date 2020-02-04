Task 2: QA challenger Manual scenarios

Typos on the Readme:
Line 25: - **Size**: if **# of Employees** is less than or equal 100, size is **Small**; if greater then 10 and less then or equal 1000, **Medium**; otherwise, **Big**

Shouldn’t be : - **Size**: if **# of Employees** is less than or equal 100, size is **Small**; if greater than 100 and less than or equal 1000, **Medium**; otherwise, **Big**
 


Scenario 1:  The landing page text field correctly field
Given I am on the landing page
When the user insert a name in the text field 
And press the button “submit”
Then the customer list screen should be presented

Scenario 2:  The landing page text field should be mandatory
Given I am on the landing page
When the user leave the text field in blank
And press the button “submit”
Then the user should be a warning message
And the user should see his name and present date

Scenario 3: Customer List screen company name info screen
Given I am on the Customer List screen
When the user click on a company name inside the Name Column
Then the user should see the company info
And the info should contain ‘Name’, ‘# of Employees’, ‘Size’ and ‘Contact’
And if the ‘contact’ is not presented a message should be visible 

Scenario 4: Customer List screen company name info screen and press back button
Given I am on the Customer List screen
When the user click the back button
Then the user should be redirected to the Customer List screen 

Scenario 5: Size field
number of Employees >= 100 -> small
100 < # of Employees >= 1000   -> medium
number of Employees > 1000 -> big