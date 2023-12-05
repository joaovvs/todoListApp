import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { useState } from 'react';
import { TaskCard } from '../../components/TaskCard'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { EmptyList } from '../../components/EmptyList';

type Task = {
    taskName: string,
    done: boolean,
    created_at: Date,
    done_at: Date | null
}
export function Home(){
    const [newTask, setNewTask] = useState<Task>();
    const [ taskList,setTaskList] = useState<Task []>([]);


    function createTask(text: string){
        const taskCreated= {
            taskName: text,
            done: false,
            created_at: new Date(),
            done_at: null
        }

        setNewTask(taskCreated)
        
    }

    function sortByCreatedDate( a: Task, b: Task){
        if( a.created_at > b.created_at){
            return -1
        }
        if(a.created_at < b.created_at){
            1
        }
        return 0
    }


    function handleAddTask(){
        if(newTask){
            setTaskList(prevState => [newTask,...prevState].sort(sortByCreatedDate));
        }
        setNewTask(undefined);
    }
    function handleCheckBoxClick(task: Task){
        task.done= !task.done;
        if(task.done){
            task.done_at = new Date;
        } else {
            task.done_at= null;
        }

        setTaskList(prevState => [...prevState.
            filter(item => item.taskName !==task.taskName), task].sort(sortByCreatedDate));

            return task.done;
    }

    function handleTaskRemove(task: Task){
        Alert.alert("Remover", `Deseja remover a tarefa ${task.taskName} ?`,[
            {
                text: 'Sim',
                onPress: () => setTaskList(
                    prevState => prevState.
                    filter(item => item.taskName !==task.taskName))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function countDone(){
        const doneList = taskList;
        return doneList.filter(task => task.done===true).length;
    }

    return(
        <View style={styles.container}>
            <Header/>
            
            <View style={styles.searchWrapper}>
                <TextInput 
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={'#808080'}
                    value={newTask && newTask.taskName}
                    onChangeText={(text) => createTask(text)}
                />
                <TouchableOpacity
                    style={styles.button}  
                    onPress={handleAddTask}
                >
                    <Icon name="control-point" size={16} color="#F2F2F2"/>
                </TouchableOpacity>
            </View>

            <View style={styles.infoWrapper}>
                <View style={styles.info}>
                    <Text style={styles.created}>Criadas</Text>
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{taskList.length}</Text>
                    </View>
                </View>

                <View style={styles.info}>
                    <Text style={styles.done}>Concluídas</Text>
                    
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>
                            {   
                               countDone()
                            }
                        </Text>
                    </View>
                </View>
            </View>

            <FlatList 
                style={styles.taskList}
                data={taskList}
                renderItem={({item, index}) => (
                    <TaskCard 
                        key={index}
                        task={item}
                        onTaskCheck={() => handleCheckBoxClick(item)}
                        onRemove={() => handleTaskRemove(item)}
                    />
                )
            }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <EmptyList/>}
            />
        </View>
    )
}