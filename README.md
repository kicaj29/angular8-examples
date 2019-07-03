# ViewChild static flag
https://angular.io/api/core/ViewChild
https://stackoverflow.com/questions/56359504/how-should-i-use-the-new-static-option-for-viewchild-in-angular-8
https://angular.io/guide/static-query-migration
https://github.com/angular/angular/blob/master/CHANGELOG.md

> core: In Angular version 8, it's required that all @ViewChild and @ContentChild queries have a 'static' flag specifying whether the query is 'static' or 'dynamic'. The compiler previously sorted queries automatically, but in 8.0 developers are required to explicitly specify which behavior is wanted. This is a temporary requirement as part of a migration; see static query migration guide for more details.
> 
> @ViewChildren and @ContentChildren queries are always dynamic, and so are unaffected.





