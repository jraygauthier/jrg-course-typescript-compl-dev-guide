import { User } from './User'
import { Company } from './Company'

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    const mapElmt = document.getElementById(divId);
    if (mapElmt === null) {
      throw new Error(`Missing dom element with id of '${divId}'.`);
    }

    this.googleMap = new google.maps.Map(mapElmt, {
      zoom: 1,
      center: {lat: 0, lng: 0}
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }
}
