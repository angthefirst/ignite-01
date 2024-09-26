import {Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "./styles";
import {theme} from "../../theme/theme";
import {useState} from "react";
import {SubMenu} from "../../components/SubMenu";

export function Home(){
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode={"contain"}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, isFocused ? {borderColor: theme.colors.purpleDark, borderWidth: 2} : {}]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={theme.colors.gray300}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.subMenuContainer}>
                    <SubMenu color={theme.colors.blue} quantity={0} text={"Criadas"}/>
                    <SubMenu color={theme.colors.purpleDark} quantity={0} text={"Concluídas"}/>
                </View>
                <View style={styles.horizontalBar}/>
            </View>
        </TouchableWithoutFeedback>
    )
}