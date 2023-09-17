import {useState} from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import {COLORS, FONT, SIZES, icons, images} from '../constants/index'
import ScreenHeaderBtn from './../components/ScreenHeaderBtn';
import Welcome from './../components/Welcome'
import Popularjobs from './../components/popular/Popularjobs';
import Nearbyjobs from "./../components/nearby/Nearbyjobs";

const Home = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lighWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lighWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle:""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding: SIZES.medium}}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home