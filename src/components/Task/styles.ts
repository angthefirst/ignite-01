import {StyleSheet} from "react-native";
import {theme} from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        padding: 18,
        backgroundColor: theme.colors.gray500,
        marginBottom: 10,
        justifyContent: "space-between",
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    checkedDefault: {
        width: 28,
        height: 28,
    },
    uncheckedDefault: {
        width: 28,
        height: 28,
    },
    trashIcon: {
        fontWeight: "bold",
        fontSize: 30,
    },
    taskDescription: {
        fontSize: 14,
        color: theme.colors.gray100,
        marginTop: 3,
        maxWidth: 200,
    },
    taskDescriptionCompleted: {
        fontSize: 14,
        color: theme.colors.gray300,
        marginTop: 3,
        maxWidth: 200,
        textDecorationLine: "line-through",
    }
});