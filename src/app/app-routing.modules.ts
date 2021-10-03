import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewsDetailComponent } from "./shared/components/news-detail/news-detail.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'news-detail',
        component: NewsDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}