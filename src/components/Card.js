import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
      		height: 1
		},
		shadowOpacity: 0.34,
		shadowRadius: 2.27,
		elevation: 6,
		minWidth: 150,
		minHeight: 150,
		margin: 5
	}
})

export default function Card(props) {
	const [count, addCount] = useState(0);

	return (
		<TouchableOpacity style={styles.container} onPress={() => addCount(count + 1)}>
			<Text style={styles.title}>
				{props.title}
			</Text>
			<Text style={styles.title}>
				{count}
			</Text>
		</TouchableOpacity>
	)
}

Card.propTypes = {
	title: PropTypes.string
}