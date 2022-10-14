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

  addMarker(): void {

  }
}
