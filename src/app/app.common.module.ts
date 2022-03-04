import { NgPrimeModule } from 'src/app/app.ngprime.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: []
})
export class AppCommonModule {

}
