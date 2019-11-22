import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  /**
   * 根路由使用 `RouterModule.forRoot(routes)` 形式。
   * 而功能模块中的路由模块使用 `outerModule.forChild(routes)` 形式。
   * 启用路由的 debug 跟踪模式，需要在根模块中设置 `enableTracing: true`
   */
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
