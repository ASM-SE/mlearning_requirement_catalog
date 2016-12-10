import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Requirement } from './requirement';
import { RequirementService } from './requirement.service';

@Component({
  moduleId: module.id,
  selector: 'requirement-form',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class RequirementFormComponent implements OnInit {
  requirement: Requirement;

  constructor(
    private reqSvc : RequirementService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.reqSvc.getRequirement(+params['id'])) //The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
            .subscribe(requirement => this.requirement = requirement); //The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so we don't need to unsubscribe from the route params Observable
    }

    goBack(): void {  //Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
        this.location.back();
    }

    save() : void {
      this.heroService.update(this.hero)
        .then(() => this.goBack());
    }
}
