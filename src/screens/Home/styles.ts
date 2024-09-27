import {StyleSheet} from "react-native";
import {theme} from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray600,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 10,
        alignSelf: "center",
    },
    containerLogo: {
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        backgroundColor: theme.colors.gray700,
    },
    input: {
        flex: 1,
        height: 55,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 6,
        backgroundColor: theme.colors.gray500,
    },
    inputContainer: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginTop: -30,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        width: 55,
        height: 55,
        borderRadius: 5,
        backgroundColor: theme.colors.blueDark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subMenuContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 35,
    },
    horizontalBar: {
        borderBottomColor: theme.colors.gray400,
        borderBottomWidth: 2,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    clearButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        position: "absolute",
    },
    clearButton: {}
});