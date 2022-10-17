// Intructions to every other class on how they can be an argument to
// 'addMarker'.
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;

  color: string;
}

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

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });

  }

  /*
  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
  */

  /*
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
  */
}
