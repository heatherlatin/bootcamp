# Planning

[Back to Table of Contents](../../../TABLE_OF_CONTENTS.md)
[Back to Routes](../../README.md)
[Back to API](../README.md)

## Routes

* POST - '/api/login'

    * User Login

    * Request Body:
    ```
    {
        email: <string - required>,
        password: <string - required>
    }
    ```

    * Server compares hashed password to request body password.

    * If it is a match it will start user session.

    * Fail at creating returns: 500 & message

* POST - '/api/signup'

    * User Sign Up

    * Request Body:
    ```
    {
        email: <string - required>,
        password: <string - required>
    }
    ```

    * Server creates user in database after hashing password.

    * Server Redirects to login route after creating user.

    * Fail at creating returns: 500 & message



* POST - '/api/logout'

    * User Logout

    * Server ends current user session.

    * Server Returns: 
    ```
    {}
    ```

* GET - '/api/user_data'

    * Get Logged in user

    * Server Returns: 

        * if logged in:
    ```
    {
        id: <num>,
        email: <string>
    }
    ```
    
        * if logged out:
    ```
    {}
    ```

[Back to Table of Contents](../../../TABLE_OF_CONTENTS.md)
[Back to Routes](../../README.md)
[Back to API](../README.md)