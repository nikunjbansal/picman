import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Card from '../components/Card'

import { storesContext } from '../stores'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 3
	}
})

export default function Groups(props) {
	const store = useContext(storesContext)

	debugger;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList 
				contentContainerStyle={{flexGrow: 1}}
				data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
				renderItem={({item, index}) => <Card title={"test"+index}/>}
				keyExtractor={item => item}
				numColumns={2}
			>
			</FlatList>
		</SafeAreaView>
	)
}