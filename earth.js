import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import EventSection from './news';

const ProjectSection = () => {
    return (
        <ScrollView>
            {/* Environmental News Updates */}
            <View style={styles.events}>
                <Text style={styles.heading}>Our Events</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.eventBoxContainer}>
                        <View style={styles.eventBox}>
                            <Image source={require('./images/event1.jpg')} style={styles.eventImage} />
                            <View style={styles.eventContent}>
                                <Text style={styles.eventDate}>1 May, 2021 / 09:00am to 06:00pm</Text>
                                <Text style={styles.eventTitle}>Saving the Environment and Planting Trees</Text>
                                <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</Text>
                                <TouchableOpacity style={styles.eventBtn}>
                                    <Text style={styles.eventBtnText}>Participate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.eventBox}>
                            <Image source={require('./images/event2.jpg')} style={styles.eventImage} />
                            <View style={styles.eventContent}>
                                <Text style={styles.eventDate}>1 May, 2021 / 09:00am to 06:00pm</Text>
                                <Text style={styles.eventTitle}>Saving the Environment and Planting Trees</Text>
                                <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</Text>
                                <TouchableOpacity style={styles.eventBtn}>
                                    <Text style={styles.eventBtnText}>Participate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.eventBox}>
                            <Image source={require('./images/event3.jpg')} style={styles.eventImage} />
                            <View style={styles.eventContent}>
                                <Text style={styles.eventDate}>1 May, 2021 / 09:00am to 06:00pm</Text>
                                <Text style={styles.eventTitle}>Saving the Environment and Planting Trees</Text>
                                <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</Text>
                                <TouchableOpacity style={styles.eventBtn}>
                                    <Text style={styles.eventBtnText}>Participate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.eventBox}>
                            <Image source={require('./images/event4.jpg')} style={styles.eventImage} />
                            <View style={styles.eventContent}>
                                <Text style={styles.eventDate}>1 May, 2021 / 09:00am to 06:00pm</Text>
                                <Text style={styles.eventTitle}>Saving the Environment and Planting Trees</Text>
                                <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident quidem sapiente placeat odit modi architecto accusantium numquam ea tempore?</Text>
                                <TouchableOpacity style={styles.eventBtn}>
                                    <Text style={styles.eventBtnText}>Participate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Add more event boxes here */}
                    </View>
                </ScrollView>
            </View>

            {/* Our Projects */}
            <View style={styles.project}>
                <Text style={styles.heading}>Our Projects</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.boxContainer}>
                        {/* Project 1 */}
                        <View style={styles.box}>
                            <Image source={require('./images/project-1.jpg')} style={styles.image} />
                            <Text style={styles.title}>Planting Trees</Text>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Planting Trees</Text>
                                <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</Text>
                                <TouchableOpacity style={styles.readMoreButton}>
                                    <Text style={styles.readMoreText}>Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Project 2 */}
                        <View style={styles.box}>
                            <Image source={require('./images/project-2.jpg')} style={styles.image} />
                            <Text style={styles.title}>Wind Energy</Text>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Wind Energy</Text>
                                <Text style={styles.infoText}>Lorem ipsum dolor am ducimus harum.</Text>
                                <TouchableOpacity style={styles.readMoreButton}>
                                    <Text style={styles.readMoreText}>Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Project 3 */}
                        <View style={styles.box}>
                            <Image source={require('./images/project-3.jpg')} style={styles.image} />
                            <Text style={styles.title}>Saving Animals</Text>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Saving Animals</Text>
                                <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</Text>
                                <TouchableOpacity style={styles.readMoreButton}>
                                    <Text style={styles.readMoreText}>Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Project 4 */}
                        <View style={styles.box}>
                            <Image source={require('./images/project-4.jpg')} style={styles.image} />
                            <Text style={styles.title}>Recycling Waste</Text>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Recycling Waste</Text>
                                <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint aliquam velit in autem doloribus nam optio laboriosam ducimus harum.</Text>
                                <TouchableOpacity style={styles.readMoreButton}>
                                    <Text style={styles.readMoreText}>Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Add more project boxes here */}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    project: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    box: {
        width: deviceWidth / 2 - 30, // Adjust width according to screen size
        height: 250, // Adjust height according to screen size
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '70%',
    },
    title: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        position: 'absolute',
        bottom: -50,
        left: deviceWidth / 2 - 50, // Dynamically calculate the left position
        transform: [{ translateX: -(deviceWidth / 2 - 50) }], // Dynamically calculate the translation
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00aaff',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 14,
        color: '#666',
    },
    readMoreButton: {
        marginTop: 10,
    },
    readMoreText: {
        color: '#00aaff',
        fontSize: 14,
    },
    newsContainer: {
        marginTop: 10,
    },
    diyContainer: {
        marginTop: 20,
    },
    events: {
        backgroundColor: '#F6FCFF',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    eventBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventBox: {
        width: 250,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    eventImage: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    },
    eventContent: {
        padding: 15,
    },
    eventDate: {
        fontSize: 16,
        color: '#00aaff',
        marginBottom: 5,
    },
    eventTitle: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
    },
    eventDescription: {
        fontSize: 14,
        color: '#999',
        marginBottom: 10,
    },
    eventBtn: {
        backgroundColor: '#00aaff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    eventBtnText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ProjectSection;
