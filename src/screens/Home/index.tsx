import {Image, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "./styles";
import {theme} from "../../theme/theme";
import {useState} from "react";
import {SubMenu} from "../../components/SubMenu";
import { AntDesign } from "@expo/vector-icons";

export function Home(){
    const [isInputFocused, setInputFocused] = useState(false);
    const [isBtnAddFocused, setBtnAddFocused] = useState(false);
    const [text, setText] = useState('');

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
                        style={[styles.input, isInputFocused ? {borderColor: theme.colors.purpleDark, borderWidth: 2} : {}]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={theme.colors.gray300}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        onChangeText={setText}
                        value={text}
                    />
                    <TouchableOpacity style={isBtnAddFocused? styles.button : styles.buttonPressed}
                                      activeOpacity={0.9}
                                      onPress={() => setBtnAddFocused(true)}
                                      onBlur={() => setInputFocused(false)}
                    >
                        <AntDesign name="pluscircleo" size={24} style={styles.buttonText} color={theme.colors.gray100}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.subMenuContainer}>
                    <SubMenu color={theme.colors.blue} quantity={0} text={"Criadas"}/>
                    <SubMenu color={theme.colors.purpleDark} quantity={0} text={"Concluídas"}/>
                </View>
                <View style={styles.horizontalBar}/>

                <View>
                    <Image
                        source={require('../../../assets/clipboard.png')}
                        style={styles.logoEmpty}
                        resizeMode={"contain"}/>
                    <Text style={[styles.textEmpty, {fontWeight: "bold"}]}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}