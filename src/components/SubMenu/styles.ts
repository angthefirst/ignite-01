import {theme} from "../../theme/theme";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    subMenuText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    container: {
        flexDirection: "row",
    },
    quantity: {
        marginLeft: 8,
        backgroundColor: theme.colors.gray400,
        borderRadius: 20,
        marginTop: -3,
    },
    quantityText: {
        color: theme.colors.gray100,
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        fontWeight: "bold",
    }
});