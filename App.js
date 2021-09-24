import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons' ;
import event from './components/form';

export default function App() {


    return (
        <View style = { styles.container }>
                { /* Todays Task */ }
             <ScrollView>
    	    <View style = { styles.taskWrapper }>
                <Text style = { styles.sectionTitle }>Events</Text>
                   {/*---------------------- Event 1 --------------------------------------------------------*/}
                 {/*  First Event */}
                <View>
                    {/* Date of Event */}
                    <Text style={styles.date}>11 NOV</Text>

                    {/*  Title of Events  */}
                    <Text style={styles.eventTitle}>Sunday Supper Club</Text>

                    {/*  Drawing a horizontal line*/}
                    <View style={{height: 2, backgroundColor: 'gray', marginTop: 15,marginBottom: 10}} />

                    {/* Time for the Event */}
                    <View style={styles.eventTime}>
                        <Text style={styles.eventTitle}>16:00 - 19:00</Text>
                        <View style={{height: 2, backgroundColor: 'gray', marginTop: 15,marginBottom: 20}} />
                    </View>

                    {/* Event Detail */}
                    <View>
                        <Text style={styles.detail}> 144W Elm St, Chicago, IL 60610, USA </Text>


                    {/* Buttons to add more details  */}
                        {/* <Button
                            onPress = {'hello'}
                            title = '+ Event Details'
                            color='#000'
                            textAlign= 'left'

                        />*/}

                        <TouchableOpacity onPress = {() => alert('A culinary event with foods from all over the world.This is a weekly club you can join for a small fee.Learn cooking methods from top chef')}>
                            <Text style = {styles.moreDetail}> + Event Details </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                  {/*---------------------- Event 2--------------------------------------------------------*/}
                <View>
                            {/* Date of Event 2 */}
                    <Text style={styles.date}>13 NOV</Text>

                            {/*  Title of Events  */}
                    <Text style={styles.eventTitle}>Evennings in the Park</Text>

                            {/*  Drawing a horizontal line*/}
                    <View style={{height: 2, backgroundColor: 'gray', marginTop: 15,marginBottom: 10}} />

                            {/* Time for the Event */}
                    <View style={styles.eventTime}>
                        <Text style={styles.eventTitle}>06:30 - 08:30</Text>
                        <View style={{height: 2, backgroundColor: 'gray', marginTop: 15,marginBottom: 20}} />
                    </View>
                            <View></View>

                            {/* Event Detail */}
                    <View>
                        <Text style={styles.detail}> Estuary Park </Text>

                        <TouchableOpacity onPress = {() => alert('We invite you to listen to live bands play beautiful music in the park.Enjoy the sounds of LaureenDevis and the kings and enjoy wine taste...')}>
                            <Text style = {styles.moreDetail}> + Event Details </Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <TouchableOpacity onPress = {event.addEvent}>
                    <View style={styles.addIcon}>
                        <MaterialCommunityIcons name="message-plus" size={32} color='#fff'/>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        fontSize: 500,
    },
    taskWrapper: {
        backgroundColor: '#000',
        marginTop: 25,
        paddingLeft: 30,
        paddingRight: 30
    },
    sectionTitle:{
        fontSize: 45,
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 60,
        height: 60,
        paddingLeft: 15,
        textAlign: 'center',
        color: '#000',
        marginBottom: 90,
    },
    date: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    eventTitle:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    eventTime:{
    width: 125
    },
    detail:{
        color: 'gray',
        paddingBottom: 25,
    },
    moreDetail:{
     color: 'orange',
     paddingTop: 10,
     paddingBottom: 20,
     width: 100,
    },
    addIcon: {
        borderRadius: 50,
        width: 45,
        height: 45,
        marginLeft: 300,
        backgroundColor: 'orange',
        paddingTop: 8,
        paddingLeft: 7
    }
});