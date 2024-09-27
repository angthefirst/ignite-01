import {
    Alert,
    FlatList,
    Image,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {styles} from "./styles";
import {theme} from "../../theme/theme";
import {useState} from "react";
import {SubMenu} from "../../components/SubMenu";
import { AntDesign } from "@expo/vector-icons";
import {TaskEntity} from "../../domain/TaskEntity";
import {Task} from "../../components/Task";

export function Home(){
    const [isInputFocused, setInputFocused] = useState(false);
    const [isBtnAddFocused, setBtnAddFocused] = useState(false);
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState<Array<TaskEntity>>([]);

    function handleOnCheck(task: TaskEntity) {
        const newTasks = tasks.map(t => {
            if (t.uuid === task.uuid) {
                t.isCompleted = !t.isCompleted;
            }
            return t;
        });
        setTasks(newTasks);
    }

    function handleOnDelete(task: TaskEntity) {
        Alert.alert("Atenção", "Deseja realmente excluir a tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    const newTasks = tasks.filter(t => t.uuid !== task.uuid);
                    setTasks(newTasks);
                }
            },
            {
                text: "Não"
            }
        ]);
    }

    function getQuantityOfTasks() {
        return tasks.length;
    }

    function getCompletedTasks() {
        return tasks.reduce((acumulator, task) => task.isCompleted ? acumulator + 1 : acumulator, 0);
    }

    function handleAddTodo() {
        if (text.trim() === "" || text == "") {
            Alert.alert("Atenção", "A tarefa não pode ser vazia");
            return;
        }

        const newTask = new TaskEntity(Math.random().toString(36).substring(7), text, false);
        setTasks([...tasks, newTask]);
        setText("");
    }

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
                                      activeOpacity={1}
                                      onPressIn={() => setBtnAddFocused(true)}
                                      onPressOut={() => setBtnAddFocused(false)}
                    >
                        <AntDesign onPress={() => handleAddTodo()}
                            name="pluscircleo" size={24} style={styles.buttonText} color={theme.colors.gray100}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.subMenuContainer}>
                    <SubMenu color={theme.colors.blue} quantity={getQuantityOfTasks()} text={"Criadas"}/>
                    <SubMenu color={theme.colors.purpleDark} quantity={getCompletedTasks()} text={"Concluídas"}/>
                </View>
                {tasks.length == 0 &&
                    <View style={styles.horizontalBar}/>
                }

                <FlatList data={tasks}
                          renderItem={({item}) => (
                    <Task task={item}
                          onDelete={(task: TaskEntity) => handleOnDelete(task)}
                          onCheck={(task: TaskEntity) => handleOnCheck(task)} />
                )}
                          ListEmptyComponent={
                              <View>
                                  <Image
                                      source={require('../../../assets/clipboard.png')}
                                      style={styles.logoEmpty}
                                      resizeMode={"contain"}/>
                                  <Text style={[styles.textEmpty, {fontWeight: "bold"}]}>Você ainda não tem tarefas
                                      cadastradas</Text>
                                  <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                              </View>
                          }
                />
            </View>
        </TouchableWithoutFeedback>
    )
}