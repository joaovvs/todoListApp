import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.clipboard}
                source={require('../../assets/clipboard.png')}
            />
            <View>
                <Text style={styles.emptyTitle}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyContent}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </View>
        </View>
    )
}
