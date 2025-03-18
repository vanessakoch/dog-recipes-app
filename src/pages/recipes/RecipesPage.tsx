import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RecipesPage = () => {
    return (
        <View style={styles.itemsContainer}>
            <TouchableOpacity
                style={styles.item}
                onPress={() => null}
                activeOpacity={0.6}
            >
                <Image
                    style={styles.cardImage}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.itemTitle}>Receita 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => null}
                activeOpacity={0.6}
            >
                <Image
                    style={styles.cardImage}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.itemTitle}>Receita 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => null}
                activeOpacity={0.6}
            >
                <Image
                    style={styles.cardImage}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.itemTitle}>Receita 3</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => null}
                activeOpacity={0.6}
            >
                <Image
                    style={styles.cardImage}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.itemTitle}>Receita 4</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },

    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#ff6347',
        height: 150,
        width: 150,
        borderRadius: 12,
        padding: 10,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        elevation: 4,
    },

    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2,
    },

    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ff6347',
        marginTop: 10,
    },

    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },
});

export default RecipesPage;
