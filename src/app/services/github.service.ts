import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = 'Vincent-Juma';
  private client_id = '02fb1cb9cc7e0054c646';
  private client_secret='ab40697c89af8c3b801f7e0f85d7a7f1e4cc0682';
  
  constructor(private http: HttpClient) {
    console.log("Github is initializing..");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos" +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
