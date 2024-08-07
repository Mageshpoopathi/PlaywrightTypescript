Feature:Cyclos MarketPlace Payment

Background: MarketPlace selection
       Given User navigate to login page
        And Enter the username and password "demo" and "1234"
        And Click the submit
        And I navigate to the marketplace
        
 @marketCyclos @runall
 Scenario: Selecting Item 
    Given I select the item from marketplace
    And I perform the payment
    And I enter the amount for the item
    And I confirm the payment
    

