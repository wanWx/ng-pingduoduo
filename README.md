# NgPingduoduo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### 生命周期
```
    constructor                 // 构造函数永远首先调用
    ngOnChanges                 // 输入属性变化时被调用
    ngOnInit                    // 组件初始化时被调用
    ngDoCheck                   // 脏值检测时调用
        ngAfterContentInit      // 当内容投影ng-content完成时调用
        ngAfterContentChecked   // Angular检测投影内容时调用（多次）
        ngAfterViewInit         // 当组件视图（子视图）初始化完成时
        ngAfterViewChecked      // 当检测视图变化时（多次）
    ngOnDestroy                 // 当组件销毁时
```
### 模板在组件类中的引用
#### @ViewChild 总结
    @ViewChild 用来在类中引用模板中的视图节点
    可以是Angular组件，也可以是HTML元素
    在AfterViewInit中可以安全的使用@ViewChild引用的元素
    推荐使用Renderer2操作DOM元素