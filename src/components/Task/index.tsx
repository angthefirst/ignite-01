import {Text, View} from "react-native";
import {TaskEntity} from "../../domain/TaskEntity";
import {Feather} from "@expo/vector-icons";
import {styles} from "./styles";

interface Props {
  task: TaskEntity
}

export function Task(props: Props) {
  return (
      <View style={styles.container}>
        <Feather name="circle" size={24} color="black"/>
        <Text>{props.task.taskDescription}</Text>
      </View>
  );
}