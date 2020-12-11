# Planning

[Back to Table of Contents](../../../TABLE_OF_CONTENTS.md)
[Back to Routes](../../README.md)
[Back to API](../README.md)

## Routes

* GET - '/api/candles'

    * Get All Candles

    * User Validation: Must be logged in.
    
        * Fail: returns 403 status - Forbidden

    * Server Returns: 
    ```
    [
        {
            id: <num>,
            name: <string>,
            scent: <string>,
            height: <num>,
            UserId: <id>
        }
        ...
    ]
    ```

* POST - '/api/candles'

    * Create Candle

    * User Validation: Must be logged in.
    
        * Fail: returns 403 status - Forbidden

    * Request Body:
    ```
    {
        name: <string - required>,
        scent: <string - required>,
        height: <num - required>
    }
    ```

    * Server Returns: 
    ```
    {
        id: <num>,
        name: <string>,
        scent: <string>,
        height: <num>
    }
    ```

    * Fail at creating returns: 500 & message

[Back to Table of Contents](../../../TABLE_OF_CONTENTS.md)
[Back to Routes](../../README.md)
[Back to API](../README.md)