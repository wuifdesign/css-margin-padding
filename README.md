## Margin and Padding Classes for CSS

##### Screen Sizes:
- xs: <768px
- sm: <992px
- md: <1200px

##### Margin Sizes:
- xs: 4px
- sm: 8px
- default: 15px
- lg: 30px
- xl: 60px

##### Padding Sizes:
- xs: 4px
- sm: 8px
- default: 15px
- lg: 30px
- xl: 60px

### Maring Classes

#### Usage

The default margin classes are:

    .m-0
    .m-0-auto

    .m-t
    .m-b
    .m-t-b
    .m-l
    .m-r
    .m-l-r

For all classes except "0" and "0-auto" you can add the size at the end:

    .m-t-xs
    .m-b-xs
    .m-t-b-xs
    .m-l-xs
    .m-r-xs
    .m-l-r-xs

**Available sizes are: xs, sm, lg, xl**

#### Responsive

You can add the size of the screen after the "m" in the class name. This will take effect for all screens smaller than this.

    .m-md-0
    .m-md-0-auto
    .m-md-t
    .m-md-t-b-xl
    ...

### Padding Classes

#### Usage

The default padding classes are:

    .p-none

    .p-t
    .p-b
    .p-t-b
    .p-l
    .p-r
    .p-l-r

For all classes except "none" you can add the size at the end:

    .p-t-xs
    .p-b-xs
    .p-t-b-xs
    .p-l-xs
    .p-r-xs
    .p-l-r-xs

**Available sizes are: xs, sm, lg, xl**

#### Responsive

You can add the size of the screen after the "p" in the class name. This will take effect for all screens smaller than this.

    .p-md-none
    .p-md-t
    .p-md-t-b-xl
    ...


