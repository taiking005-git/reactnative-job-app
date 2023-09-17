import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen"
import { ActivityIndicator } from 'react-native';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fonstLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fonstLoaded) await SplashScreen.hideAsync();
    }, [fonstLoaded])

    // if (!fonstLoaded) return "unable to load font";
    if (!fonstLoaded) return <ActivityIndicator size={"large"} color={"blue"} />;

    return (
        <Stack onLayour={onLayoutRootView} />
    )
}

export default Layout