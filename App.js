import { StatusBar } from 'expo-status-bar';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from './color';
import { useState } from 'react';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log(isDarkMode);
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  const onChangeText = (event) => {
    console.log(event);
  }

  const onSubmitEditing = (event) => {
    console.log(event);
  }

  return (
    <View style={[{ backgroundColor: currentTheme.bg }, styles.container]}>
      <View style={styles.header}>
        <Text style={[{ color: currentTheme.text }, styles.headerText]}>
          {`Pad Image \nExtractor`}
        </Text>
        <Pressable onPress={toggleDarkMode}>
          <Text style={[{ color: currentTheme.text }, styles.headerText]}>아이콘</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.inputDescription, { color: currentTheme.text }]}>경로</Text>
          <TextInput
            style={[{ backgroundColor: theme.common.grey, color: currentTheme.bg }, styles.input]}
            placeholder="경로"
            placeholderTextColor={"#020715"}
            onChangeText={onChangeText}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.inputDescription, { color: currentTheme.text }]}>몬스터 번호</Text>
          <TextInput
            style={[{ backgroundColor: theme.common.grey, color: currentTheme.bg }, styles.input]}
            placeholder="몬스터 번호"
            keyboardType='number-pad'
            maxLength={5}
            placeholderTextColor={"#020715"}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Pressable style={styles.button} onPress={onSubmitEditing}>
            <View style={{
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Text
                style={styles.buttonText}>
                Extract
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: SCREEN_WIDTH
  },
  header: {
    flex: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100
  },
  headerText: {
    fontSize: 44,
    fontWeight: "500"
  },
  inputContainer: {
    flex: 5,
    alignContent: "center",
    justifyContent: 'center'
  },
  inputDescription: {
    paddingHorizontal: 20,
    fontSize: 22,
    fontWeight: "500"
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: theme.common.grey, // 버튼 배경색상 추가
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    fontSize: 30,
    justifyContent: "center",
    alignContent: "center",
  }
});
