# Planning

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Stores](../README.md)

## Actions

* SET_CANDLES

    * Sets loading to false, pageLoading to false, and candles to ```action.candles```

* CANDLE_LOADING

    * Sets loading to true

* ADD_CANDLE

    * Sets loading to false, and candles to a new array with ```action.candle``` at the top and the previous candles afterwards.

* CANDLES_ERROR

    * Sets loading to false, pageLoading to false, and error to ```action.message```

* CLEAR_CANDLES_ERROR

    * Sets error to null

## State

* Initial:
```
{
    candles: [],
    pageLoading: true,
    loading: false,
    error: null
}
```

## Hooks

* refresh - calls API to get candles and run SET_CANDLES with that data on component did mount.

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Stores](../README.md)