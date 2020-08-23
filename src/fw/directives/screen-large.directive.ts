import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from '../services/screen.service';

@Directive({selector : '[screenLarge]'})
export class ScreenLarge {

    private hasView = false;

    constructor(private screenService : ScreenService, 
        private viewContainer: ViewContainerRef,
        private templateRef : TemplateRef<Object>){
        screenService.resize$.subscribe(() => this.onResize());
    }

    @Input
    set screenLarge(condition){
        condition = this.screenService.isLarge;
        if(condition && !this.hasView){
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else if(!condition && this.hasView){
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize() : void {
        this.screenLarge = false;
    }


}