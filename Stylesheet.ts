import {ScaledSize, StyleSheet, useWindowDimensions} from "react-native";

const useStyle = () => {
    const window: ScaledSize = useWindowDimensions()
    const styles = StyleSheet.create({
        main: {
            margin: 10,
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            minWidth: '80%'
        },
        hamburger: {
            margin: window.width * 0.05,
            minWidth: '80%'
        },
        title: {
            fontSize: 60 / window.fontScale
        },
        subtitle: {
            fontSize: 30 / window.fontScale
        }
    })
    return {styles}
}

export default useStyle
