# Planning

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Stores](../README.md)

## Actions

* SET_USER

    * Sets loading to false, pageLoading to false, and user to ```action.user```

* USER_LOADING

    * Sets loading to true

* USER_ERROR

    * Sets loading to false, pageLoading to false, and error to ```action.message```

* CLEAR_USER_ERROR

    * Sets error to null

## State

* Initial:
```
{
    user: {},
    pageLoading: true,
    loading: false,
    error: null
}
```

## Hooks

* refresh - calls API to get user and run SET_USER with that data on component did mount.

[Back to Table of Contents](../../TABLE_OF_CONTENTS.md)
[Back to Stores](../README.md)