import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills((oldState) => [...oldState, data]);
    setNewSkill("");
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title} testID="welcome">
          Olá, Roberto
        </Text>

        <Text style={styles.greetings}>{greeting}</Text>

        <TextInput
          testID="input-new"
          style={styles.input}
          placeholder="Cadastre uma nova skill"
          placeholderTextColor="#777"
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button testID="button-add" title="Add" onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

        {mySkills && (
          <FlatList
            testID="flat-list-skills"
            data={mySkills}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SkillCard
                skill={item.name}
                onPress={() => handleRemoveSkill(item.id)}
              />
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121015",
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 7,
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
  },
  greetings: {
    color: "#fff",
  },
});
