import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, PermissionsAndroid } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

import Card from '../components/Card'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 3
	}
})

const requestCameraPermission = async() => {
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

const getPhotos = (page, after="") => {
	debugger;
	return CameraRoll.getPhotos({
       first: page+20,
       after: after,
       assetType: 'Photos',
     })
     // .then(r => {
     // 	console.log("photos", JSON.stringify(r))
     //   this.setState({ photos: r.edges });
     // })
     // .catch((err) => {
     // 	console.log("error loading images", err)
     //    //Error Loading Images
     // });
}

export default function Home(props) {

	useEffect(() => {
		requestCameraPermission()
	}, [])

	const [currentPage, loadNextPage] = useState(0)
	const [photos, addPhotos] = useState([])
	const [end_cursor, setEndCursor] = useState("")
	useEffect(()=>{
		getPhotos(currentPage, end_cursor).then(pics => {
			addPhotos(pics.edges)
			loadNextPage(currentPage + 1)
			setEndCursor(pics.page_info.end_cursor)
		})
	})

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
      		{photos.map((p, i) => {
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
		</SafeAreaView>
	)
}