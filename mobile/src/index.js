import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar} from 'react-native';
import api from './services/api';

export default function App () {
    const [projects, setProjects] = useState([]);

useEffect(() => {
    api.get('projects').then(response => {
        console.log(response.data);
        setProjects(response.data);
    });
}, []);

    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style = {styles.container}>
                <FlatList 
                    data = {projects}
                    keyExtractor = {project => project.id}
                    renderItem = { ({item: project}) => (
                        <Text key={project.id} style={styles.project}>
                            {project.title}
                        </Text>
                    )}
                />
            </SafeAreaView>
            {/* <View style={styles.container}>
                {projects.map(project =>( 
                    <Text key={project.id} style={styles.project}>
                        {project.title}
                    </Text>
                ))}
            </View> */}
        </>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, //faz ocupar a tela toda, sem isso, fica em branco pq o container ta vazio
        backgroundColor: `#123`,
        color: `#fff`
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    project: {
        color: `#fff`,
        fontSize: 20
    }
});