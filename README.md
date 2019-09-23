# ViewChild static flag
https://angular.io/api/core/ViewChild
https://stackoverflow.com/questions/56359504/how-should-i-use-the-new-static-option-for-viewchild-in-angular-8
https://angular.io/guide/static-query-migration
https://github.com/angular/angular/blob/master/CHANGELOG.md

> core: In Angular version 8, it's required that all @ViewChild and @ContentChild queries have a 'static' flag specifying whether the query is 'static' or 'dynamic'. The compiler previously sorted queries automatically, but in 8.0 developers are required to explicitly specify which behavior is wanted. This is a temporary requirement as part of a migration; see static query migration guide for more details.
> 
> @ViewChildren and @ContentChildren queries are always dynamic, and so are unaffected.

# @input binding for complex types
This example presents problem with binding via @input complex data types.
It was also reported as a bug [here](https://github.com/angular/angular/issues/11704).

When an input property of component is array or complex object, it's changes do not detected until reference is same. And we have no any way to tell component, that value is updated, besides to change whole object.





