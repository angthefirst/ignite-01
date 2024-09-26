import {Text, View} from "react-native";
import {styles} from "./styles";

interface Props {
    color: string,
    text: string,
    quantity: number
}

export function SubMenu(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.subMenuText, {color: props.color}]}>{props.text}</Text>
            <View style={styles.quantity}>
                <Text style={styles.quantityText}>{props.quantity}</Text>
            </View>
        </View>
    )
}