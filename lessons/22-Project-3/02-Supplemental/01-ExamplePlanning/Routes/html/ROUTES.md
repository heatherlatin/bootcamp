# Planning

## Routes

* GET - '/'

    * Home Page

    * User Validation: Must be logged in.
    
        * Fail: redirects to '/login'

    * Server: Returns built react html page.

    * React Router Renders: Pages/Home

* GET - '/candles'

    * Candle List Page

    * User Validation: Must be logged in.
    
        * Fail: redirects to '/login'

    * Server: Returns built react html page.

    * React Router Renders: Pages/Candle/List

* GET - '/candles/create'

    * Create Candle Page

    * User Validation: Must be logged in.
    
        * Fail: redirects to '/login'

    * Server: Returns built react html page.

    * React Router Renders: Pages/Candle/Form

* GET - '/login'

    * Login Page

    * User Validation: Must not be logged in.
    
        * Fail: redirects to '/'

    * Server: Returns built react html page.

    * React Router Renders: Pages/User/Login

* GET - '/signup'

    * Sign Up Page

    * User Validation: Must not be logged in.
    
        * Fail: redirects to '/'

    * Server: Returns built react html page.

    * React Router Renders: Pages/User/SignUp

* GET - '*'

    * 404 Page

    * User Validation: None

    * Server: Returns status 404 and returns built react html page.

    * React Router Renders: Pages/404