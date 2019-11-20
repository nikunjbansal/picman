import React, { Component } from 'react';
import { View, Text, Image, PermissionsAndroid, ScrollView } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

export default class ImageRoll extends Component {
	constructor(props) {
		super(props)
		this.state = {
			photos: []
		}
	}

	componentDidMount() {
		this.requestCameraPermission()
		CameraRoll.getPhotos({
	       first: 20,
	       assetType: 'Photos',
	     })
	     .then(r => {
	     	console.log("photos", JSON.stringify(r))
	       this.setState({ photos: r.edges });
	     })
	     .catch((err) => {
	     	console.log("error loading images", err)
	        //Error Loading Images
	     });
	}

	async requestCameraPermission() {
	  try {
	    const granted = await PermissionsAndroid.request(
	      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
	      {
	        title: 'Cool Photo App Camera Permission',
	        message:
	          'Cool Photo App needs access to your camera ' +
	          'so you can take awesome pictures.',
	        buttonNeutral: 'Ask Me Later',
	        buttonNegative: 'Cancel',
	        buttonPositive: 'OK',
	      },
	    );
	    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
	      console.log('You can use the camera');
	    } else {
	      console.log('Camera permission denied');
	    }
	  } catch (err) {
	    console.warn(err);
	  }
	}

	render() {
		if(this.state.photos.length == 0) {
			return <View><Text>No Images</Text></View>
		}

		return (
			<ScrollView>
      		{this.state.photos.map((p, i) => {
		       	return (
		         <Image
		           key={i}
		           style={{
		             width: 300,
		             height: 300,
		           }}
		           source={{ uri: p.node.image.uri }}
		         />
		       	);
     		})}
	     	</ScrollView>
		)

	}

}