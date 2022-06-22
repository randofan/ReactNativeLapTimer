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
            margin: 10,
            minWidth: '80%'
        },
        title: {
            fontSize: 30 / window.fontScale
        },
        subtitle: {
            fontSize: 20 / window.fontScale
        }
    })
    return {styles}
}

export default useStyle
