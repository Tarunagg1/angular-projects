import { Component } from '@angular/core';
import { PasswordManagerService } from '../services/password-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidelist',
  templateUrl: './sidelist.component.html',
  styleUrls: ['./sidelist.component.css']
})
export class SidelistComponent {

  allSites!: Observable<Array<any>>;
  site_name!: string;
  site_url!: string;
  site_image_URL!: string;
  id!: string;
  formState: string = "Add new";
  isSuccess:boolean = false;
  isSuccessMessage:string = "Success";

  showAlert(message:string){
    this.isSuccessMessage = message;
    this.isSuccess = true;
  }

  constructor(private passwordManager: PasswordManagerService) {
    this.loadSites();
  }

  onSubmit(values: Object) {
    if (this.formState === "Add new") {
      this.passwordManager.addSite(values)
        .then(() => {
          this.showAlert("Data saved successfully")
          console.log('db data save');
        })
        .catch((err) => {
          console.log(err);

        });
    } else {
      this.passwordManager.updateSite(this.id, values)
        .then(() => {
          this.isSuccess = true;
          console.log('db updated');
          this.showAlert("Data updated successfully")

          // this.formState = "add new";
          this.loadSites();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  loadSites() {
    this.allSites = this.passwordManager.getSite();
  }

  editSite(site_name: string, site_url: string, site_image_URL: string, id: string) {
    this.site_name = site_name;
    this.site_image_URL = site_image_URL;
    this.site_url = site_url;
    this.id = id;
    this.formState = "Update";
  }

  deleteSite(id: string) {
    this.passwordManager.deleteeSite(id)
      .then(() => {
        this.showAlert("Data deletd successfully")
        this.loadSites();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
