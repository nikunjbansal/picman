import { observable, action } from 'mobx';

class photo {
	@observable uri = "";
	@observable timestamp = null;
	@observable group = "";

	@action
	setUri = uri => this.uri = uri;

	@action
	setTimestamp = ts => this.timestamp = ts;
}

export default class PhotoStore {
	@observable photos = [];

	@action
	addPhoto = pic => this.photos.push(new photo(pic))
}