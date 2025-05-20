import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from "react-native";
import Profile from "./components/profile";

const App: React.FC = () => {
  return (
      <ScrollView contentContainerStyle={styles.content}>
        <Profile />
      </ScrollView>
    
  );
}
const styles = StyleSheet.create({
 
  content: {
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: "#000",
  },
});
export default App;