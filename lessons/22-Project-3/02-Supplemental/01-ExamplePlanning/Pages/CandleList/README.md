# Planning

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Pages](../README.md)

## Mock Up

![Candle List Page](./Candle_List.png  "Candle List Mock Up")

### Components visible

* (App Level, not in this page directly)

    * [Nav Bar](../../Components/NavBar/README.md)

* Candle List Page

    * Run .map for [Candle](../../Components/Candle/README.md)

### Routes

* To Page: [GET - '/candles'](../../Routes/html/ROUTES.md)

* Retrieve Candles: [GET - '/api/candles'](../../Routes/API/Candle/ROUTES.md)

* Retrieve User: [GET - '/api/user_data'](../../Routes/API/User/ROUTES.md)

### Contexts

* [User](../../Stores/User/README.md)

    * refreshUser (hook) - when the component is loaded will refresh user to ensure user is logged in.

* [Candle](../../Stores/Candle/README.md)

    * candles (state) - an array of candle objects we will use to display the list of candles

    * refreshCandles (hook) - when the component is loaded will refresh candles to ensure we have up to date candle list displayed.

### User Story

* A user navigates to this page

* The page will retrieve user data to ensure the user is logged in

* if they are not logged in redirect them to the login page

* if they are logged in retrieve candle data and display it on the page

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Pages](../README.md)