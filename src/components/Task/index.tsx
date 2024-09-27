import {Image, Text, TouchableOpacity, View} from "react-native";
import {TaskEntity} from "../../domain/TaskEntity";
import {styles} from "./styles";
import {useState} from "react";
import {EvilIcons} from "@expo/vector-icons";
import {theme} from "../../theme/theme";

interface Props {
    task: TaskEntity,
    onDelete: (task: TaskEntity) => void,
    onCheck: (task: TaskEntity) => void
}

export function Task(props: Props) {
    const [checkIsPressed, setCheckIsPressed] = useState(false);
    const [trashIsPressed, setTrashIsPressed] = useState(false);

    const checkedDefault = require("../../../assets/checkedDefault.png");
    const checkedHover = require("../../../assets/checkedHover.png");
    const uncheckedDefault = require("../../../assets/uncheckedDefault.png");
    const uncheckedHover = require("../../../assets/uncheckedHover.png");

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                    setCheckIsPressed(true);
                    props.onCheck(props.task);
                }}
                onPressOut={() => setCheckIsPressed(false)}>
                {props.task.isCompleted ?
                    <Image style={styles.checkedDefault} source={checkIsPressed ? checkedHover : checkedDefault}/> :
                    <Image style={styles.uncheckedDefault} source={checkIsPressed ? uncheckedHover : uncheckedDefault}/>
                }
            </TouchableOpacity>
            <Text style={props.task.isCompleted? styles.taskDescriptionCompleted : styles.taskDescription}>{props.task.taskDescription}</Text>
            <EvilIcons name="trash"
                       onPressIn={() => setTrashIsPressed(true)}
                       onPressOut={() => setTrashIsPressed(false)}
                       color={trashIsPressed? theme.colors.danger : theme.colors.gray300}
                       style={styles.trashIcon}
                       onPress={() => props.onDelete(props.task)}/>
        </View>
    );
}