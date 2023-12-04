import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { CheckBox } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


type Props ={
    task : { taskName: string, done: boolean};
    onRemove: () => void;
    onTaskCheck: () => boolean;
}

export function TaskCard({ task,  onRemove, onTaskCheck } : Props) {

    return (
        <View 
            style={styles.taskCard}>
            <CheckBox  size={24}
                checked={task.done}
                onPress={() => onTaskCheck()}
                checkedIcon={'check-circle-o'}
                checkedColor='#5E60CE'
                uncheckedIcon={'circle-o'}
                uncheckedColor='#4EA8DE'

            />
            <Text 
                style={task.done ? styles.taskNameDone :styles.taskName}
            >
                {task.taskName}
            </Text>
            <TouchableOpacity
                onPress={onRemove}
            >
                <Icon name='trash' size={14} color={"#808080"}/>
            </TouchableOpacity>
        </View>
    )
}