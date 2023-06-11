import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordService } from '../services/password.service';
import { Observable, Subscriber } from 'rxjs';
import { AES, enc } from 'crypto-js';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent {

  site_name!: string;
  site_url!: string;
  site_image_URL!: string;
  id!: string;

  formState: string = "Add new password";
  email!: string;
  username!: string;
  password!: string;
  passworid!: string;


  passwordList!: Array<any>;


  isSuccess: boolean = false;
  isSuccessMessage: string = "Success";

  constructor(private route: ActivatedRoute, private passwordService: PasswordService) {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params['id'];
      this.site_url = params['siteUrl'];
      this.site_image_URL = params['siteImgUrl'];
      this.site_name = params['siteName'];
    })

    this.loadPasswords();
  }

  showAlert(message: string) {
    this.isSuccessMessage = message;
    this.isSuccess = true;
  }

  resetForm() {
    this.email = "";
    this.password = "";
    this.username = "";
    this.formState = "Add new password";
  }

  onSubmit(f: any) {
    const encpassword = this.encryptPassword(f.password);

    if (this.formState === "Add new password") {
      this.passwordService.addPassword(this.id, { ...f, password: encpassword })
        .then(() => {
          this.showAlert("Data saved successfully")
          console.log('db data save');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.passwordService.updateSite(this.id, this.passworid, f)
        .then(() => {
          this.resetForm();
          this.showAlert("Data updated successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  loadPasswords() {
    this.passwordService.getSitePassword(this.id).subscribe((val)=>{
      this.passwordList = val;
    })
  }

  editPassword(email: string, password: string, username: string, id: string) {
    this.email = email;
    this.password = password;
    this.username = username;
    this.passworid = id;
    this.formState = "Edit password";
  }

  deletePassword(id: string) {
    this.passwordService.deleteeSite(this.id, id)
      .then(() => {
        this.showAlert("Data deletd successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onDcrypt(password: string, index: number) {
    // console.log(password,index);
    const descrptPassword = this.dcryptPassword(password);;
    this.passwordList[index].password = descrptPassword;
  }

  encryptPassword(password: string) {
    const encryptedKey = "ojdfij6d45d64dd4d4w4dw";
    const encryptedpassword = AES.encrypt(password, encryptedKey).toString();
    return encryptedpassword;
  }

  dcryptPassword(password: string) {
    const encryptedKey = "ojdfij6d45d64dd4d4w4dw";
    const encryptedpassword = AES.decrypt(password, encryptedKey).toString(enc.Utf8);
    return encryptedpassword;
  }
}
